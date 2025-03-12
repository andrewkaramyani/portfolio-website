import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    dotnet,
    rabbitmq,
    msql,
    postgresql,
    angular,
    elasticsearch,
    docker,
    linx,
    vue,
    signalr,
    logstash,
    tailwind,
    mongodb,
    gitBash,
    kibana,
    azure,
    jira,
    postman,
    frontierZeroDashboard,
    blogApp,
    redis,
    ticketManagementSystem,
    Momkn,
    Ministry,
    GPG,
    jenkins,
    argo,
    work_in_progress,
    MomknApp,
    pl,
    shipping,
    hits,
    coptic,
    linq,
    sql,
    identity,
    entity,
    grpc

} from "../assets";

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
    // {
    //     title: "Software Engineer",
    //     icon: backend,
    // },
    {
        title: "Senior Full-Stack .Net Developer",
        icon: web,
    },
    // {
    //     title: `Career Development Coach`,
    //     icon: creator,
    // },
];

const technologies = [
    {
        name: ".NET Core",
        icon: dotnet,
    },
    {
        name: "ASP.Net Web API",
        icon: dotnet,
    },
    {
        name: "ASP.Net MVC",
        icon: dotnet,
    },
    {
        name: "Entity Framework",
        icon: entity,
    },
    {
        name: "LINQ",
        icon: linq,
    },
    {
        name: "Identity server4",
        icon: identity,
    },
    {
        name: "MS SQL Server",
        icon: sql,
    },
    {
        name: "Docker",
        icon: docker,
    },
    {
        name: "Jenkins",
        icon: jenkins,
    },
    {
        name: "Argo",
        icon: argo,
    },
    {
        name: "RabbitMQ",
        icon: rabbitmq,
    },
    {
        name: "Redis",
        icon: redis,
    },
    {
        name: "GRPC",
        icon: grpc,
    },
    {
        name: "AzureDevOps",
        icon: azure,
    }, 
       {
        name: "Linx",
        icon: linx,
    },
    {
        name: "Git",
        icon: gitBash,
    },
    {
        name: "Jira",
        icon: jira,
    },
    {
        name: "Postman",
        icon: postman,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Angular",
        icon: angular,
    },
    {
        name: "Vue.js",
        icon: vue,
    },
    {
        name: "SignalR",
        icon: signalr,
    }
];

const experiences = [
    {
        title: "Senior Full-Stack Developer",
        company_name: "Al-Ahly Momkn for E-payments",
        company_website_link: "https://www.alahlymomkn.com/en",
        icon: Momkn,
        iconBg: "#f0f0f0",
        date: "Dec 2024 - Current",
        points: [
            "led the development of a highly scalable backend infrastructure that powers the consumer application, ensuring seamless communication and robust performance across distributed services. My efforts have created a foundation that supports sustained growth and operational efficiency.",
            "Implemented advanced strategies to optimize backend operations, integrating effective logging, job scheduling, and notification systems. This has elevated the consumer application’s reliability and user experience, driving operational excellence and adaptability",
            "Designed and deployed a powerful admin interface to oversee and manage the consumer application, enabling real-time control and monitoring. This solution enhances decision-making and ensures the application remains responsive to user and business needs.",
            "Collaborated with cross‐functional teams to integrate directory services with other application components, ensuring seamless user experiences and data integrity.",
        
        ],
    },
    {
        title: "Senior Full-Stack Developer",
        company_name: "Coptic orphans",
        company_website_link: "https://copticorphans.org",
        icon: coptic,
        iconBg: "#f0f0f0",
        date: "Jul 2024 - Dec 2024",
        points: [
            "Provide technical guidance and mentorship to junior developers.",
            "Design and implement software architectures that are scalable, secure, and maintainable.",
            "Work closely with project managers, stakeholders, and other team members to deliver projects on time and within scope.",
"Collaborate with QA teams to ensure comprehensive test coverage and quality assurance."
                ],
    },
    {
        title: "Software Developer",
        company_name: "Coptic orphans",
        company_website_link: "https://copticorphans.org",
        icon: coptic,
        iconBg: "#f0f0f0",
        date: "April 2022 - Jun 2024",
        points: [
                "Working as a part of a team to design, develop and implement a web based system",        
                "Refactoring some parts of the system.",
                "Developing new features."
            ],
    },
    {
        title: "Supervisor Software Developer",
        company_name: "HITS",
        company_website_link: "https://hits.com",
        icon: hits,
        iconBg: "#f0f0f0",
        date: "Jan 2022 - April 2022",
        points: [
"Successfully managing and supporting a team of 2 members",
"delegating tasks, performing code reviews, and providing coding",
"guidelines to meet tight deadlines and timely deliveries"
            ],
    },
    {
        title: "Software Developer",
        company_name: "HITS",
        company_website_link: "https://hits.com",
        icon: hits,
        iconBg: "#f0f0f0",
        date: "Sep 2020 - Jan 2022",
        points: [
"Working as a part of a team to design, develop, and implement a webbased system",
"Refactoring some parts of the system.",
"We are developing new features.",
"Developing Integration Programs",
"Fixing complex Bugs.",
"Doing regression tests.",
"Document development and operational procedures"
        ],
    },
];

const projects = [
    {
        name: "Momkn Application",
        description:
        "A wonderful and trusted app that helps lots of people in Egypt pay money and use important services every single day. It is the most reliable and safe app you can find, working smoothly with strong tools to handle more than 20,000 jobs each day without any problems. With its super simple and friendly way to use, it makes everything easy and quick for over 50,000 happy users. Whether you need to send payments or get help with services, this app brings a happy and stress-free experience, all as easy as momkn, with lots of care and support for families and businesses across the country",
        tags: [
            {
                name: "C#",
            },
            {
                name: ".NET Core",
            },
            {
                name: "Microsoft SQL Server",
            },
            {
                name: "Microservices",
            },
            {
                name: "EF Core",
            },
            {
                name: "Identity Server",
            },
            {
                name: "Clean Architecture",
            },
            {
                name: "Hangfire",
            },
        ],
        image: MomknApp        ,
        // source_code_link: "https://github.com/elmotasembelah/DigitalHippo",
        // live_demo: "https://digitalhippo-motasem.up.railway.app/",
    },
    {
        name: "Kenzy app",
        description:
            "App to mange Participant children and thier families for all",
        tags: [
            {
                name: "C#",
            },
            {
                name: ".NET Core",
            },
            {
                name: "Microsoft SQL Server",
            },
            {
                name: "Microservices",
            },
            {
                name: "JWT",
            },
            {
                name: "LINQ",
            },
            {
                name: "EF Core",
            },
            {
                name: "Clean Architecture",
            },
        ],
        image: coptic,
        // source_code_link: "https://github.com/elmotasembelah/FullStack-Threejs-AI",
        //live_demo: "https://www.frontierzero.io/",
    },
    {
        name: "Donors website",
        description:
            "This exciting app makes guessing the final Premier League standings easy and fun for everyone. Pick each team’s spot, earn points—10 for exact, 5 for one off, 1 for two off—and see your score on a leaderboard. It updates with the latest football news and has a simple look, bringing joy to fans everywhere!",
        tags: [
            {
                name: "C#",
            },
            {
                name: ".NET Core",
            },
            {
                name: "Microsoft SQL Server",
            },
            {
                name: "Microservices",
            },
            {
                name: "JWT",
            },
            {
                name: "EF Core",
            },
            ,
            {
                name: "LINQ",
            },
            {
                name: "Clean Architecture",
            },
            {
                name: "SignalR",
            },
            {
                name: "Authorize.net Gateway",
            },
            {
                name: "CyberSource Gateway",
            }
        ],
        image: coptic,
         source_code_link:
            "https://donors.copticorphans.org",
    },
    {
        name: "HITS Skills",
        description:
            "This project is an ASP.NET Core 7 MVC web application that simplifies order creation, tracking, and delivery management for traders, streamlines administrative tasks and enhances operational efficiency for employees, and provides easy access to assigned tasks and real-time updates for representatives. The system is designed for shipping companies to address pain points such as manual processes, lack of coordination, and time-consuming tasks.",
        tags: [
            {
                name: ".NET Core",
            },
            {
                name: "MS SQL Server",
            },
            {
                name: "EF Core",
            },
            {
                name: "JWT",
            },
            {
                name: "LINQ",
            },
            {
                name: "SignalR",
            },
            {
                name: "Clean Code",
            },
        ],
        image: hits,
         source_code_link:
            "https://hitsskills.com"
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

export {services, technologies, experiences, testimonials, projects};
