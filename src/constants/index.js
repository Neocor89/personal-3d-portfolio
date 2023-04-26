import { mobile, backend, creator, web, opencr, threejs } from "../assets";

//: File of All Work Projects

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "NFT's Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "https://res.cloudinary.com/dwoifuutn/image/upload/v1682025585/html_yj4zvt.png",
  },
  {
    name: "CSS 3",
    icon: "https://res.cloudinary.com/dwoifuutn/image/upload/v1682025585/css_vuja5y.png",
  },
  {
    name: "JavaScript",
    icon: "https://res.cloudinary.com/dwoifuutn/image/upload/v1682025585/javascript_nf1cx4.png",
  },
  {
    name: "TypeScript",
    icon: "https://res.cloudinary.com/dwoifuutn/image/upload/v1682025599/typescript_fohslg.png",
  },
  {
    name: "React JS",
    icon: "https://res.cloudinary.com/dwoifuutn/image/upload/v1682025599/reactjs_vubinj.png",
  },
  {
    name: "Redux Toolkit",
    icon: "https://res.cloudinary.com/dwoifuutn/image/upload/v1682025599/redux_e4dgrs.png",
  },
  {
    name: "Tailwind CSS",
    icon: "https://res.cloudinary.com/dwoifuutn/image/upload/v1682025599/tailwind_z4gihl.png",
  },
  {
    name: "Node JS",
    icon: "https://res.cloudinary.com/dwoifuutn/image/upload/v1682025599/nodejs_dgw1yg.png",
  },
  {
    name: "MongoDB",
    icon: "https://res.cloudinary.com/dwoifuutn/image/upload/v1682025599/mongodb_p4pmhk.png",
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: "https://res.cloudinary.com/dwoifuutn/image/upload/v1682025585/git_v0elzy.png",
  },
  {
    name: "figma",
    icon: "https://res.cloudinary.com/dwoifuutn/image/upload/v1682025585/figma_qyblca.png",
  },
  {
    name: "docker",
    icon: "https://res.cloudinary.com/dwoifuutn/image/upload/v1682520936/sql_zh7gxm.png",
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Churreria Deliciosa",
    icon: "https://res.cloudinary.com/dwoifuutn/image/upload/v1681847520/testim-chur-del_ulltxe.png",
    iconBg: "#383E56",
    date: "Jan 2023 - March 2023",
    points: [
      "Development of a web application using Javascript and PHP",
      "Collaboration with the client in order to apply the design chosen by the design, implementation of a final responsive product and compatible with the different browsers available.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Openclassrooms",
    icon: opencr,
    iconBg: "#E6DEDD",
    date: "July 2022 - Nov 2022",
    points: [
      "Development of a Fullstack web application using Reactjs and a SQL database, creation of the application design.",
      "Collaboration with the client to respect the specifications, concerning the visual identity of the company and the security of the database.",
      "Implementing responsive design and responsive product and compatible with the different browsers available.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Openclassrooms",
    icon: opencr,
    iconBg: "#383E56",
    date: "Jan 2022 - June 2022",
    points: [
      "Development and implementation of a noSQL database, verification and registration of user data, data security, encryption of passwords.",
      "Collaborating with teams of other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Openclassrooms",
    icon: opencr,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Dec 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Ben is an excellent web developer, with a real concern for customer and user satisfaction.",
    name: "Delfim P",
    designation: "MNG",
    company: "Churreria Deliciosa",
    image:
      "https://res.cloudinary.com/dwoifuutn/image/upload/v1681847520/testim-chur-del_ulltxe.png",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ben does.",
    name: "Adrien B",
    designation: "COO",
    company: "Association",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ben optimized our website, our traffic increased by 35%. We can't thank them enough!",
    name: "Lisa W",
    designation: "CTO",
    company: "Enterprise",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Youtube Clone",
    description:
      "Clone of the Youtube platform allows users to search and watch video content on different themes, offering a practical and efficient solution for entertainment needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dwoifuutn/image/upload/v1682025564/youtube_ntayoq.png",
    source_code_link: "https://github.com/Neocor89/youtube-clone",
    demo_project: "https://bendevweb-youtube-clone.netlify.app",
  },
  {
    name: "Spotify Clone",
    description:
      "Complete responsive web application for music. Allowing the user to listen to music samples, browse the different music categories and search for singers or songs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dwoifuutn/image/upload/v1682025564/spotify_tlt8jz.png",
    source_code_link: "https://github.com/Neocor89/spotify-colne",
    demo_project: "https://bendevweb-spotify-clone.netlify.app",
  },
  {
    name: "Netflix Clone",
    description:
      "Complete responsive web application of the Netflix clone, with information storage on Firebase. Allows the user to create an account to log in and view different movie and series content.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dwoifuutn/image/upload/v1682025481/netflix_gsu6vl.png",
    source_code_link: "https://github.com/Neocor89/netflix-clone",
    demo_project: "https://netflix-clone-neocor89.vercel.app/",
  },
  {
    name: "Astro Website",
    description:
      "Full responsive web application of the Astro framework clone, allows the user to interact with different sections of the site including the blog section and its different articles.",
    tags: [
      {
        name: "astro",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dwoifuutn/image/upload/v1682025379/astro_vzz26v.png",
    source_code_link: "https://github.com/Neocor89/astro-website-clone",
    demo_project: "https://bendevweb-astro-website-clone.netlify.app/",
  },
  {
    name: "Bank Website",
    description:
      "Full responsive web application of a modern Banking platform, with beautiful user interface, allows the user to interact in a very pleasant way with the platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dwoifuutn/image/upload/v1682025379/bank_ixd1ee.png",
    source_code_link: "https://github.com/Neocor89/bank-modern-app",
    demo_project: "https://bendevweb-bank-website.netlify.app/",
  },
  {
    name: "Web Agency",
    description:
      "Accessibility and SEO improvement, performance improvement for a web agency based in Lyon. Implementation of google analytics, keyword analysis, to increase traffic.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "seo",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dwoifuutn/image/upload/v1682025379/agenceseo_rkucdy.png",
    source_code_link: "https://github.com/Neocor89/Benoit-C-P4",
    demo_project: "https://neocor89.github.io/Benoit-C-P4/",
  },
  {
    name: "NFT Marketplace",
    description:
      "Fully responsive Web3 application for selling NFT. Allows the user by logging into their Metamask account, to mine available NFTs from the project, via the Testnet(no fees or payments).",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "thirdweb",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dwoifuutn/image/upload/v1682025481/nftmarket_che9g3.png",
    source_code_link: "https://github.com/Neocor89/nft-market-app",
    demo_project: "https://nft-market-a5657ba76-neocor89.vercel.app/",
  },
  {
    name: "Airbnb Website",
    description:
      "Responsive web application of the Airbnb platform clone, it allows users to search, view and book accommodations, indicating the duration and amount of their stay.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dwoifuutn/image/upload/v1682025379/airbnb_ptbkxq.png",
    source_code_link: "https://github.com/Neocor89/airbnb-server",
    demo_project: "https://airbnb-server-moamooczq-neocor89.vercel.app/",
  },
  {
    name: "Job Search Mobile",
    description:
      "Mobile web application that allows users to search for job offers, view the job description, salary ranges and required experience, as well as see where the jobs are located.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dwoifuutn/image/upload/v1682026568/jobmobile_lpseok.png",
    source_code_link: "https://github.com/Neocor89/mobile-jobs-app",
    demo_project:
      "https://expo.dev/@bendevweb/jobs-mobile-app?serviceType=classic&distrribution=expo-go",
  },
  {
    name: "Booki Reservation",
    description:
      "Showcase website with different sections allowing to consult accommodations and activities in the French city of Marseille.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dwoifuutn/image/upload/v1682532184/booki_btytt6.png",
    source_code_link: "https://github.com/Neocor89/mobile-jobs-app",
    demo_project: "https://neocor89.github.io/Projet_Booki",
  },
];

export { services, technologies, experiences, testimonials, projects };
