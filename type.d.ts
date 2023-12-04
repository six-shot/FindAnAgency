

type Task = {
  title: string;
  id: number;
  name: string;
  logo: string;
  logoURL: string;
  about: string;
  featured: string;
  services: string;
  address: string;
  phone_number: string;
  location: string;
  website: string;
  data: {
    name: string;
    logo: string;
    logoURL: string;
    about: string;
    featured: string;
    services: string;
    address: string;
    phone_number: string;
    location: string;
    website: string;
  };
};
type Agency = {
  id: number;
  name:string;
  conclusion: string;
  weeklyTasks: [
    {
      week_task: string;
      week_description: string;
      week_number: number;
    },
    {
      week_task: string;
      week_description: string;
      week_number: number;
    }
  ];
  timeline: {
    due_date: string;
    start_date: string;
  };
  description: string;
  task_id: number;
  resourceLink: [];
  requirement: [
    {
      requirement_description: string;
    },
    {
      requirement_description: string;
    }
  ];
  title: string;
  content_image: string;
  constraints: [
    {
      constraint_name: string;
    },
    {
      constraint_name: string;
    }
  ];
  content: string;
  filter: {
    difficulty: string;
    duration: string;
    category: string;
    industry_niche: string;
  };
  creator: string;
  skills: {
    "design skills": [string, string, string];
  };
};