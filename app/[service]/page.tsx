import getAllTasks from "@/libs/getAllTask";
import Link from "next/link";
import Image from "next/image"

type Params = {
  params: {
    service: string;
  };
};

export default async function page({ params: { service } }: Params) {
  
  const tasksData: Promise<Task[]> = getAllTasks();
  const tasks = await tasksData;
  const decodedService = decodeURIComponent(service); // Decode the URL-encoded service parameter
  const cleanedService = decodedService.replace(/%/g, ""); // Remove percent signs
  const filteredTasks = tasks.filter((task) => {
    const taskServices = task.data.services
      .split(",")
      .map((s) => s.trim().toLowerCase());

    // Check if the decoded specified service is included in the task's services
    return taskServices.includes(decodedService.toLowerCase());
  });
  return (
    <div className="max-w-[1440px] mx-auto   px-[6%] 2xl:px-0 pb-10">
      <h3 className="text-[30px] pt-20 font-bold font-nunito">{cleanedService}</h3>
    
      <div>Business Name</div>  {filteredTasks.length > 0 && (
        <div className="z-[999] ">
          {filteredTasks.map((task) => (
            <Link href={`/agency/${task.id}`} key={task.id}>
              <h2 className="xl:text-[50px] text-[30px] border-b-[1px] border-black mt-5">
                {task.data.name}
              </h2>
              <h2 className="py-2 text-blue-700 flex w-full items-end justify-end">
                <Link href="/business-directory"> Return to Directory</Link>
              </h2>

              <div className="flex items-center gap-2">
                <div>
                  <div className="flex xl:flex-row flex-col xl:items-start gap-5 xl:mt-10">
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
                        <Link href="/">
                          {" "}
                          <h5>
                            <span className="font-bold">Services:</span>{" "}
                            {task.data.services}
                          </h5>
                        </Link>
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
          ))}
        </div>
      )}
    </div>
  );
}
