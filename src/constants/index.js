import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    bootstrap,
    php,
    laravel,
    mysql,
    ecommerce,
    portfolio,
    ecommerceadmin,
    memory,
    doctors,
    nextJs,
    ecomnext,
    furniture,
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
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Next Js",
        icon: nextJs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "mysql",
        icon: mysql,
    },
    {
        name: "PHP",
        icon: php,
    },
    {
        name: "Laravel",
        icon: laravel,
    },
    // {
    //     name: "git",
    //     icon: git,
    // },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
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
        image: "https://randomuser.me/api/portraits/women/4.jpg",
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

const projects = [
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
    },
    {
        name: "E-commerce Next.js",
        description:
            "An e-commerce website, where all customer can add products on his cart without login and order products, see his pending order and previous order after login. Admin has the access to see all user, user pending order, delivered order and approved the pending order.",
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
        source_code_link: "https://github.com/MDMinhazulIslamKhan/e_commarce_laravel",
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
        source_code_link: "https://github.com/MDMinhazulIslamKhan/memory-porject-client",
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
        source_code_link: "https://github.com/MDMinhazulIslamKhan/e_commarce_laravel",
    },
];

export { services, technologies, experiences, testimonials, projects };