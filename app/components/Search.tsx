"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoSearch } from "react-icons/io5";
import debounce from "lodash/debounce"; // Import the debounce function
import { useRouter } from "next/navigation";

const Search = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearch = debounce((searchTerm: string) => {
    setIsLoading(true);
    axios
      .get(`https://gind-agencies.onrender.com/api/search?`, {
        params: {
          search: searchTerm,
        },
      })
      .then((res) => {
        const taskResults = res?.data?.data;
        setTasks(taskResults);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, 300); // Adjust the debounce delay as needed

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setInput(searchTerm);

    if (searchTerm === "") {
      // If input is empty, hide the search results section
      setTasks([]);
    } else {
      // If input is not empty, trigger the debounced search
      debouncedSearch(searchTerm);
    }
  };

  const searchTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`?task=${input}`);
    
  };

  return (
    <div className="relative xl:flex flex-col xl:items-center">
      <form onSubmit={(e) => searchTask(e)}>
        <div className="z-[999] xl:w-[700px] w-full h-[60px] rounded-[50px] bg-white flex px-6 justify-between items-center">
          <input
            className="outline-none bg-transparent w-full h-full px-4"
            type="text"
            value={input}
            onChange={(e) => handleInputChange(e)} // Change here to handle input change
          />
          <div>
            <div>
              {isLoading ? (
                <span className="loader"></span>
              ) : (
                <IoSearch className="text-[25px]" />
              )}
            </div>
          </div>
        </div>
      </form>

      {!isLoading && tasks.length === 0 && input.trim() !== "" && (
        <p>No results found. Use client.</p>
      )}

      {tasks.length > 0 && (
        <div className="z-[999] xl:w-[700px] w-full py-6 mt-3 bg-white flex px-6 justify-between items-center">
          {tasks.map((task) => (
            <div className="" key={task.id}>
              <h5>{task.name}</h5>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
