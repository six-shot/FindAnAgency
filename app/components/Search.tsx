"use client";
import React, {  useState } from "react";
import axios from "axios";
import { IoClose, IoSearch } from "react-icons/io5";
import debounce from "lodash/debounce"; // Import the debounce function
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";



const Search = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearch = debounce((searchTerm: string) => {
    if (searchTerm === "") {
      // If input is empty, do not perform the search
      setTasks([]);
      setIsLoading(false);
      return;
    }

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
  }, 300);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setInput(searchTerm);

    if (searchTerm === "") {
      // If input is empty, hide the search results section and clear the results
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

  const closeResults = () => {
    // Clear the input and search results
    setTasks([]);
    setInput("");
  };

  return (
    <div className="relative w-full xl:flex flex-col xl:items-center">
      <form onSubmit={(e) => searchTask(e)}>
        <div className="z-[999] xl:w-[700px] w-full h-[60px] rounded-[50px] bg-white flex px-6 justify-between items-center">
          <input
            className="outline-none bg-transparent w-full h-full px-4"
            type="text"
            value={input}
            onChange={(e) => handleInputChange(e)}
          />
          <div>
            <div>
              {isLoading ? (
                <span className="loader"></span>
              ) : (
                <>
                  {tasks.length > 0 ? (
                    <IoClose className="text-[25px]" onClick={closeResults} />
                  ) : (
                    <IoSearch className="text-[25px]" />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </form>

      {!isLoading && input.trim() !== "" && tasks.length === 0 && (
        <div className="xl:w-[700px] w-full py-2 mt-3 bg-white rounded">
          <p>No search results found.</p>
        </div>
      )}

      {tasks.length > 0 && input.trim() !== "" && (
        <div className="z-[999] xl:w-[700px] w-full py-2 mt-3 bg-white rounded flex flex-col gap-3 px-6 justify-between ">
          {tasks.map((task) => (
            <Link href={`/agency/${task.id}`} key={task.id}>
              <div className="flex items-center gap-2">
                <div className="w-[300px] h-[60px]">
                  <Image
                    src={task.logoURL}
                    alt="logo"
                    width={300}
                    height={60}
                  />
                </div>
                <div className="">
                  <h5 className="text-sm text-blue-700 font-medium font-nunito">
                    {task.name}
                  </h5>
                  <p className="text-sm -mt-1">{task.about}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
