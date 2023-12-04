import getTask from "@/libs/getTask";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Params = {
  params: {
    taskId: string;
  };
};

export async function generateMetadata({
  params: { taskId },
}: Params): Promise<Metadata> {
  const taskData: Promise<Task> = getTask(taskId);
  const task: Task = await taskData;

  return {
    title: task.name,
    description: `This is the page of ${task.name}`,
  };
}

export default async function UserPage({ params: { taskId } }: Params) {
  const taskData: Promise<Task> = getTask(taskId);

  const task = await taskData;

  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[60px] border-b-[1px] border-black">{task.name}</h2>
        <div>
          <div className="flex flex-row items-center gap-5 mt-10">
            <div className="relative w-[150px] h-[100px]">
              <Image
                src={task.logoURL}
                layout="fill"
                objectFit="cover"
                alt="logo"
              />
            </div>

            <div className="flex gap-3 flex-col w-[80%]">
              <div className="flex gap-2">
                <span className="font-bold">Business Name:</span>
                <h5>{task.name}</h5>
              </div>
              <div className="flex gap-2">
                <span className="font-bold">Services:</span>
                <h5 className="text-blue-700">
                  <Link href="/">{task.services}</Link>
                </h5>
              </div>
              <div className="">
                <span className="font-bold">About:</span>
                <h5>{task.about}</h5>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-5 mt-10">
            <div className="relative w-[150px] h-[100px]"></div>
            <div className="mt-2 flex  gap-2 flex-col">
              <div className="flex gap-2">
                <span className="font-bold">Business Website:</span>
                <h5 className="text-blue-700">
                  <Link href="/">{task.website}</Link>
                </h5>
              </div>
              <div className="flex gap-2">
                <span className="font-bold">Business Phone Number:</span>
                <h5>{task.phone_number}</h5>
              </div>
              <div className="flex gap-2">
                <span className="font-bold">Location:</span>
                <h5 className="text-blue-700">
                  <Link href="/">{task.location}</Link>
                </h5>
              </div>
              <div className="flex gap-2">
                <span className="font-bold">Business Address:</span>
                <h5>{task.address}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
