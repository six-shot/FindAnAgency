"use client";
import React, { useEffect, useState } from "react";


import { useRouter } from "next/navigation";
import Image from "next/image";
import getAllTasks from "@/libs/getAllTask";
import Link from "next/link";

export default async function TasksPage() {
  const tasksData: Promise<Task[]> = getAllTasks();

  const tasks = await tasksData;
 
  

  return (
    <div className="relative w-full xl:flex flex-col xl:items-center">
      {tasks.length > 0 && (
        <div className="z-[999] ">
          {tasks.map((task) => (
            <Link href={`/agency/${task.id}`}>
              {task.data.name}
              <div className="flex items-center gap-2" key={task.id}>
                <div className="">
                  <h5 className="text-sm text-blue-700 font-medium font-nunito">
                    {task.data.name}
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


