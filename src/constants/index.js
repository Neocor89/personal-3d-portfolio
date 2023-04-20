import {
  mobile,
  backend,
  creator,
  web,
  meta,
  tesla,
  opencr,
  shopify,
  threejs,
} from "../assets";

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
    title: "Content Creator",
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
    icon: "https://res.cloudinary.com/dwoifuutn/image/upload/v1682027438/docker_epmphu.png",
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Openclassrooms",
    icon: opencr,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
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
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image:
      "https://res.cloudinary.com/dwoifuutn/image/upload/v1681847520/testim-chur-del_ulltxe.png",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// TODO
//+ RESTART HERE 👇

const projects = [
  {
    name: "Youtube Clone",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
  },
  {
    name: "Spotify Clone",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
  },
  {
    name: "Netflix Clone",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    ],
    image:
      "https://res.cloudinary.com/dwoifuutn/image/upload/v1682025481/netflix_gsu6vl.png",
    source_code_link: "https://github.com/Neocor89/netflix-clone",
  },
  {
    name: "Astro Website",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
  },
  {
    name: "Bank Website",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    source_code_link: "https://github.com/Neocor89/netflix-clone",
  },
  {
    name: "Web Agency",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    source_code_link: "https://github.com/Neocor89/netflix-clone",
  },
  {
    name: "NFT Marketplace",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "thirdweb",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dwoifuutn/image/upload/v1682025481/nftmarket_che9g3.png",
    source_code_link: "https://github.com/Neocor89/netflix-clone",
  },
  {
    name: "Airbnb Website",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dwoifuutn/image/upload/v1682025379/airbnb_ptbkxq.png",
    source_code_link: "https://github.com/Neocor89/netflix-clone",
  },
  {
    name: "Job Search Mobile",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    source_code_link:
      "https://expo.dev/@bendevweb/jobs-mobile-app?serviceType=classic&distrribution=expo-go",
  },
];

export { services, technologies, experiences, testimonials, projects };
