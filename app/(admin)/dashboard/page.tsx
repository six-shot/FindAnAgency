

import getAllAgency from "@/libs/getAllAgency";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: "List of Marketing Agencies in lagos(island) ",
  description: "List of Marketing Agencies in lagos(island)",
};

export default async function page() {
  const tasksData: Promise<Task[]> = getAllAgency();

  const tasks = await tasksData;
  const filteredTasks = tasks.filter(
    (task) => task.data.status === "pending"
  );

  const content = (
    <section>
      <h3 className="uppercase font-bold font-nunito py-5 text-[20px]">
        All Pending Agencies
      </h3>
      {filteredTasks.map((task) => {
        return (
          <div className="max-w-[1440px] mx-auto mt-[5%]" key={task.id}>
            <Link href={`/update/${task.id}`}>
              <div className="max-w-[1440px] mx-auto px-5 pb-10">
                <div className="flex justify-between items-center">
                  <h2 className="font-bold font-nunito py-5 text-[20px] ">
                    {task.data.name}
                  </h2>
                  <h2 className="font-bold font-nunito py-5 text-[20px] text-red-500 ">
                    {task.data.status}
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </section>
  );

  return content;
}
