"use client"
import axios from "axios";
import { useState, useEffect } from "react";
import type { Metadata } from "next";
import getUpdate from "@/libs/getUpdate";

type Params = {
  params: {
    updateId: string;
  };
};

export default function Page({ params: { updateId } }: Params) {
  const [agency, setAgency] = useState({
    status: "",
    name: "",
    // Add other fields as needed
  });
  const [task, setTask] = useState<Task | null>(null);
   const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const taskData: Task = await getUpdate(updateId);
        setTask(taskData);

        // Set the initial values of the input fields
        setAgency({
          ...agency,
          status: taskData.status,
          name: taskData.name,
          // Set other fields as needed
        });
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };

    fetchTask();
  }, [updateId]);

  const handleStatusInput = (event) => {
    // Only update the status field in the state
    setAgency({ ...agency, status: event.target.value });
  };

 const handleSubmit = (e) => {
  setLoading(true);
   e.preventDefault();
   axios
     .patch(
       `https://gind-agencies.onrender.com/api/agency/approve/${updateId}`,
       {
         status: agency.status,
         // Keep other fields unchanged in the payload
       }
     )
     .then((res) => {
       // Update the status in the state to "Approved"
       setAgency({ ...agency, status: "Approved" });
       console.log(res.data);
     })
     .catch((err) => console.error(err))
     .finally(() => {
       setLoading(false); // Set loading to false after the API request, whether it succeeded or failed
     });
 };


 

  return (
    <>
      <div className="max-w-[1440px] mx-auto pb-5">
        <h3 className="uppercase font-bold font-nunito py-5 text-[20px]">
          Pending Agencies
        </h3>
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-between bg-black py-6 px-5 text-white"
        >
          <p>Agency Name: {agency.name}</p>
          <p>Status: {agency.status}</p>

          <button
            type="submit"
            className={`${
              agency.status === "Approved" ? "bg-green-400" : "bg-yellow-400"
            } px-8 py-3 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {loading
              ? "Approving..."
              : agency.status === "Approved"
              ? "Approved"
              : "Approve"}
          </button>
        </form>
      </div>
    </>
  );
}
