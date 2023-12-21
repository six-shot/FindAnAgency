import getAllTasks from "@/libs/getAllTask";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const metadata: Metadata = {
  title: "List of Marketing Agencies Digital Services ",
  description: "List of Marketing Agencies in lagos(island)",
};

export default async function TasksPage() {
  const tasksData: Promise<Task[]> = getAllTasks();

  const tasks = await tasksData;
  const filteredTasks = tasks.filter(
    (task) =>
      task.data.services.includes("Digital Marketing") 
      
  );

  const content = (
    <section>
      <br />
      {filteredTasks.map((task) => {
        return (
          <>
            <Link href={`/agency/${task.id}`} key={task.id}>
              <div className="max-w-[1440px] mx-auto px-5 pb-10">
                <h2 className="xl:text-[50px] text-[30px] border-b-[1px] border-black text-blue-400 mt-5">
                  {task.data.name}
                </h2>
                <Link href="/business-directory">
                  {" "}
                  <h2 className="py-2 text-blue-700 flex w-full items-end justify-end">
                    Return to Directory
                  </h2>
                </Link>
                <div>
                  <div className="flex xl:flex-row flex-col xl:items-center gap-5 xl:mt-10">
                    <div className="relative xl:w-[200px] w-[150px] h-[70px] ">
                      <Image
                        src={task.data.logoURL}
                        layout="fill"
                        objectFit="cover"
                        alt="logo"
                      />
                    </div>

                    <div className="flex sm:gap-3 flex-col xl:w-[80%] -mt-6 xk:mt-0">
                      <div className="flex leading-[24px]">
                        <h5>
                          <span className="font-bold">Business Name:</span>{" "}
                          {task.data.name}
                        </h5>
                      </div>
                      <div className="flex leading-[24px]">
                        <h5>
                          <span className="font-bold">Services:</span>{" "}
                          {task.data.services}
                        </h5>
                      </div>
                      <div className="flex leading-[30px]">
                        <h5>
                          <span className="font-bold">About:</span>{" "}
                          {task.data.about}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="flex xl:flex-row flex-col items-center gap-5 xl:mt-6okay  mt-3">
                    <div className="relative w-[200px] h-[100px] sm:flex hidden"></div>
                    <div className="mt-2 flex  gap-2 flex-col">
                      <div className="flex leading-[24px]">
                        <h5>
                          <span className="font-bold">
                            Business Website Address:
                          </span>{" "}
                          {task.data.website}
                        </h5>
                      </div>
                      <div className="flex leading-[24px] ">
                        <h5>
                          <span className="font-bold">
                            Business Phone Number
                          </span>{" "}
                          {task.data.phone_number}
                        </h5>
                      </div>
                      <div className="flex leading-[23px]">
                        <h5>
                          <span className="font-bold">Location</span>{" "}
                          {task.data.location}
                        </h5>
                      </div>
                      <div className="flex leading-[24px] ">
                        <h5>
                          <span className="font-bold">Business Address:</span>{" "}
                          {task.data.address}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </>
        );
      })}
    </section>
  );

  return content;
}
