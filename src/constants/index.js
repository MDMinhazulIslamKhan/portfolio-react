import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  pcbuild,
  redux,
  tailwind,
  nodejs,
  mongodb,
  typescript,
  bootstrap,
  tutor,
  laravel,
  ecommerce,
  portfolio,
  ecommerceadmin,
  memory,
  doctors,
  nextJs,
  ecomnext,
  prisma,
  postgre,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AutoCAD Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux | Redux Toolkit",
    icon: redux,
  },
  {
    name: "Next Js",
    icon: nextJs,
  },
  {
    name: "Node Js | Express Js",
    icon: nodejs,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "MongoDB | Mongoose",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgre,
  },
  {
    name: "Prisma ORM",
    icon: prisma,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
];

const projects = [
  {
    name: "Tutor Booking and Management",
    description:
      "A tutor booking website where user can see tutors, booking tutor and admin can process the booking.",
    tags: [
      {
        name: "nextJs",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
      {
        name: "expressJs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: tutor,
    source_code_link:
      "https://github.com/MDMinhazulIslamKhan/service_booking_and_management_frontend",
    link: "https://service-booking-and-management-frontend-mdminhazulislamkhan.vercel.app/home",
  },
  {
    name: "E-commerce Next.js",
    description:
      "An e-commerce website, where all customer can order products, see his pending order and previous order. Admin has the access to see all user, pending order, delivered order and approved the pending order.",
    tags: [
      {
        name: "nextJs",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "daisyui",
        color: "orange-text-gradient",
      },
    ],
    image: ecomnext,
    source_code_link: "https://github.com/MDMinhazulIslamKhan/e-com-admin-task",
    link: "https://e-com-admin-task.vercel.app/",
  },
  {
    name: "Doctors Portal",
    description:
      "A medical service booking platform that allows you choose the doctor of your need.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "daisyui",
        color: "pink-text-gradient",
      },
    ],
    image: doctors,
    source_code_link: "https://github.com/MDMinhazulIslamKhan/doctors-portal",
    link: "https://doctors-portal-5def7.web.app/",
  },
  {
    name: "Portfolio Website",
    description:
      "My personal portfolio website, where I used 3D visuals with react-three.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-three",
        color: "green-text-gradient",
      },
      {
        name: "react-tilt",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/MDMinhazulIslamKhan/portfolio-react",
    link: "https://gilded-mousse-36ef16.netlify.app/",
  },
  {
    name: "PC builder",
    description:
      "OurPC.com is a pc building website where you can make your pc by adding pc's different component's. Every component's has a separate category page.",
    tags: [
      {
        name: "nextJs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "daisyui",
        color: "orange-text-gradient",
      },
    ],
    image: pcbuild,
    source_code_link: "https://github.com/MDMinhazulIslamKhan/pc-builder",
    link: "https://pc-builder-frontend-mdminhazulislamkhan.vercel.app/",
  },
  {
    name: "Sharing Memory",
    description:
      "Create a memory sharing website, where you can share your memory with other and like on others memory and edit and delete your own memory.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "daisyui",
        color: "orange-text-gradient",
      },
    ],
    image: memory,
    source_code_link:
      "https://github.com/MDMinhazulIslamKhan/memory-porject-client",
    link: "https://my-memory-project-1.web.app/",
  },
  {
    name: "E-commerce Laravel ",
    description:
      "An e-commerce website where you can order your favorite product and received product by cash on delivery",
    tags: [
      {
        name: "blade",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link:
      "https://github.com/MDMinhazulIslamKhan/e_commarce_laravel",
  },
  {
    name: "Ecommerce Admin",
    description:
      "E-commerce website admin page from where admin can add category add products by category. Ordered products can be approved for delivery from this page. Only selected people can access this page.",
    tags: [
      {
        name: "laratrust",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerceadmin,
    source_code_link:
      "https://github.com/MDMinhazulIslamKhan/e_commarce_laravel",
  },
];

export { services, technologies, projects };
