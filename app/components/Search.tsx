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
    debouncedSearch(searchTerm);
  };

  const searchTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`?task=${input}`);
    // Remove the debouncedSearch call from here
  };

  return (
    <div>
      <form onSubmit={(e) => searchTask(e)}>
        <div className="z-[999] w-[700px] h-[60px] rounded-[50px] bg-white flex px-6 justify-between items-center  ">
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

      {!isLoading && tasks.length === 0 && <p>No results found. Use client.</p>}

      <div className="grid sm:grid-cols-2 sm:gap-10 gap-5 grid-col-1">
        {tasks.map((task) => (
          <div className="" key={task.id}>
            <h5>{task.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
