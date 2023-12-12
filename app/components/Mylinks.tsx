export const links = [
  {
    id: "1",
    name: "Serach By Location",
    submenu: true,
    sublinks: [
      {
        id: "1",
        Head: "Location",
        sublink: [
          { id: "1", name: "Abuja", link: "/" },
          { id: "2", name: "Anambra", link: "/" },
          {
            id: "3",
            name: "Lagos Island",
            link: "/agency/location/lagos-island",
          },
          {
            id: "4",
            name: "Lagos Mainland",
            link: "/agency/location/lagos-mainland",
          },
        ],
      },
    ],
  },
  {
    id: "1",
    name: "Search By Industry",
    submenu: true,
    sublinks: [
      {
        id: "1",
        Head: "Industry",
        sublink: [
          {
            id: "1",
            name: "Digital Agencies",
            link: "/agency/industry/digital-agencies",
          },
          {
            id: "2",
            name: "Traditional Agencies",
            link: "/agency/industry/traditional-agencies",
          },
        ],
      },
    ],
  },
];
