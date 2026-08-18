import React from "react";
import PortfolioTemplate from "@/components/portfolio-template";

const portfolioData = {
  "personal": {
    "name": "Maddila Dhanush Srinivas",
    "role": "Full Stack Developer",
    "bio": "Building clean, high-performance systems with Java, React & Node. Focus on developer tooling, distributed architectures, and web technology.",
    "location": "Navi Mumbai, India",
    "github": "thedhanush0905",
    "linkedin": "www.linkedin.com/in/dhanush-srinivas-maddila-6574aa252",
    "email": "dhanushmaddila0905@gmail.com",
    "profileImage": "blob:http://localhost:3000/5247cdf2-167d-42f0-b50f-9142806231ed",
    "availability": "Open to opportunities"
  },
  "skills": [
    "Java",
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "Docker",
    "PostgreSQL",
    "Tailwind CSS"
  ],
  "projects": [
    {
      "title": "BluHire-AI",
      "description": "It is a HRMS web spplication that tries to simplify HR recruitement pipeline using AI Features",
      "tech": [
        "NodeJS",
        "TypeScript",
        "NextJS",
        "MongoDB Atlas",
        "RAG",
        "Python"
      ],
      "year": "2026",
      "category": "Web Application",
      "featured": false,
      "order": 1,
      "image": ""
    },
    {
      "title": "Stay Ease - Hotel Booking Web Application",
      "description": "A web application used to book and manage hotels",
      "tech": [
        "Java Springboot",
        "React",
        "MySql"
      ],
      "year": "2026",
      "category": "Web Application",
      "featured": false,
      "order": 3,
      "image": ""
    },
    {
      "title": "HealthMate-AI",
      "description": "It is an android application, developed using Jetpack Compose. The application predicts health risk scores using machine learning models. Uses SHAP and RAG to make the application more scalable and interactive.",
      "tech": [
        "Kotlin",
        "Python",
        "Firebase"
      ],
      "year": "2026",
      "category": "Android Application",
      "featured": false,
      "order": 2,
      "image": ""
    }
  ],
  "experience": [
    {
      "role": "Data Science Trainee",
      "company": "Board Infinity",
      "duration": "May 2024 - Jul 2024",
      "description": "Work on python libraries, SQL, Tableau etc"
    },
    {
      "role": "Graduate Trainee",
      "company": "HCL Technologies",
      "duration": "Dec 2025 - March 2026",
      "description": "Worked on Java Full Stack Development"
    }
  ],
  "services": [
    {
      "title": "Frontend Engineering",
      "description": "Responsive layouts, React app compilers, and clean performance optimization."
    },
    {
      "title": "Backend Engineer",
      "description": "Can develop backend applications using java or express"
    }
  ],
  "stats": [
    {
      "label": "Projects Completed",
      "value": "12+"
    },
    {
      "label": "Happy Clients",
      "value": "20+"
    }
  ]
};

export default function Home() {
  return (
    <PortfolioTemplate data={portfolioData} />
  );
}
