require("dotenv").config();
const mongoose = require("mongoose");
const Internship = require("./models/Internship");

const internships = [
  {
    title: "Frontend Developer Intern",
    company: "Google",
    location: "Remote",
    stipend: "25000",
    duration: "3 months",
    description: "React Developer Internship with focus on building user interfaces and working with modern web technologies.",
    requirements: ["React", "JavaScript", "HTML/CSS", "Git"],
    category: "Engineering"
  },
  {
    title: "Backend Engineer Intern",
    company: "Microsoft",
    location: "Seattle, WA",
    stipend: "28000",
    duration: "3 months",
    description: "Build scalable backend services using .NET and cloud technologies. Work with Azure and SQL Server.",
    requirements: [".NET", "C#", "Azure", "SQL"],
    category: "Engineering"
  },
  {
    title: "Data Science Intern",
    company: "Meta",
    location: "Menlo Park, CA",
    stipend: "30000",
    duration: "3 months",
    description: "Analyze large datasets and build machine learning models. Work with Python and advanced analytics.",
    requirements: ["Python", "Machine Learning", "Statistics", "SQL"],
    category: "Engineering"
  },
  {
    title: "Product Manager Intern",
    company: "Amazon",
    location: "Remote",
    stipend: "26000",
    duration: "6 months",
    description: "Drive product strategy and work directly with leadership teams to shape features.",
    requirements: ["Analytics", "Strategy", "Communication", "Excel"],
    category: "Product"
  },
  {
    title: "UX/UI Design Intern",
    company: "Apple",
    location: "Cupertino, CA",
    stipend: "27000",
    duration: "3 months",
    description: "Design beautiful user interfaces and experiences. Work with Figma and modern design tools.",
    requirements: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
    category: "Design"
  },
  {
    title: "DevOps Engineer Intern",
    company: "Netflix",
    location: "Los Gatos, CA",
    stipend: "29000",
    duration: "6 months",
    description: "Work with cloud infrastructure, Docker, Kubernetes, and CI/CD pipelines.",
    requirements: ["Docker", "Kubernetes", "AWS", "Linux"],
    category: "Engineering"
  },
  {
    title: "Marketing Strategy Intern",
    company: "Nike",
    location: "Portland, OR",
    stipend: "20000",
    duration: "3 months",
    description: "Develop marketing campaigns and analyze consumer behavior for digital products.",
    requirements: ["Marketing", "Analytics", "Content Creation", "Social Media"],
    category: "Marketing"
  },
  {
    title: "Business Analyst Intern",
    company: "Tesla",
    location: "Austin, TX",
    stipend: "25000",
    duration: "6 months",
    description: "Analyze business processes and provide insights to improve operations.",
    requirements: ["Excel", "SQL", "Tableau", "Business Analysis"],
    category: "Operations"
  },
  {
    title: "Full Stack Developer Intern",
    company: "Spotify",
    location: "Stockholm, Sweden",
    stipend: "24000",
    duration: "3 months",
    description: "Build full-stack features using React, Node.js, and MongoDB.",
    requirements: ["React", "Node.js", "MongoDB", "JavaScript"],
    category: "Engineering"
  },
  {
    title: "Security Engineer Intern",
    company: "Uber",
    location: "San Francisco, CA",
    stipend: "27000",
    duration: "6 months",
    description: "Work on security testing, vulnerability assessments, and secure coding practices.",
    requirements: ["Cybersecurity", "Penetration Testing", "Python", "Linux"],
    category: "Engineering"
  },
  {
    title: "Mobile App Developer Intern",
    company: "Discord",
    location: "Remote",
    stipend: "26000",
    duration: "3 months",
    description: "Build iOS and Android apps with React Native and native technologies.",
    requirements: ["React Native", "Swift", "Kotlin", "Mobile Development"],
    category: "Engineering"
  },
  {
    title: "Software Engineer Intern",
    company: "Pinterest",
    location: "San Francisco, CA",
    stipend: "26000",
    duration: "3 months",
    description: "Work on large-scale distributed systems and improve platform performance.",
    requirements: ["Python", "Java", "Distributed Systems", "Databases"],
    category: "Engineering"
  },
  {
    title: "Content Strategy Intern",
    company: "LinkedIn",
    location: "Remote",
    stipend: "21000",
    duration: "3 months",
    description: "Create engaging content and develop strategies for professional communities.",
    requirements: ["Content Writing", "Social Media", "Analytics", "SEO"],
    category: "Marketing"
  },
  {
    title: "Data Engineering Intern",
    company: "Airbnb",
    location: "San Francisco, CA",
    stipend: "28000",
    duration: "6 months",
    description: "Build data pipelines and ETL processes using Apache Spark and Python.",
    requirements: ["Python", "Apache Spark", "SQL", "Data Engineering"],
    category: "Engineering"
  },
  {
    title: "AI/ML Engineer Intern",
    company: "OpenAI",
    location: "San Francisco, CA",
    stipend: "31000",
    duration: "6 months",
    description: "Work on cutting-edge AI models and machine learning infrastructure.",
    requirements: ["Python", "TensorFlow", "Machine Learning", "PyTorch"],
    category: "Engineering"
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/internx");
    console.log("Connected to MongoDB");

    // Clear existing internships
    await Internship.deleteMany({});
    console.log("Cleared existing internships");

    // Insert new internships
    const result = await Internship.insertMany(internships);
    console.log(`✓ Successfully seeded ${result.length} internships`);

    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();
