export const data = [
  {
    name: "VectorSolv",
    active: false,
    position: "Full Stack Software Developer",
    duration: "Mar 2022 - June 2023",
    responsibilities: [
      "Delivered high-quality, robust production code for a diverse array of projects for clients such as LF3 and Homegauge.",
      " Worked alongside designers, project managers, and fellow engineers to convert innovative ideas into practical solutions for clients and stakeholders and to ensure smooth UX.",
      "Developed custom reusable email templates using handlebars(HTML/CSS), significantly cutting down the workload for new  email designs.",
      " Developed, maintained, and resolved any production issues across Front-end (Angular, RXJS, CDK), Back-end (Nest.js), and Database (MySQL) through meticulous log analysis, the creation of comprehensive test cases, and effective collaboration with cross-functional teams.",
    ],
  },
  {
    name: "MagicIT Solutions",
    active: false,
    position: "Frontend Developer",
    duration: "April 2022 - Mar 2023",
    responsibilities: [
      "Collaborated as a front-end web developer within a compact team of three, constructing a web application for a local business.",
      "Engineered an array of features encompassing authentication, customer management, the creation of quotes and invoices,and reporting functionality.",
      "Built the front-end with React.js, AntUI, and GraphQL (Apollo client) and seamlessly integrated with the back-end, which was built with Express.js.",
      "Hosted the website using AWS EC2 while implementing authentication through incognito, and establishing an RDS for a PostgreSQL database. Additionally, configured SSL and integrated domain via NGINX to enhance server capabilities with enhanced security measures.",
    ],
  },
];

export interface DATAITEM {
  name: string;
  active: boolean;
  position: string;
  duration: string;
  responsibilities: string[];
}
