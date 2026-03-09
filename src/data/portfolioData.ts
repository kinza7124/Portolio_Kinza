import worklogImg from "@/assets/projects/worklog.jpg";
import dsaMentorImg from "@/assets/projects/dsa-mentor.jpg";
import networkLogImg from "@/assets/projects/network-log.jpg";
import bugPredictorImg from "@/assets/projects/bug-predictor.jpg";
import algoVisualizerImg from "@/assets/projects/algo-visualizer.jpg";
import bookRecommenderImg from "@/assets/projects/book-recommender.jpg";
import lmsStudioImg from "@/assets/projects/lms-studio.jpg";
import netlabproImg from "@/assets/projects/netlabpro.jpg";

export const portfolioData = {
  about: {
    name: "Kinza Afzal",
    title: "AI/ML Enthusiast",
    location: "Karachi",
    phone: "+92 3242217127",
    email: "kinzaafzal07122004@gmail.com",
    bio: "AI/ML enthusiast with hands-on experience in Machine Learning, Deep Learning, and AI systems. Passionate about contributing to innovative projects through data-driven modeling and problem-solving.",
  },
  
  education: [
    {
      degree: "Bachelors in Computer Science",
      institution: "FAST NUCES",
      period: "2023-2027",
      gpa: "3.93/4.00",
      description: "Currently pursuing BS in Computer Science with focus on AI/ML and software development."
    },
    {
      degree: "A Levels Excellence",
      institution: "Highbrow School & College",
      period: "",
      gpa: "3A* 1A",
      description: "Achieved 3A* 1A grades in A Levels examinations."
    },
    {
      degree: "O Levels Excellence",
      institution: "Happy Palace Grammar School",
      period: "",
      gpa: "8A*",
      description: "Achieved 8A* grades in O Levels examinations."
    }
  ],
  
  experience: [
    {
      role: "App Testing Program Participant",
      company: "9D Technologies",
      period: "2026",
      description: "Beta tester conducting comprehensive user experience testing and quality assurance for applications. Evaluated app functionality, UI/UX, performance, and overall user experience.",
      tags: ["Beta testing", "User experience testing", "Quality assurance"],
      link: ""
    },
    {
      role: "Teaching Assistant of Database System",
      company: "FAST NUCES",
      period: "Feb 2026 - May 2026",
      description: "Currently mentoring 6th semester BSBA students in Database Systems. Conducting MySQL assignments and projects evaluation, providing guidance on database design, queries, and business application development.",
      tags: ["Database Systems", "MySQL", "BSBA", "Project Evaluation"],
      link: ""
    },
    {
      role: "Teaching Assistant of Data Structures",
      company: "FAST NUCES",
      period: "Aug 2025 - Dec 2025",
      description: "Mentored 40+ students on Data Structures & Algorithms, conducting code reviews and evaluating 20+ complex semester projects involving Trees, Graphs, and Heap implementations.",
      tags: ["Mentorship", "Code reviews", "Project evaluation"],
      link: ""
    },
    {
      role: "Open Source Contributor",
      company: "GirlScript Summer of Code (GSSoC)",
      period: "2025",
      description: "Contributed to ML/AI open-source projects by implementing features, fixing bugs, and optimizing Python code for high-impact repositories.",
      tags: ["ML/AI Projects", "Feature implementation", "Code optimization"],
      link: "https://gssoc.girlscript.tech/"
    }
  ],
  
  leadership: [
    {
      role: "Assistant Director - GR TechFest",
      organization: "Developers' Day - ACM NUCES",
      period: "Feb 2026 - Present",
      description: "Leading guest relations and coordinating event operations for TechFest 2026, including speaker management and collaboration across organizing teams.",
      tags: ["Leadership", "Event Management", "Coordination"],
      link: "https://www.linkedin.com/company/developersday/posts/?feedView=all"
    },
    {
      role: "Design Co-Head",
      organization: "ACM NUCES KHI",
      period: "Aug 2025 - Present",
      description: "Leading the visual identity and design strategy for the ACM student chapter, overseeing branding and creative direction.",
      tags: ["Design", "Branding", "Leadership"],
      link: "https://www.linkedin.com/company/acm-nuces-karachi/"
    },
    {
      role: "Deputy",
      organization: "ACM NUCES KHI",
      period: "Aug 2025 - Present",
      description: "Working as part of ACM Tech Operations which handles all technical operations. Contributed to ACM NUCES CODER'S CUP 2025 and received Certificate of Appreciation for outstanding work.",
      tags: ["Tech Operations", "Technical Leadership", "Event Coordination"],
      link: "https://tech-operations-showcase.raahim-irfan.workers.dev/"
    },
    {
      role: "Member - TechOperations Team",
      organization: "ACM NUCES KHI",
      period: "Aug 2025 - Present",
      description: "Backend Development for Worklog Project. Developed backend for a performance identification platform that links GitHub profiles, allowing admins to rate and analyze commits, PRs, and contributions to identify star performers.",
      tags: ["Backend Development", "PostgreSQL", "Performance Tracking"],
      link: "https://tech-operations-showcase.raahim-irfan.workers.dev/"
    },
    {
      role: "Member - Automation Team",
      organization: "Developers' Day - ACM NUCES",
      period: "Feb 2025 - Jun 2025",
      description: "Automation Showcase - DevDay'25. Developed email automation, custom templates, and the results portal frontend for the Developer's Day event.",
      tags: ["Automation", "Frontend Development", "Email Systems"],
      link: "https://automation-showcase-devday25.vercel.app/"
    },
    {
      role: "Design Head",
      organization: "IEEE NUCES KHI",
      period: "2024 - 2025",
      description: "Directed social media visual content and logo designs for national level events. Led the design team in creating impactful visual identities for IEEE initiatives.",
      tags: ["Design Leadership", "Visual Content", "Branding"],
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
      title: "Worklog App | ACM TechOps Team",
      description: "Hierarchical worklog tracking platform with role-based access, 5-state progress flow, credits management, ratings, and file attachments. Built backend and PostgreSQL/Prisma architecture.",
      tech: ["PostgreSQL", "Prisma", "Backend Development"],
      link: "https://drive.google.com/file/d/1l9_X4fIEuGKjuc3v6A3IZWFY8PsyEPOR/view"
    },
    {
      title: "DSA Mentor Pro",
      description: "High-fidelity, multimodal DSA tutoring platform powered by Google Gemini AI with agentic reasoning, chain-of-thought prompting, and structured JSON schema output.",
      tech: ["Google Gemini AI", "React", "Agentic AI"],
      link: "https://github.com/kinza7124/DSA-Coding-Mentor"
    },
    {
      title: "Network Log Analyzer",
      description: "ML model utilizing NLP techniques to monitor network logs and detect anomalies with automated email alerts via ChatOps.",
      tech: ["Machine Learning", "NLP", "Python", "Streamlit"],
      link: "https://network-log-analyzer-7aue37agzfrjiri7tv4hkd.streamlit.app/"
    },
    {
      title: "Bug Type Predictor",
      description: "ML & NLP preprocessing pipeline to predict bug types from text data using advanced classification and ensemble learning techniques.",
      tech: ["Machine Learning", "NLP", "Classification"],
      link: "https://predicting-bug-type-ml-project.vercel.app/"
    },
    {
      title: "Algorithm Visualiser",
      description: "Interactive platform visualizing sorting, searching, and graph algorithms in real-time for learning complex algorithmic concepts.",
      tech: ["JavaScript", "Algorithms", "Visualization"],
      link: "https://algorithm-visualiser-eight.vercel.app/"
    },
    {
      title: "Book Recommender System",
      description: "ML-powered recommendation system using Popularity-Based and Collaborative Filtering techniques for personalized book suggestions.",
      tech: ["Machine Learning", "Python", "Recommender Systems"],
      link: "https://github.com/kinza7124/Book-Recommender-System"
    },
    {
      title: "LMS Studio",
      description: "Comprehensive Learning Management System with role-based access, course management, assignment submission, and Google Classroom-like features.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Express.js"],
      link: "https://lnkd.in/d3d_diT8"
    },
    {
      title: "NetLabPro",
      description: "Interactive learning and gamified platform for Computer Network Labs with hands-on networking concept modules.",
      tech: ["React", "Gamification", "Education"],
      link: "https://net-lab-pro.vercel.app/"
    }
  ],
  
  achievements: [
    {
      title: "Rector's List of Honours",
      organization: "FAST NUCES",
      period: "Fall 2024, Spring 2025",
      description: "3x Gold Medalist for excellence in academic performance and integrity."
    },
    {
      title: "Dean's List of Honours",
      organization: "FAST NUCES",
      period: "Fall 2023, Spring 2024",
      description: "2x recipient for outstanding academic achievement."
    },
    {
      title: "Software Engineer Certificate",
      organization: "HackerRank",
      period: "Jan 2026",
      description: "Certified for software engineering skills.",
      link: "https://www.hackerrank.com/certificates/iframe/ce3f53f04ed4"
    },
    {
      title: "Introduction to AI Certificate",
      organization: "Simplilearn",
      period: "Sep 2025",
      description: "Completed comprehensive introduction to AI concepts and applications."
    },
    {
      title: "Supervised Learning Certificate",
      organization: "DataCamp",
      period: "Sep 2025",
      description: "Mastered supervised learning techniques using scikit-learn."
    },
    {
      title: "Deloitte Job Simulation",
      organization: "Deloitte",
      period: "Aug 2025",
      description: "Completed technology job simulation program."
    }
  ],
  
  contact: {
    github: "https://github.com/kinza7124",
    linkedin: "https://www.linkedin.com/in/kinza-afzal7-/",
    email: "kinzaafzal07122004@gmail.com",
    phone: "+92 3242217127"
  }
};
