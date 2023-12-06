// "use client"
// import getTask from "@/libs/getTask";
// import type { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";
// import { useState,useEffect } from "react";

// type Params = {
//   params: {
//     taskId: string;
//   };
// };

// async function generateMetadata({
//   params: { taskId },
// }: Params): Promise<Metadata> {
//   const taskData: Promise<Task> = getTask(taskId);
//   const task: Task = await taskData;

//   return {
//     title: task.name,
//     description: `This is the page of ${task.name}`,
//   };
// }

// export default function UserPage({ params: { taskId } }: Params) {
//    const [task, setTask] = useState<Task | null>(null);

//    useEffect(() => {
//      const fetchData = async () => {
//        try {
//          const taskData: Promise<Task> = getTask(taskId);
//          const task: Task = await taskData;
//          setTask(task);
//        } catch (error) {
//          console.error("Error fetching data:", error);
//        }
//      };

//      fetchData();
//    }, [taskId]);

//   return (
//     <>
//       <div className="max-w-[1440px] mx-auto">
//         {task?(<><h2 className="xl:text-[60px] text-[30px] border-b-[1px] border-black">{task.name}</h2>
//         <div>
//           <div className="flex flex-row items-center gap-5 mt-10">
//             <div className="relative w-[150px] h-[100px]">
//               <Image
//                 src={task?.logoURL}
//                 layout="fill"
//                 objectFit="cover"
//                 alt="logo"
//               />
//             </div>

//             <div className="flex gap-3 flex-col w-[80%]">
//               <div className="flex gap-2">
//                 <span className="font-bold">Business Name:</span>
//                 <h5>{task.name}</h5>
//               </div>
//               <div className="flex gap-2">
//                 <span className="font-bold">Services:</span>
//                 <h5 className="text-blue-700">
//                   <Link href="/">{task.services}</Link>
//                 </h5>
//               </div>
//               <div className="">
//                 <span className="font-bold">About:</span>
//                 <h5>{task.about}</h5>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-row items-center gap-5 mt-10">
//             <div className="relative w-[150px] h-[100px]"></div>
//             <div className="mt-2 flex  gap-2 flex-col">
//               <div className="flex gap-2">
//                 <span className="font-bold">Business Website:</span>
//                 <h5 className="text-blue-700">
//                   <Link href="/">{task.website}</Link>
//                 </h5>
//               </div>
//               <div className="flex gap-2">
//                 <span className="font-bold">Business Phone Number:</span>
//                 <h5>{task.phone_number}</h5>
//               </div>
//               <div className="flex gap-2">
//                 <span className="font-bold">Location:</span>
//                 <h5 className="text-blue-700">
//                   <Link href="/">{task.location}</Link>
//                 </h5>
//               </div>
//               <div className="flex gap-2">
//                 <span className="font-bold">Business Address:</span>
//                 <h5>{task.address}</h5>
//               </div>
//             </div>
//           </div>
//         </div></>):(<p>loading....</p>)}

//       </div>
//     </>
//   );
// }
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
      <div className="max-w-[1440px] mx-auto px-5 pb-10">
        <h2 className="xl:text-[50px] text-[30px] border-b-[1px] border-black mt-5">
          {task.name}
        </h2>
        <h2 className="py-2 text-blue-700 flex w-full items-end justify-end">
          Return to Directory
        </h2>
        <div>
          <div className="flex xl:flex-row flex-col xl:items-start gap-5 xl:mt-10">
            <div className="relative xl:w-[200px] w-[150px] h-[70px] ">
              <Image
                src={task.logoURL}
                layout="fill"
                objectFit="cover"
                alt="logo"
              />
            </div>

            <div className="flex sm:gap-3 flex-col xl:w-[80%] -mt-6 xk:mt-0">
              <div className="flex leading-[24px]">
                <h5>
                  <span className="font-bold">Business Name:</span> {task.name}
                </h5>
              </div>
              <div className="flex leading-[24px]">
                <Link href="/">
                  {" "}
                  <h5 className="text-blue-700">
                    <span className="font-bold text-black">Services:</span> {task.services}
                  </h5>
                </Link>
              </div>
              <div className="flex leading-[30px]">
                <h5>
                  <span className="font-bold">About:</span> {task.about}
                </h5>
              </div>
            </div>
          </div>
          <div className="flex xl:flex-row flex-col items-center gap-5 xl:mt-6okay  mt-3">
            <div className="relative w-[200px] h-[100px] sm:flex hidden"></div>
            <div className="mt-2 flex  gap-2 flex-col">
              <div className="flex leading-[24px]">
                <h5 className="text-blue-700">
                  <span className="font-bold text-black">Business Website Address:</span>{" "}
                  {task.website}
                </h5>
              </div>
              <div className="flex leading-[24px] ">
                <h5>
                  <span className="font-bold">Business Phone Number</span>{" "}
                  {task.phone_number}
                </h5>
              </div>
              <div className="flex leading-[23px]">
                <h5>
                  <span className="font-bold">Location</span> {task.location}
                </h5>
              </div>
              <div className="flex leading-[24px] ">
                <h5>
                  <span className="font-bold">Business Address:</span>{" "}
                  {task.address}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
