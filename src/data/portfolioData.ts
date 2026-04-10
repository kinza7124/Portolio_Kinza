import worklogImg from "@/assets/projects/worklog.jpg";
import dsaMentorImg from "@/assets/projects/dsa-mentor.png";
import networkLogImg from "@/assets/projects/network-log.png";
import bugPredictorImg from "@/assets/projects/bug-predictor.png";
import algoVisualizerImg from "@/assets/projects/algo-visualizer.png";
import bookRecommenderImg from "@/assets/projects/book-recommender.png";
import lmsStudioImg from "@/assets/projects/lms-studio.png";
import netlabproImg from "@/assets/projects/netlabpro.png";
import inviteFlowImg from "@/assets/projects/1000116906.jpg";

export const portfolioData = {
  about: {
    name: "Kinza Afzal",
    title: "AI/ML Engineer & Full-Stack Developer",
    location: "Karachi, Pakistan",
    phone: "+92 3242217127",
    email: "kinzaafzal07122004@gmail.com",
    bio: "Building intelligent systems at the intersection of Machine Learning and Software Engineering. From multi-agent AI orchestration to full-stack platforms, I turn complex problems into elegant, data-driven solutions — with a 3.93 GPA and 3× Gold Medal track record to back it up.",
  },
  
  education: [
    {
      degree: "Bachelors in Computer Science",
      institution: "FAST NUCES",
      period: "2023-2027",
      gpa: "3.93/4.00",
      description: "Pursuing BS Computer Science with a focus on AI/ML, maintaining a near-perfect GPA while leading multiple technical initiatives."
    },
    {
      degree: "A Levels Excellence",
      institution: "Highbrow School & College",
      period: "",
      gpa: "3A* 1A",
      description: "Achieved exceptional 3A* 1A grades, demonstrating strong analytical foundations."
    },
    {
      degree: "O Levels Excellence",
      institution: "Happy Palace Grammar School",
      period: "",
      gpa: "8A*",
      description: "Earned a perfect 8A* record, setting the stage for academic excellence."
    }
  ],
  
  experience: [
    {
      role: "Research Programmer",
      company: "Department of Computer Science, FAST-NUCES Karachi Campus",
      period: "2026 - Present",
      description: "Contributing as a Research Programmer under the Faculty Research Support Grant (FRSG) for the project 'Adaptive Trust Framework for Multi-Stakeholder Collaboration in Synchro Modal Transport Systems.' Working across Blockchain, Machine Learning, Data Analytics, Security, Privacy, Distributed Systems, and Web & Mobile Development.",
      tags: ["Blockchain", "Machine Learning", "Data Analytics", "Security", "Privacy", "Distributed Systems", "Web & Mobile Development"],
      link: ""
    },
    {
      role: "App Testing Program Participant",
      company: "9D Technologies",
      period: "2026",
      description: "Conducted comprehensive UX testing and QA for production applications, identifying usability gaps and providing actionable feedback to improve app performance and user satisfaction.",
      tags: ["Beta Testing", "UX Research", "Quality Assurance"],
      link: ""
    },
    {
      role: "Teaching Assistant — Database Systems",
      company: "FAST NUCES",
      period: "Feb 2026 – May 2026",
      description: "Mentoring 6th-semester BSBA students in Database Systems — guiding MySQL assignments, evaluating projects, and helping students bridge the gap between theory and real-world database design.",
      tags: ["Database Systems", "MySQL", "Mentorship"],
      link: ""
    },
    {
      role: "Teaching Assistant — Data Structures",
      company: "FAST NUCES",
      period: "Aug 2025 – Dec 2025",
      description: "Mentored 40+ students on DSA fundamentals, conducted thorough code reviews, and evaluated 20+ complex semester projects involving Trees, Graphs, and Heap implementations.",
      tags: ["DSA", "Code Reviews", "Project Evaluation"],
      link: ""
    },
    {
      role: "Open Source Contributor",
      company: "GirlScript Summer of Code (GSSoC)",
      period: "2025",
      description: "Shipped features, squashed bugs, and optimized Python codebases across high-impact ML/AI open-source repositories during GSSoC 2025.",
      tags: ["Open Source", "ML/AI", "Python"],
      link: "https://gssoc.girlscript.tech/"
    }
  ],
  
  leadership: [
    {
      role: "Assistant Director — GR TechFest",
      organization: "Developers' Day — ACM NUCES",
      period: "Feb 2026 – Present",
      description: "Leading guest relations and coordinating event operations for TechFest 2026, including speaker management and cross-team collaboration.",
      tags: ["Leadership", "Event Management", "Coordination"],
      link: "https://www.linkedin.com/company/developersday/posts/?feedView=all"
    },
    {
      role: "Design Co-Head",
      organization: "ACM NUCES KHI",
      period: "Aug 2025 – Present",
      description: "Directing the visual identity and design strategy for the ACM student chapter — overseeing branding, creative direction, and design team output.",
      tags: ["Design", "Branding", "Creative Direction"],
      link: "https://www.linkedin.com/company/acm-nuces-karachi/"
    },
    {
      role: "Deputy — Tech Operations",
      organization: "ACM NUCES KHI",
      period: "Aug 2025 – Present",
      description: "Handling all technical operations for ACM. Key contributor to ACM NUCES Coder's Cup 2025, earning a Certificate of Appreciation for outstanding work.",
      tags: ["Tech Ops", "Technical Leadership", "Events"],
      link: "https://tech-operations-showcase.raahim-irfan.workers.dev/"
    },
    {
      role: "Backend Developer — TechOps Team",
      organization: "ACM NUCES KHI",
      period: "Aug 2025 – Present",
      description: "Built the backend for Worklog — a performance tracking platform that links GitHub profiles, enabling admins to rate commits, PRs, and contributions to identify star performers.",
      tags: ["Backend", "PostgreSQL", "Performance Analytics"],
      link: "https://tech-operations-showcase.raahim-irfan.workers.dev/"
    },
    {
      role: "Automation Engineer — DevDay'25",
      organization: "Developers' Day — ACM NUCES",
      period: "Feb 2025 – Jun 2025",
      description: "Developed email automation, custom templates, and the results portal frontend for Developer's Day — streamlining event communications at scale.",
      tags: ["Automation", "Frontend", "Email Systems"],
      link: "https://automation-showcase-devday25.vercel.app/"
    },
    {
      role: "Design Head",
      organization: "IEEE NUCES KHI",
      period: "2024 – 2025",
      description: "Directed social media visual content and logo designs for national-level events. Led the design team in crafting impactful visual identities for IEEE initiatives.",
      tags: ["Design Leadership", "Visual Identity", "Branding"],
      link: ""
    }
  ],
  
  skills: {
    "Languages": ["Python", "JavaScript", "TypeScript", "C++"],
    "Frontend": ["React", "Next.js", "React Native", "Tailwind CSS", "Framer Motion", "HTML", "CSS"],
    "Backend": ["Node.js", "Express.js"],
    "Databases": ["MongoDB", "PostgreSQL", "MySQL"],
    "AI/ML": ["Machine Learning", "Deep Learning", "LLMs", "LLM Orchestration", "LangChain", "Multi-Agent Orchestration", "RAG", "NLP", "FastAPI", "Vector Databases", "n8n Automation", "AI Tools"],
    "Tools": ["Git", "GitHub", "Docker", "Vercel", "Jira", "Figma"],
    "Soft Skills": ["Team Collaboration", "Leadership", "Communication", "Problem Solving", "Critical Thinking", "Time Management"],
    "Relevant Coursework": ["Data Structures & Algorithms", "OOP", "Database Systems", "ERD Design", "Software Design (Use Cases, Class Diagrams, Gantt Charts, Architecture Diagrams)", "System Design", "Computer Networks (DNS, VLANs, ACLs)", "Operating Systems (Threads, Mutexes, Processes)"]
  },
  
  projects: [
    {
      title: "Invite Flow # Digital Invite Genie",
      description: "Event invitation platform for creating digital invite cards, managing guests, and sharing RSVP/QR-based entry flows. Built with React + Vite, Tailwind + shadcn/ui, and Supabase Auth + Postgres for secure sign-in and reliable event data.",
      tech: ["React", "TypeScript", "Supabase"],
      link: "https://digital-invite-genie.vercel.app/",
      image: inviteFlowImg
    },
    {
      title: "Worklog App | ACM TechOps",
      description: "Hierarchical worklog platform with role-based access, a 5-state progress flow, credits management, and file attachments. Architected the backend with PostgreSQL & Prisma.",
      tech: ["PostgreSQL", "Prisma", "Backend"],
      link: "https://worklog.acmnuceskhi.com/",
      demoLink: "https://drive.google.com/file/d/1l9_X4fIEuGKjuc3v6A3IZWFY8PsyEPOR/view?usp=drive_link",
      directLink: "https://worklog.acmnuceskhi.com/",
      image: worklogImg
    },
    {
      title: "DSA Mentor Pro",
      description: "Multimodal DSA tutoring platform powered by Google Gemini AI — featuring agentic reasoning, chain-of-thought prompting, and structured JSON schema output for interactive learning.",
      tech: ["Google Gemini AI", "React", "Agentic AI"],
      link: "https://github.com/kinza7124/DSA-Coding-Mentor",
      image: dsaMentorImg
    },
    {
      title: "Network Log Analyzer",
      description: "ML-powered network monitoring system using NLP to detect anomalies in real-time, with automated email alerts via ChatOps for instant incident response.",
      tech: ["Machine Learning", "NLP", "Streamlit"],
      link: "https://network-log-analyzer-7aue37agzfrjiri7tv4hkd.streamlit.app/",
      image: networkLogImg
    },
    {
      title: "Bug Type Predictor",
      description: "End-to-end NLP pipeline that predicts bug types from raw text data using advanced classification and ensemble learning techniques.",
      tech: ["Machine Learning", "NLP", "Classification"],
      link: "https://predicting-bug-type-ml-project.vercel.app/",
      image: bugPredictorImg
    },
    {
      title: "Algorithm Visualiser",
      description: "Interactive visualizer that brings sorting, searching, and graph algorithms to life — making complex algorithmic concepts intuitive and engaging.",
      tech: ["JavaScript", "Algorithms", "Visualization"],
      link: "https://algorithm-visualiser-eight.vercel.app/",
      image: algoVisualizerImg
    },
    {
      title: "Book Recommender System",
      description: "Smart recommendation engine combining Popularity-Based and Collaborative Filtering to surface personalized book suggestions from large datasets.",
      tech: ["Machine Learning", "Python", "Recommender Systems"],
      link: "https://bookrs-864dcc59d8fa.herokuapp.com/",
      demoLink: "https://drive.google.com/file/d/16L7K6RIYG9Yp2fgapZZuv4TSaYxzCpQA/view?usp=drive_link",
      directLink: "https://drive.google.com/file/d/16L7K6RIYG9Yp2fgapZZuv4TSaYxzCpQA/view?usp=drive_link",
      image: bookRecommenderImg
    },
    {
      title: "LMS Studio",
      description: "Full-featured LMS with role-based access, course management, assignment workflows, and Google Classroom–style collaboration tools.",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      link: "https://lms-studio-kappa.vercel.app/",
      demoLink: "https://drive.google.com/file/d/1GtAkYoExTM5rLw-Fvh2ZPES26GWlWFQm/view?usp=drive_link",
      directLink: "https://drive.google.com/file/d/1GtAkYoExTM5rLw-Fvh2ZPES26GWlWFQm/view?usp=drive_link",
      image: lmsStudioImg
    },
    {
      title: "NetLabPro",
      description: "Gamified learning platform for Computer Network labs — turning hands-on networking concepts into interactive, bite-sized modules.",
      tech: ["React", "Gamification", "Education"],
      link: "https://net-lab-pro.vercel.app/",
      image: netlabproImg
    }
  ],
  
  achievements: [
    {
      title: "Rector's List of Honours",
      organization: "FAST NUCES",
      period: "Fall 2024, Spring 2025",
      description: "3× Gold Medalist — recognized for sustained academic brilliance and integrity."
    },
    {
      title: "Dean's List of Honours",
      organization: "FAST NUCES",
      period: "Fall 2023, Spring 2024",
      description: "2× honoree for outstanding academic achievement and consistency."
    },
    {
      title: "Software Engineer Certificate",
      organization: "HackerRank",
      period: "Jan 2026",
      description: "Certified in core software engineering competencies including problem solving and data structures.",
      link: "https://www.hackerrank.com/certificates/iframe/9592306b93a7"
    },
    {
      title: "Introduction to AI Certificate",
      organization: "Simplilearn",
      period: "Sep 2025",
      description: "Comprehensive certification covering AI fundamentals, neural networks, and real-world applications.",
      link: "https://www.linkedin.com/in/kinza-afzal7-/details/certifications"
    },
    {
      title: "Supervised Learning Certificate",
      organization: "DataCamp",
      period: "Sep 2025",
      description: "Mastered supervised learning techniques — regression, classification, and model evaluation — with scikit-learn.",
      link: "https://www.linkedin.com/in/kinza-afzal7-/details/certifications"
    },
    {
      title: "Deloitte Job Simulation",
      organization: "Deloitte",
      period: "Aug 2025",
      description: "Completed a technology consulting simulation covering data analytics and strategic problem-solving.",
      link: "https://www.linkedin.com/in/kinza-afzal7-/details/certifications"
    }
  ],
  
  contact: {
    github: "https://github.com/kinza7124",
    linkedin: "https://www.linkedin.com/in/kinza-afzal7-/",
    email: "kinzaafzal07122004@gmail.com",
    phone: "+92 3242217127"
  }
};
