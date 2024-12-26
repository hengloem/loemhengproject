export const MENUS = [
    { title: 'app.home', icon: 'fa fa-home', route: '/home' },
    { title: 'app.about', icon: 'fa fa-user', route: '/about' },
    { title: 'app.portfolio', icon: 'fa fa-briefcase', route: '/portfolio' },
    { title: 'app.contact', icon: 'fa fa-envelope-open', route: '/contact' },
    { title: 'app.blog', icon: 'fa fa-comments', route: '/blog' },
    { title: 'app.tool', icon: 'fa fa-smile-o', route: '/math-tools' }
];

export const skills = {
    technicalExpertise: {
        programming: ["HTML", "CSS", "JavaScript", "Java", "Angular", "Java Spring Boot", "PHP"],
        webFrameworks: ["CodeIgniter", "Laravel", "Vue.js"],
        uiUxFrameworks: ["Bootstrap", "Angular Material"],
        databases: ["MySQL", "Microsoft SQL Server"],
        uiUxDesign: ["Balsamiq", "Adobe Xd", "Invision", "Figma", "Canva", "Adobe Photoshop", "Webflow"],
        videoEditing: ["Adobe Premiere Pro", "Apple Final Cut Pro", "Wondershare Filmora", "Apple iMovie", "CapCut"],
        sourceControl: ["Git", "Github", "GitLab", "Trello"],
        reporting: ["Jaspersoft Report Designer 5.0.1"],
        dataIntegration: ["SSIS (SQL Server Integration Services)", "Outlook MIS Report Integration"],
        apiTesting: ["Postman"],
        fileTransfer: ["WinSCP"],
    },
    projectManagement: ["IT Project Consultation and Management", "Agile Scrum Methodology"],
    selfLearning: ["Critical Thinking", "Time Management"],
    interpersonalSkills: ["Communication", "Teamwork", "Creativity", "Problem-Solving", "Leadership", "Motivational Speaking"],
};

export const qualification = "Focused on quality, reliability, and prompt services";

export const lh_education = [
    {
        title: "Bachelor's Degree",
        company: "University of Puthisastra",
        studyType: "Computer Science",
        startDate: "2017",
        endDate: "2019",
        description: "Specialized in Web Programming, gaining in-depth knowledge in front-end and back-end development. Focused on practical skills in web design, database management, and programming languages such as HTML, CSS, JavaScript, and PHP. Developed hands-on experience in creating web applications and improving system performance.",
        icon: "fa fa-graduation-cap"
    },
    {
        title: "Associate Degree",
        company: "Passerelles Numériques Cambodia",
        studyType: "Computer Science",
        startDate: "2015",
        endDate: "2017",
        description: "Studied Web Programming with an emphasis on web technologies and software development. Acquired foundational skills in web development, database systems, and computer programming, contributing to various academic projects and real-world applications.",
        icon: "fa fa-graduation-cap"
    },
    {
        title: "Baccalauréat",
        company: "Koh Kong High School",
        studyType: "Upper Secondary Education",
        startDate: "2012",
        endDate: "2015",
        description: "Completed upper secondary education (Grades 10-12) with a strong focus on mathematics, science, and IT. Engaged in extracurricular activities such as student clubs and volunteer work, which helped develop leadership, communication, and teamwork skills.",
        icon: "fa fa-graduation-cap"
    },
    {
        title: "Diplôme",
        company: "Chi Phat Secondary School",
        studyType: "Lower Secondary Education",
        startDate: "2009",
        endDate: "2012",
        description: "Completed lower secondary education (Grades 7-9), gaining a solid foundation in core subjects such as mathematics, science, and language. Actively participated in school events and developed an interest in technology and computer science.",
        icon: "fa fa-graduation-cap"
    },
    {
        title: "General Knowledge",
        company: "Chi Phat Primary School",
        studyType: "Primary Education",
        startDate: "2003",
        endDate: "2009",
        description: "Completed primary education (Grades 1-6) with a focus on general knowledge, literacy, and numeracy skills. Engaged in various school activities that fostered creativity and problem-solving abilities.",
        icon: "fa fa-graduation-cap"
    }
];

export const lh_experiences = [
    {
        title: 'Founder',
        company: 'Heng Coding Service',
        employmentType: 'Self-employed',
        startDate: '2024-08-01',
        endDate: 'Present',
        workModel: 'Hybrid',
        description: 'Built scalable and innovative digital solutions with a focus on web development, system optimization, and workflow automation. Led projects utilizing technologies like Angular, Java Spring Boot, and MS SQL to deliver tailored applications while supervising a team of developers to ensure high-quality outcomes and foster professional growth. Established a strong reputation for delivering client-focused solutions aligned with the motto, "Building Digital Dreams, One Line at a Time."',
        icon: '/assets/img/icons/hcs.svg',
    },
    {
        title: 'President',
        company: 'PN Cambodia Alumni Association',
        employmentType: 'Seasonal',
        startDate: '2024-03-01',
        endDate: 'Present',
        workModel: 'Hybrid',
        description: 'I coordinate planning and occasionally take action when needed, working closely with the previous Board of Directors. I preside over Association meetings, ensure the diplomatic and representative role of PNCAA, and handle disciplinary actions such as removal or dismissal in consultation with the Executive Board.',
        icon: '/assets/img/icons/pncaa.svg',
    },
    {
        title: 'System Development Supervisor',
        company: 'Fortune Life Insurance PLC',
        employmentType: 'Full-time',
        startDate: '2022-07-01',
        endDate: 'Present',
        workModel: 'On-site',
        description: 'In brief, as an IT system development supervisor at Fortune Life Insurance PLC, my role entails overseeing the development, testing, support, and maintenance of diverse systems. This encompasses developing and testing both new systems and enhancements to existing ones. Additionally, I provide support and maintenance for existing systems, generate MIS reports for relevant departments, manage the company web portal and website, automate reports, and oversee daily batch jobs. My expertise extends to programming languages and tools such as Angular, MSSQL, SISS, MIS, Java, JavaSpring Boot, and iReport. I also have experience with Sophos Connect (VPN) here.',
        icon: '/assets/img/icons/ftl.svg',
    },
    {
        title: 'Founder',
        company: 'In Time Gaming',
        employmentType: 'Self-employed',
        startDate: '2019-07-01',
        endDate: 'Present',
        workModel: 'On-site',
        description: 'I founded and grew a successful gaming community with 22,000 YouTube subscribers and 72,000 TikTok followers. I produced high-quality gaming content, including reviews, tutorials, and live streams, engaging a global audience. I managed the YouTube Partner Program to monetize content and generate revenue. I designed and maintained a website to improve user experience and earn ad revenue. My focus on content strategy, video editing, and audience engagement has driven consistent growth.',
        icon: '/assets/img/icons/itg.svg',
    },
    {
        title: 'Senior Web Developer',
        company: 'HRINC (Cambodia) Co., Ltd',
        employmentType: 'Full-time',
        startDate: '2019-09-01',
        endDate: '2022-07-01',
        workModel: 'On-site',
        description: 'My primary focus is front-end development, testing, and maintaining internal projects. I am proficient in both Angular and Django frameworks. In addition to my technical duties, I actively contribute to business analytics, content publishing, and digital marketing strategies. I report directly to the IT manager, ensuring smooth collaboration and project alignment.',
        icon: '/assets/img/icons/hrinc.svg',
    },
    {
        title: 'Software Engineer',
        company: 'Arun Company',
        employmentType: 'Full-time',
        startDate: '2019-02-01',
        endDate: '2019-10-01',
        workModel: 'On-site',
        description: 'I specialize in developing applications using Vue.js, Python, Laravel, and Flex, tailoring my work to meet the specific needs of each client. I work independently, taking responsibility for project execution, and report directly to the General Manager. Most of the projects I handle are for clients outside Cambodia, allowing me to gain valuable experience in global markets and deliver high-quality solutions across diverse industries.',
        icon: '/assets/img/icons/arun.svg',
    },
    {
        title: 'Communication Coordinator',
        company: 'PN Cambodia Alumni Association',
        employmentType: 'Seasonal',
        startDate: '2018-04-01',
        endDate: '2019-06-10',
        workModel: 'Hybrid',
        description: 'I attend monthly Executive Board Meetings and the Annual General Meeting. I coordinate the development of the annual action plan for all association projects and lead volunteer teams to execute these projects. I work with the Executive Board Members to create projects that benefit members, ensuring they are well-planned and organized. Additionally, I take on other duties as needed to ensure proper project implementation and success.',
        icon: '/assets/img/icons/pncaa.svg',
    },
    {
        title: 'Junior Web Developer',
        company: 'Web Essentials Co., Ltd',
        employmentType: 'Full-time',
        startDate: '2018-08-01',
        endDate: '2019-02-28',
        workModel: 'On-site',
        description: 'I specialize in building dynamic and responsive websites using technologies such as JavaScript, TypeScript, TYPO3, PHP, and Laravel. I have hands-on experience in version control with Git and am passionate about collaborating in agile environments. In addition to my development skills, I also serve as a Scrum Master, helping teams deliver high-quality software solutions efficiently. I am always eager to learn and grow, and I strive to contribute to every project with both technical expertise and a commitment to continuous improvement.',
        icon: '/assets/img/icons/we.svg',
    },
    {
        title: 'IT Officer',
        company: 'Sahaka Microfinance Institution PLC',
        employmentType: 'Full-time',
        startDate: '2017-09-01',
        endDate: '2018-09-30',
        workModel: 'On-site',
        description: 'I participated in development using the CodeIgniter framework and MySQL Server 2012. I conducted system analysis, designed workflows, and managed the database. I organized meetings, presented project updates, documented meeting minutes, and created comprehensive project documentation. Additionally, I provided direct reports to the IT manager to ensure project alignment and progress.',
        icon: '/assets/img/icons/shk.svg',
    },
    {
        title: 'Web Developer Intern',
        company: 'Sahaka Microfinance Institution PLC',
        employmentType: 'Full-time',
        startDate: '2017-06-01',
        endDate: '2017-09-30',
        workModel: 'On-site',
        description: 'I restructured network cables to improve organization and maintain a tidy server room. I connected rack servers and switches using RJ45 cables, configuring the server room. I prepared network, phone line, camera, and door access cables for deployment. I performed line testing and labeled RJ45, phone line, camera, and door access cables. Additionally, I installed cameras, set up network connections, and configured door access systems to ensure proper functionality.',
        icon: '/assets/img/icons/shk.svg',
    },
    {
        title: 'President',
        company: 'Passerelles numériques Cambodia',
        employmentType: 'Seasonal',
        startDate: '2016-09-01',
        endDate: '2017-09-30',
        workModel: 'On-site',
        description: 'I act as the ambassador of PNC to school administration, faculty, and students through speeches and communication channels. I work closely with the education team and students to organize events and represent PNC in decision-making processes. I supervise the PNC team, promoting knowledge sharing and teamwork. I provide advice, coordinate events, and assist in decision-making, taking responsibility for final decisions when consensus cannot be reached after thorough input.',
        icon: '/assets/img/icons/pnc.svg',
    },
    {
        title: 'Club Coordinator',
        company: 'Passerelles numériques Cambodia',
        employmentType: 'Seasonal',
        startDate: '2015-09-01',
        endDate: '2016-09-30',
        workModel: 'On-site',
        description: 'I facilitate and organize club activities and events, gathering and sharing ideas between students and the educational team. I provide assistance and mentorship to students as needed, fostering their growth and engagement. Additionally, I cultivate strong relationships with club leaders, ensuring smooth supervision and effective management of club functions.',
        icon: '/assets/img/icons/pnc.svg',
    }
];

export const clients = [
    "Sahaka Microfinance Institution PLC",
    "Web Essentials Co., Ltd",
    "SpaciaNet Co., Ltd",
    "AirXpress",
    "Arun Company",
    "HRINC (Cambodia) Co., Ltd",
    "Fortune Life Insurance PLC",
];

export const portfolio = {
    websiteDevelopment: [
        "United Security Provider",
        "Ahladang Landing Page",
        "HRINC Jobs Portal",
        "In Time Gaming Blog",
        "Loem Heng Project",
        "Customer Portal",
    ],
    systemDevelopment: [
        "Customer Management System",
        "My Litmus Cloud",
        "Recruitment Management System",
        "Scan Application",
        "E-Submission Application",
        "Premium Renewal Collection",
        "Group Life Reporting System",
        "Management Information System (MIS Report)",
        "Financial Reports",
        "Operation Reports",
        "Policy Service Reports",
        "Actuarial Reports",
    ],
};

export const services = "IT Consulting";

export const blog = "Embracing Knowledge Sharing";

export const contactInfo = {
    email: "hengloem.pnc@gmail.com",
    mobilePhone: "(+855) 962 204 505",
    handPhone: "(+855) 762 226 505",
    telegram: "https://t.me/hengloem"
};

export const lh_ratingSkills = [
    {
        key: "programming",
        title: "Programming Languages",
        skills: [
            { title: "HTML", rate: 90 },
            { title: "CSS", rate: 90 },
            { title: "JavaScript", rate: 85 },
            { title: "Java", rate: 75 },
            { title: "Angular", rate: 80 },
            { title: "Java Spring Boot", rate: 70 },
            { title: "Raw PHP", rate: 70 },
            { title: "TypeScript", rate: 75 },
            { title: "Python", rate: 70 },
        ],
    },
    {
        key: "webFrameworks",
        title: "Web Frameworks",
        skills: [
            { title: "CodeIgniter", rate: 80 },
            { title: "Laravel", rate: 75 },
            { title: "Vue.js", rate: 80 },
            { title: "Spring Boot", rate: 70 },
        ],
    },
    {
        key: "uiUxFrameworks",
        title: "UI/UX Frameworks",
        skills: [
            { title: "Bootstrap", rate: 85 },
            { title: "Angular Material", rate: 80 },
        ],
    },
    {
        key: "databases",
        title: "Databases",
        skills: [
            { title: "MySQL", rate: 85 },
            { title: "Microsoft SQL Server", rate: 80 },
            { title: "MongoDB", rate: 70 },
        ],
    },
    {
        key: "uiUxDesign",
        title: "UI/UX Design Tools",
        skills: [
            { title: "Balsamiq", rate: 80 },
            { title: "Adobe Xd", rate: 85 },
            { title: "Invision", rate: 80 },
            { title: "Figma", rate: 85 },
            { title: "Canva", rate: 75 },
            { title: "Adobe Photoshop", rate: 85 },
            { title: "Webflow", rate: 80 },
        ],
    },
    {
        key: "videoEditing",
        title: "Video Editing Tools",
        skills: [
            { title: "Adobe Premiere Pro", rate: 80 },
            { title: "Apple Final Cut Pro", rate: 75 },
            { title: "Wondershare Filmora", rate: 75 },
            { title: "Apple iMovie", rate: 70 },
            { title: "CapCut", rate: 70 },
        ],
    },
    {
        key: "sourceControl",
        title: "Source Control and Collaboration",
        skills: [
            { title: "Git", rate: 85 },
            { title: "Github", rate: 80 },
            { title: "GitLab", rate: 80 },
            { title: "Trello", rate: 80 },
            { title: "Bitbucket", rate: 75 },
        ],
    },
    {
        key: "reporting",
        title: "Reporting Tools",
        skills: [
            { title: "Jaspersoft Report Designer 5.0.1", rate: 80 },
        ],
    },
    {
        key: "dataIntegration",
        title: "Data Integration Tools",
        skills: [
            { title: "SSIS (SQL Server Integration Services)", rate: 80 },
            { title: "Outlook MIS Report Integration", rate: 75 },
            { title: "Zapier", rate: 70 },
        ],
    },
    {
        key: "apiTesting",
        title: "API Testing Tools",
        skills: [
            { title: "Postman", rate: 80 },
            { title: "Swagger", rate: 75 },
        ],
    },
    {
        key: "fileTransfer",
        title: "File Transfer Tools",
        skills: [
            { title: "WinSCP", rate: 75 },
        ],
    },
    {
        key: "projectManagement",
        title: "Project Management",
        skills: [
            { title: "IT Project Consultation and Management", rate: 80 },
            { title: "Agile Scrum Methodology", rate: 75 },
            { title: "Self-Learning", rate: 85 },
            { title: "Critical Thinking", rate: 85 },
            { title: "Time Management", rate: 90 },
            { title: "CI/CD", rate: 75 },
        ],
    },
    {
        key: "interpersonalSkills",
        title: "Interpersonal Skills",
        skills: [
            { title: "Communication", rate: 90 },
            { title: "Teamwork", rate: 85 },
            { title: "Creativity", rate: 80 },
            { title: "Problem-Solving", rate: 85 },
            { title: "Leadership", rate: 75 },
            { title: "Motivational Speaking", rate: 75 },
        ],
    },
];

export const portfolios = [
    {
        title: "Image Project",
        category: "Website",
        client: "Envato",
        languages: "HTML, CSS, Javascript",
        previewLink: "https://www.envato.com",
        imageUrl: "http://via.placeholder.com/895x552.jpg",
    },
    {
        title: "Youtube Project",
        category: "Video",
        client: "Videohive",
        languages: "Adobe After Effects",
        previewLink: "https://www.videohive.net",
        imageUrl: "http://via.placeholder.com/895x552.jpg",
        videoUrl: "https://www.youtube.com/embed/7e90gBu4pas?enablejsapi=1&version=3&playerapiid=ytplayer",
    },
    {
        title: "Slider Project",
        category: "Website",
        client: "Themeforest",
        languages: "HTML, CSS, Javascript",
        previewLink: "https://www.themeforest.net",
        imageUrl: "http://via.placeholder.com/895x552.jpg",
    },
    {
        title: "Local Video Project",
        category: "Video",
        client: "Videohive",
        languages: "Adobe Premium",
        previewLink: "https://www.envato.com",
        imageUrl: "http://via.placeholder.com/895x552.jpg",
        videoUrl: "https://youtu.be/-fERfZ_x4bk",
    },
    {
        title: "Image Project",
        category: "Website",
        client: "Envato",
        languages: "HTML, CSS, Javascript",
        previewLink: "https://www.envato.com",
        imageUrl: "http://via.placeholder.com/895x552.jpg",
    },
    {
        title: "Image Project",
        category: "Website",
        client: "Envato",
        languages: "HTML, CSS, Javascript",
        previewLink: "https://www.envato.com",
        imageUrl: "http://via.placeholder.com/895x552.jpg",
    },
    {
        title: "Image Project",
        category: "Website",
        client: "Envato",
        languages: "HTML, CSS, Javascript",
        previewLink: "https://www.envato.com",
        imageUrl: "http://via.placeholder.com/895x552.jpg",
    },
    {
        title: "Image Project",
        category: "Website",
        client: "Envato",
        languages: "HTML, CSS, Javascript",
        previewLink: "https://www.envato.com",
        imageUrl: "http://via.placeholder.com/895x552.jpg",
    },
];
