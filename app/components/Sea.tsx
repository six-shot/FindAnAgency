// "use client"
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import SearchResultItem from "./SearchResults";



// export default function Sea() {
//  const [searchTerm, setSearchTerm] = useState("");
//  const [data, setData] = useState<Task[]>([]);

//  useEffect(() => {
//    const fetchData = async () => {
//      const res = await axios.get(
//        `https://gind-agencies.onrender.com/api/search?q=${searchTerm}`
//      );
//      setData(res?.data?.data);
//    };
//    if (searchTerm) {
//      fetchData();
//    }
//  }, [searchTerm]);

//   return (
//     <div className="">
//       <div className="templateContainer">
//         <div className="searchInput_Container">
//           <input
//             id="searchInput"
//             type="text"
//             placeholder="Search here..."
//             onChange={(event) => {
//               setSearchTerm(event.target.value);
//             }}
//           />
//         </div>
//         {searchTerm && (
//           <div className="template_Container">
//             {data
//               .filter((val) => {
//                 if (searchTerm === "") {
//                   return true;
//                 } else if (
//                   val.name.toLowerCase().includes(searchTerm.toLowerCase())
//                 ) {
//                   return true;
//                 }
//                 return false;
//               })
//               .map((val) => {
//                 return <SearchResultItem key={val.id} name={val.name} />;
//               })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import React from 'react'

export default function Sea() {
  return (
    <div>Sea</div>
  )
}
