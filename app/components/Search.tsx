"use client";
import * as AiIcons from "react-icons/ai";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import axios from "axios";

import { IoClose, IoSearch } from "react-icons/io5";
import Image from "next/image";
import SearchResults from "./SearchResults";
const Search = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noResult, setNoResult] = useState(false);

  useEffect(() => {
    // Define a function to handle the search logic
 
const handleSearch = async () => {
  setIsLoading(true);

  // Use the input value directly instead of searchParams
  let searchTask = input;

  const getSearchedTask = async () => {
    if (searchTask) {
      console.log("searches");

      await axios
        .get(`https://gind-agencies.onrender.com/api/search?`, {
          params: {
            search: searchTask,
          },
        })
        .then((res) => {
          const taskResults = res?.data?.data;
          console.log(res.data);
          if (taskResults.length === 0 || taskResults === undefined) {
            setNoResult(true);
          } else {
            setNoResult(false);

            // Filter results based on closeness to the input
            const filteredResults = taskResults.filter((task:Task) =>
              task.name.toLowerCase().includes(searchTask.toLowerCase())
            );

            setTasks(filteredResults);
          }
        })
        .catch((error) => {
          console.error(error);

          setNoResult(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      // If no search task is present, you can set your dummy data here
      setTasks([]);
      setIsLoading(false);

      router.push("/");
    }
  };

  // Call the search function
  getSearchedTask();
};

    // Use a timeout to delay the search and avoid unnecessary API calls on each keystroke
    const timeoutId = setTimeout(handleSearch, 500);

    // Clear the timeout on cleanup to prevent unwanted side effects
    return () => clearTimeout(timeoutId);
  }, [input, router]);

  const searchTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
 if (tasks.length > 0) {
    router.push(`?task=${input}`);
    setInput("");
  }

  };
  const closeResults = () => {
    setTasks([]);
    setInput("");
  };
  return (
    <div className="flex flex-col">
      <form onSubmit={(e) => searchTask(e)}>
        <div className="z-[999] border-[1px] border-[#192dad] xl:w-[65vw] w-full h-[45px] rounded-[45px] bg-white flex px-6 justify-between items-center">
          <input
            className="w-[100%] h-[100%]  bg-transparent outline-none"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div>
            {isLoading ? (
              <span className="loader"></span>
            ) : (
              <>
                {tasks.length > 0 ? (
                  <IoClose className="text-[20px]" onClick={closeResults} />
                ) : (
                  <IoSearch className="text-[25px]" />
                )}
              </>
            )}
          </div>
        </div>
      </form>
  
    </div>
  );
};

export default Search;
