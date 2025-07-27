import { lh_skillCategory } from "@app/shared/models/about.model";
import { environment } from "@env";

export const MENUS = [
    { title: 'app.home', icon: 'fa fa-home', route: '/home' },
    { title: 'app.about', icon: 'fa fa-user', route: '/about' },
    { title: 'app.portfolio', icon: 'fa fa-briefcase', route: '/portfolio' },
    // { title: 'app.contact', icon: 'fa fa-envelope-open', route: '/contact' },
    // { title: 'app.blog', icon: 'fa fa-comments', route: '/blog' }
];

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

export const lh_fullTimeExperiences = [
    {
        title: 'System Development Supervisor',
        company: 'Fortune Life Insurance PLC',
        employmentType: 'Full-time',
        startDate: '2022-07-01',
        endDate: 'Present',
        workModel: 'On-site',
        type: 'Full-time',
        description: 'In brief, as an IT system development supervisor at Fortune Life Insurance PLC, my role entails overseeing the development, testing, support, and maintenance of diverse systems. This encompasses developing and testing both new systems and enhancements to existing ones. Additionally, I provide support and maintenance for existing systems, generate MIS reports for relevant departments, manage the company web portal and website, automate reports, and oversee daily batch jobs. My expertise extends to programming languages and tools such as Angular, MSSQL, SISS, MIS, Java, JavaSpring Boot, and iReport. I also have experience with Sophos Connect (VPN) here.',
        icon: '/assets/img/icons/ftl.svg',
    },

    {
        title: 'Senior Web Developer',
        company: 'HRINC (Cambodia) Co., Ltd',
        employmentType: 'Full-time',
        startDate: '2019-09-01',
        endDate: '2022-07-01',
        workModel: 'On-site',
        type: 'Full-time',
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
        type: 'Full-time',
        description: 'I specialize in developing applications using Vue.js, Python, Laravel, and Flex, tailoring my work to meet the specific needs of each client. I work independently, taking responsibility for project execution, and report directly to the General Manager. Most of the projects I handle are for clients outside Cambodia, allowing me to gain valuable experience in global markets and deliver high-quality solutions across diverse industries.',
        icon: '/assets/img/icons/arun.svg',
    },
    {
        title: 'Junior Web Developer',
        company: 'Web Essentials Co., Ltd',
        employmentType: 'Full-time',
        startDate: '2018-08-01',
        endDate: '2019-02-28',
        workModel: 'On-site',
        type: 'Full-time',
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
        type: 'Full-time',
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
        type: 'Full-time',
        description: 'I restructured network cables to improve organization and maintain a tidy server room. I connected rack servers and switches using RJ45 cables, configuring the server room. I prepared network, phone line, camera, and door access cables for deployment. I performed line testing and labeled RJ45, phone line, camera, and door access cables. Additionally, I installed cameras, set up network connections, and configured door access systems to ensure proper functionality.',
        icon: '/assets/img/icons/shk.svg',
    }
];

export const lh_seasonalExperiences = [
    {
        title: 'President',
        company: 'PN Cambodia Alumni Association',
        employmentType: 'Seasonal',
        startDate: '2024-03-01',
        endDate: 'Present',
        workModel: 'Hybrid',
        type: 'Seasonal',
        description: 'I coordinate planning and occasionally take action when needed, working closely with the previous Board of Directors. I preside over Association meetings, ensure the diplomatic and representative role of PNCAA, and handle disciplinary actions such as removal or dismissal in consultation with the Executive Board.',
        icon: '/assets/img/icons/pncaa.svg',
    },
    {
        title: 'Communication Coordinator',
        company: 'PN Cambodia Alumni Association',
        employmentType: 'Seasonal',
        startDate: '2018-04-01',
        endDate: '2019-06-10',
        workModel: 'Hybrid',
        type: 'Seasonal',
        description: 'I attend monthly Executive Board Meetings and the Annual General Meeting. I coordinate the development of the annual action plan for all association projects and lead volunteer teams to execute these projects. I work with the Executive Board Members to create projects that benefit members, ensuring they are well-planned and organized. Additionally, I take on other duties as needed to ensure proper project implementation and success.',
        icon: '/assets/img/icons/pncaa.svg',
    },
    {
        title: 'President',
        company: 'Student Association of Passerelles numériques Cambodia',
        employmentType: 'Seasonal',
        startDate: '2016-09-01',
        endDate: '2017-09-30',
        workModel: 'On-site',
        type: 'Seasonal',
        description: 'I act as the ambassador of PNC to school administration, faculty, and students through speeches and communication channels. I work closely with the education team and students to organize events and represent PNC in decision-making processes. I supervise the PNC team, promoting knowledge sharing and teamwork. I provide advice, coordinate events, and assist in decision-making, taking responsibility for final decisions when consensus cannot be reached after thorough input.',
        icon: '/assets/img/icons/pnc.svg',
    },
    {
        title: 'Club Coordinator',
        company: 'Student Association of Passerelles numériques Cambodia',
        employmentType: 'Seasonal',
        startDate: '2015-09-01',
        endDate: '2016-09-30',
        workModel: 'On-site',
        type: 'Seasonal',
        description: 'I facilitate and organize club activities and events, gathering and sharing ideas between students and the educational team. I provide assistance and mentorship to students as needed, fostering their growth and engagement. Additionally, I cultivate strong relationships with club leaders, ensuring smooth supervision and effective management of club functions.',
        icon: '/assets/img/icons/pnc.svg',
    }
];

export const lh_selfEmployedExperiences = [
    {
        title: 'Founder',
        company: 'Heng Coding Service',
        employmentType: 'Self-employed',
        startDate: '2024-08-01',
        endDate: 'Present',
        workModel: 'Hybrid',
        type: 'Sefl-employed',
        description: 'Built scalable and innovative digital solutions with a focus on web development, system optimization, and workflow automation. Led projects utilizing technologies like Angular, Java Spring Boot, and MS SQL to deliver tailored applications while supervising a team of developers to ensure high-quality outcomes and foster professional growth. Established a strong reputation for delivering client-focused solutions aligned with the motto, "Building Digital Dreams, One Line at a Time."',
        icon: '/assets/img/icons/hcs.svg',
    },
    {
        title: 'Founder',
        company: 'In Time Gaming',
        employmentType: 'Self-employed',
        startDate: '2019-07-01',
        endDate: 'Present',
        workModel: 'On-site',
        type: 'Sefl-employed',
        description: 'I founded and grew a successful gaming community with 22,000 YouTube subscribers and 72,000 TikTok followers. I produced high-quality gaming content, including reviews, tutorials, and live streams, engaging a global audience. I managed the YouTube Partner Program to monetize content and generate revenue. I designed and maintained a website to improve user experience and earn ad revenue. My focus on content strategy, video editing, and audience engagement has driven consistent growth.',
        icon: '/assets/img/icons/itg.svg',
    },
];

export const lh_ratingSkills: lh_skillCategory[] = [
  {
    title: "Programming Languages",
    overview: "Core programming languages and technologies used to develop software and web applications.",
    skills: [
      { title: "HTML", desc: "HyperText Markup Language", rate: 95 },
      { title: "CSS", desc: "Cascading Style Sheets", rate: 90 },
      { title: "JavaScript", desc: "Programming language for web development", rate: 90 },
      { title: "TypeScript", desc: "Superset of JavaScript", rate: 90 },
      { title: "Angular", desc: "Web application framework", rate: 90 },
      { title: "Java", desc: "Object-oriented programming language", rate: 70 },
      { title: "Python", desc: "High-level programming language", rate: 70 },
      { title: "PHP", desc: "Server-side scripting language", rate: 70 }
    ],
    icon: "fa fa-code",
    type: "Hard-Skill"
  },
  {
    title: "Frameworks & UI/UX Libraries",
    overview: "Popular frameworks and libraries that streamline web application development and enhance user experience.",
    skills: [
      { title: "Angular Material", desc: "Material Design components for Angular", rate: 85 },
      { title: "Bootstrap", desc: "Front-end framework for responsive design", rate: 85 },
      { title: "Java Spring Boot", desc: "Framework for Java-based applications", rate: 85 },
      { title: "Tailwind CSS", desc: "Utility-first CSS framework", rate: 80 },
      { title: "Next.js", desc: "React-based framework for server-side rendering", rate: 70 },
      { title: "React", desc: "JavaScript library for building user interfaces", rate: 70 },
      { title: "ShadCN UI", desc: "Modern React UI components based on Radix & Tailwind", rate: 70 }
    ],
    icon: "fa fa-th-large",
    type: "Hard-Skill"
  },
  {
    title: "Databases",
    overview: "Relational and NoSQL database systems used for efficient data storage and management.",
    skills: [
      { title: "MySQL", desc: "Relational database management system", rate: 90 },
      { title: "Microsoft SQL Server", desc: "Database management system by Microsoft", rate: 90 },
      { title: "Firebase Realtime DB", desc: "Cloud-hosted NoSQL database by Google", rate: 60 }
    ],
    icon: "fa fa-database",
    type: "Hard-Skill"
  },
  {
    title: "UI/UX Design",
    overview: "Software used for designing, prototyping, and enhancing user experience in digital products.",
    skills: [
      { title: "Canva", desc: "Graphic design tool for beginners", rate: 95 },
      { title: "Adobe Photoshop", desc: "Image editing and graphic design tool", rate: 90 },
      { title: "Balsamiq", desc: "Rapid wireframing tool for UI/UX", rate: 70 },
      { title: "Figma", desc: "Collaborative interface design tool", rate: 75 },
      { title: "Storybook", desc: "UI component explorer for isolated development", rate: 65 }
    ],
    icon: "fa fa-paint-brush",
    type: "Hard-Skill"
  },
  {
    title: "Productivity & Collaboration",
    overview: "Essential tools for source control, collaboration, video editing, and API testing.",
    skills: [
      { title: "Git", desc: "Version control system", rate: 85 },
      { title: "GitHub", desc: "Cloud-based Git repository hosting", rate: 80 },
      { title: "Trello", desc: "Project management and collaboration tool", rate: 80 },
      { title: "Adobe Premiere Pro", desc: "Professional video editing software", rate: 80 },
      { title: "CapCut", desc: "Mobile video editing app", rate: 80 },
      { title: "Jaspersoft Report Designer 5.0.1", desc: "Business intelligence reporting tool", rate: 80 },
      { title: "Postman", desc: "API development and testing platform", rate: 75 },
    ],
    icon: "fa fa-bars",
    type: "Hard-Skill"
  },
  {
    title: "Non-Technical",
    overview: "Essential non-technical skills that enhance productivity, teamwork, and problem-solving in software development.",
    skills: [
      { title: "Leadership", desc: "Guiding teams with vision, clarity, and responsibility", rate: 95 },
      { title: "Time Management", desc: "Effectively managing time for productivity and balance", rate: 90 },
      { title: "Communication", desc: "Clear and impactful verbal and written communication", rate: 90 },
      { title: "Self-Learning", desc: "Quickly acquiring new skills and knowledge independently", rate: 85 },
      { title: "Critical Thinking", desc: "Analyzing situations to make informed decisions", rate: 85 },
      { title: "Teamwork", desc: "Collaborating with others to achieve common goals", rate: 85 },
      { title: "Problem-Solving", desc: "Resolving challenges through logical approaches", rate: 80 },
      { title: "Creativity", desc: "Developing innovative ideas and approaches", rate: 80 },
      { title: "Adaptability", desc: "Adjusting smoothly to changes in tools, environments, and expectations", rate: 80 },
      { title: "Emotional Intelligence", desc: "Understanding and managing your emotions and those of others", rate: 75 },
      { title: "Attention to Detail", desc: "Ensuring precision and accuracy in work", rate: 70 }
    ],
    icon: "fa fa-users",
    type: "Soft-Skill"
  }
];

export const lh_portfolioList = [
    {
      title: 'GTL Portal',
      type: 'image',
      src: '/assets/img/projects/gtl-portal.png',
      details: [
        { label: 'Project', value: 'Job Applicant Tracking System', icon: 'fa fa-file-text-o' },
        { label: 'Client', value: 'Fortune Life Insurance PLC', icon: 'fa fa-user-o' },
        { label: 'Languages', value: 'Angular, Java, Spring Boot', icon: 'fa fa-code' },
        { label: 'Duration', value: 'Aug 2024 - Oct 2024', icon: 'fa fa-calendar' }
      ]
    },
      {
      title: 'HTML Code Editor',
      type: 'image',
      src: 'https://dummyimage.com/895x552?text=HTML+Code+Editor',
      url: `${ environment.baseUrl }` + 'html-code-editor',
      details: [
        { label: 'Project', value: 'HTML Code Editor', icon: 'fa fa-file-text-o' },
        { label: 'Client', value: 'Personal Project', icon: 'fa fa-user-o' },
        { label: 'Languages', value: 'Angular', icon: 'fa fa-code' },
        { label: 'Duration', value: 'Nov 2024 - Dec 2024', icon: 'fa fa-calendar' }
      ]
    },
    {
      title: 'GCL WebView',
      type: 'image',
      src: 'https://dummyimage.com/895x552?text=GCL+WebView',
      details: [
        { label: 'Project', value: 'Internal Company WebView', icon: 'fa fa-file-text-o' },
        { label: 'Client', value: 'Fortune Life Insurance PLC', icon: 'fa fa-user-o' },
        { label: 'Languages', value: 'Angular', icon: 'fa fa-code' },
        { label: 'Duration', value: 'Nov 2024 - Dec 2024', icon: 'fa fa-calendar' }
      ]
    },
    {
      title: 'Loem Heng Project',
      type: 'image',
      src: 'https://dummyimage.com/895x552?text=Loem+Heng+Project',
      details: [
        { label: 'Project', value: 'Management & Dev Toolkit', icon: 'fa fa-file-text-o' },
        { label: 'Client', value: 'Heng Coding Service', icon: 'fa fa-user-o' },
        { label: 'Languages', value: 'Angular, Angular Material', icon: 'fa fa-code' },
        { label: 'Duration', value: 'Mar 2024 - Dec 2024', icon: 'fa fa-calendar' }
      ]
    },
    {
      title: 'E-Recruitment Portal',
      type: 'image',
      src: 'https://dummyimage.com/895x552?text=E-Recruitment+Portal',
      details: [
        { label: 'Project', value: 'Job Applicant Tracking System', icon: 'fa fa-file-text-o' },
        { label: 'Client', value: 'Fortune Life Insurance PLC', icon: 'fa fa-user-o' },
        { label: 'Languages', value: 'Angular, Java, Spring Boot', icon: 'fa fa-code' },
        { label: 'Duration', value: 'Aug 2024 - Oct 2024', icon: 'fa fa-calendar' }
      ]
    },
    {
      title: 'Renewal Portal',
      type: 'image',
      src: 'https://dummyimage.com/895x552?text=Renewal+Portal',
      details: [
        { label: 'Project', value: 'Insurance Renewal System', icon: 'fa fa-file-text-o' },
        { label: 'Client', value: 'Fortune Life Insurance PLC', icon: 'fa fa-user-o' },
        { label: 'Languages', value: 'Java, Spring Boot, Angular, MS SQL', icon: 'fa fa-code' },
        { label: 'Duration', value: 'Sep 2023 - Dec 2023', icon: 'fa fa-calendar' }
      ]
    },
    {
      title: 'Scan-App Portal',
      type: 'image',
      src: 'https://dummyimage.com/895x552?text=Scan-App+Portal',
      details: [
        { label: 'Project', value: 'Document Scanner & Tracker', icon: 'fa fa-file-text-o' },
        { label: 'Client', value: 'Fortune Life Insurance PLC', icon: 'fa fa-user-o' },
        { label: 'Languages', value: 'Java, Spring Boot, HTML5, Angular', icon: 'fa fa-code' },
        { label: 'Duration', value: 'Feb 2023 - May 2023', icon: 'fa fa-calendar' }
      ]
    },
    {
      title: 'E-App Portal',
      type: 'image',
      src: 'https://dummyimage.com/895x552?text=E-App+Portal',
      details: [
        { label: 'Project', value: 'Digital Application Submission', icon: 'fa fa-file-text-o' },
        { label: 'Client', value: 'Fortune Life Insurance PLC', icon: 'fa fa-user-o' },
        { label: 'Languages', value: 'Java, Angular, HTML5, CLI, SQL Server', icon: 'fa fa-code' },
        { label: 'Duration', value: 'Jul 2022 - Jan 2023', icon: 'fa fa-calendar' }
      ]
    },
    {
      title: 'Recruitement Management System',
      type: 'image',
      src: 'https://dummyimage.com/895x552?text=RMS+Portal',
      details: [
        { label: 'Project', value: 'Multi-country Job Listing Site', icon: 'fa fa-file-text-o' },
        { label: 'Client', value: 'HRINC (Cambodia) Co., Ltd', icon: 'fa fa-user-o' },
        { label: 'Languages', value: 'AngularJS, HTML5, CSS, TypeScript', icon: 'fa fa-code' },
        { label: 'Duration', value: 'Sep 2019 - Jul 2022', icon: 'fa fa-calendar' }
      ]
    },
    {
      title: 'Hrinc Jobs Portal',
      type: 'image',
      src: 'https://dummyimage.com/895x552?text=HRINCJobs+Portal',
      details: [
        { label: 'Project', value: 'Multi-country Job Listing Site', icon: 'fa fa-file-text-o' },
        { label: 'Client', value: 'HRINC (Cambodia) Co., Ltd', icon: 'fa fa-user-o' },
        { label: 'Languages', value: 'AngularJS, HTML5, CSS, TypeScript', icon: 'fa fa-code' },
        { label: 'Duration', value: 'Sep 2019 - Jul 2022', icon: 'fa fa-calendar' }
      ]
    },
    {
      title: 'In Time Gaming Blog',
      type: 'image',
      src: 'https://dummyimage.com/895x552?text=In+Time+Gaming+Blog',
      details: [
        { label: 'Project', value: 'Gaming Review Blog', icon: 'fa fa-file-text-o' },
        { label: 'Client', value: 'Self-initiated Project', icon: 'fa fa-user-o' },
        { label: 'Languages', value: 'HTML5, CSS, JavaScript, PHP, Bootstrap', icon: 'fa fa-code' },
        { label: 'Duration', value: 'Jul 2021 - Dec 2021', icon: 'fa fa-calendar' }
      ]
    },
    {
      title: 'Loem Heng Blog',
      type: 'image',
      src: 'https://dummyimage.com/895x552?text=Loem+Heng+Blog',
      details: [
        { label: 'Project', value: 'Personal Portfolio Blog', icon: 'fa fa-file-text-o' },
        { label: 'Client', value: 'Heng Coding Service', icon: 'fa fa-user-o' },
        { label: 'Languages', value: 'HTML5, CSS, JavaScript, Bootstrap', icon: 'fa fa-code' },
        { label: 'Duration', value: 'Jan 2021 - Jun 2021', icon: 'fa fa-calendar' }
      ]
    },
    {
      title: 'Ahladang Landing Page',
      type: 'image',
      src: 'https://dummyimage.com/895x552?text=Ahladang+Landing+Page',
      details: [
        { label: 'Project', value: 'Education Platform Landing Page', icon: 'fa fa-file-text-o' },
        { label: 'Client', value: 'Heng Coding Service', icon: 'fa fa-user-o' },
        { label: 'Languages', value: 'HTML5, JavaScript, Bootstrap, SDLC', icon: 'fa fa-code' },
        { label: 'Duration', value: 'Jun 2019 - Sep 2019', icon: 'fa fa-calendar' }
      ]
    },
    {
      title: 'My Litmus Cloud',
      type: 'image',
      src: 'https://dummyimage.com/895x552?text=My+Litmus+Cloud',
      details: [
        { label: 'Project', value: 'IoT Sensor Monitoring', icon: 'fa fa-file-text-o' },
        { label: 'Client', value: 'Arun Company', icon: 'fa fa-user-o' },
        { label: 'Languages', value: 'Vue.js, HTML5, SQL Server, CSS', icon: 'fa fa-code' },
        { label: 'Duration', value: 'Feb 2019 - Sep 2019', icon: 'fa fa-calendar' }
      ]
    },
    {
      title: 'United Security Provider',
      type: 'image',
      src: 'https://dummyimage.com/895x552?text=United+Security+Provider',
      details: [
        { label: 'Project', value: 'Corporate Website', icon: 'fa fa-file-text-o' },
        { label: 'Client', value: 'Heng Coding Service', icon: 'fa fa-user-o' },
        { label: 'Languages', value: 'Typo3, HTML5, Git, Postman API', icon: 'fa fa-code' },
        { label: 'Duration', value: 'Aug 2018 - Jan 2019', icon: 'fa fa-calendar' }
      ]
    },
    {
      title: 'Customer Management System',
      type: 'image',
      src: 'https://dummyimage.com/895x552?text=Customer+Management+System',
      details: [
        { label: 'Project', value: 'MFI Customer Management', icon: 'fa fa-file-text-o' },
        { label: 'Client', value: 'Sahaka Microfinance Institution Plc', icon: 'fa fa-user-o' },
        { label: 'Languages', value: 'HTML5, Git, Problem Solving', icon: 'fa fa-code' },
        { label: 'Duration', value: 'Jun 2017 - Aug 2018', icon: 'fa fa-calendar' }
      ]
    },
    {
      title: 'Internship FollowUp System',
      type: 'image',
      src: '/assets/img/projects/internship-follow-up-system.png',
      details: [
        { label: 'Project', value: 'Internship Follow Up System', icon: 'fa fa-file-text-o' },
        { label: 'Client', value: 'PNC Final Project', icon: 'fa fa-user-o' },
        { label: 'Languages', value: 'PHP, HTML5, Bootstrap', icon: 'fa fa-code' },
        { label: 'Duration', value: 'May 2017 - Jun 2017', icon: 'fa fa-calendar' }
      ]
    }
  ];  