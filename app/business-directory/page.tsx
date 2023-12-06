// import getAllTasks from "@/libs/getAllTask";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "List of Marketing Agencies in Lagos (Island)",
//   description: "List of Marketing Agencies in Lagos (Island)",
// };

// export default async function TasksPage() {
//   const tasksData: Promise<Task[]> = getAllTasks();
//   const tasks = await tasksData;

//   const filteredDesign = tasks.filter((task) =>
//     task.data.services.split(",").includes("Design")
//   );
//   const contentMarketing = tasks.filter((task) =>
//     task.data.services.split(",").includes("Content Marketing")
//   );
//   const filteredDigitalMarketinAgency = tasks.filter((task) =>
//     task.data.services.split(",").includes("Digital Marketing Agencies")
//   );
//   const filteredDigitalAgency = tasks.filter((task) =>
//     task.data.services.split(",").includes("Digital Marketing")
//   );
//   const filteredEmailMarketing = tasks.filter((task) =>
//     task.data.services.split(",").includes("Email Marketing")
//   );
//   const filteredMobileDevelopment = tasks.filter((task) =>
//     task.data.services.split(",").includes("Mobile Development")
//   );
//   const filteredMobileMarketing = tasks.filter((task) =>
//     task.data.services.split(",").includes("Mobile Marketing")
//   );
//   const filteredOnlineReputation = tasks.filter((task) =>
//     task.data.services.split(",").includes("Online Reputation Managemnet")
//   );
//   const filteredPayPerClick = tasks.filter((task) =>
//     task.data.services.split(",").includes("Pay per Click Marketing")
//   );
//   const filteredDSearchEngineOptimization = tasks.filter((task) =>
//     task.data.services.split(",").includes("Search Engine Optimization")
//   );
//   const filteredSocialMediaMarketing = tasks.filter((task) =>
//     task.data.services.split(",").includes("Social Media Marketing")
//   );
//   const filteredWebsiteDevelopment = tasks.filter((task) =>
//     task.data.services.split(",").includes("Website Development")
//   );
//   const filteredTraditionalServices = tasks.filter((task) =>
//     task.data.services.split(",").includes("Traditional Services")
//   );
//   const filteredBoutique = tasks.filter((task) =>
//     task.data.services.split(",").includes("Boutique")
//   );
//   const filteredExperimental = tasks.filter((task) =>
//     task.data.services.split(",").includes("Experiential")
//   );
//   const filteredMedia = tasks.filter((task) =>
//     task.data.services.split(",").includes("Media")
//   );
//   const filteredPublicRelation = tasks.filter((task) =>
//     task.data.services.split(",").includes("Public Relations(PR)")
//   );
//   const content = (
//     <section>
//       <h5>Design: ({filteredDesign.length})</h5>
//       <h5>Content Marketing: ({contentMarketing.length})</h5>
//       <h5>
//         Digital Marketing Agencies: ({filteredDigitalMarketinAgency.length})
//       </h5>
//       <h5>Digital Marketing: ({filteredDigitalAgency.length})</h5>
//       <h5>Email Marketing: ({filteredEmailMarketing.length})</h5>
//       <h5>Mobile Development: ({filteredMobileDevelopment.length})</h5>
//       <h5>Mobile Marketing: ({filteredMobileMarketing.length})</h5>
//       <h5>Online Reputation Managemnet: ({filteredOnlineReputation.length})</h5>
//       <h5>Pay per Click Marketing: ({filteredPayPerClick.length})</h5>
//       <h5>
//         Search Engine Optimization: ({filteredDSearchEngineOptimization.length})
//       </h5>
//       <h5>Website Development: ({filteredWebsiteDevelopment.length})</h5>
//       <h5>Traditional Services: ({filteredTraditionalServices.length})</h5>
//       <h5>Boutique: ({filteredBoutique.length})</h5>
//       <h5>Experiential: ({filteredExperimental.length})</h5>
//       <h5>Media: ({filteredMedia.length})</h5>
//       <h5>Public Relations(PR): ({filteredPublicRelation.length})</h5>
//     </section>
//   );

//   return content;
// }
import { Metadata } from "next";
import getAllTasks from "@/libs/getAllTask";

export const metadata: Metadata = {
  title: "List of Marketing Agencies in Lagos (Island)",
  description: "List of Marketing Agencies in Lagos (Island)",
};

export default async function TasksPage() {
  try {
    const tasksData: Promise<Task[]> = getAllTasks();
    const tasks = await tasksData;

    // Extract unique services
    const allServices = Array.from(
      new Set(tasks.flatMap((task) => task.data.services.split(",")))
    );

    const filteredCounts = allServices.map((service) =>
      tasks.filter((task) => task.data.services.split(",").includes(service))
    );

    const content = (
      <section>
        {allServices.map((service, index) => (
            
          <h5 key={index}>{`${service}: (${filteredCounts[index].length})`}</h5>
        ))}
      </section>
    );
    console.log("tasksData:", tasksData);

    return content;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    // Handle the error, e.g., display an error message
    return <div>Error fetching tasks</div>;
  }
}
