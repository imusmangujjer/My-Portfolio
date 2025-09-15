import { Github, Linkedin, Briefcase, GraduationCap } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/imusmangujjer', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/imusmangujjer', icon: Github },
];

export const RESUME_URL = '/usman-gujjer-resume.pdf'; // Placeholder

export const USER_DETAILS = {
  name: 'Usman Gujjer',
  tagline: 'Transforming data into actionable insights and automating intelligence.',
  roles: [
    'Business Analyst',
    'AI Automation Expert',
    'Marketing Analyst',
    'Financial Analyst',
    'Data Analyst',
    'Operations Manager',
  ],
  bio: "I'm a versatile and results-oriented professional with a strong foundation in data analysis, business intelligence, and AI-driven automation. My expertise lies in translating complex data into strategic insights, optimizing business processes, and building intelligent systems that drive growth and efficiency. I'm passionate about leveraging technology to solve real-world problems and deliver measurable value.",
  skills: {
    'Business Intelligence': ['Tableau', 'Power BI', 'Qlik Sense', 'Data Warehousing', 'ETL Processes'],
    'Data Science & AI': ['Python (Pandas, NumPy, Scikit-learn)', 'R', 'Machine Learning', 'Natural Language Processing', 'SQL'],
    'Marketing & Finance': ['Google Analytics', 'Financial Modeling', 'Market Research', 'A/B Testing'],
    'Operations & Tools': ['Excel', 'Salesforce', 'Jira', 'Git & GitHub'],
  },
  experience: [
    {
      role: 'Business Intelligence Analyst',
      company: 'Innovate Solutions',
      period: '2021 - Present',
      description: 'Developed and maintained BI dashboards and reports to track key performance indicators. Performed data analysis to identify trends and provide actionable insights for various departments. Collaborated with stakeholders to understand business requirements and deliver data-driven solutions.',
      icon: Briefcase,
    },
    {
      role: 'AI Automation Expert',
      company: 'Automate Forward',
      period: '2019 - 2021',
      description: 'Designed and implemented AI-powered automation workflows to streamline business operations. Utilized machine learning models for predictive analysis and process optimization. Reduced manual effort by 40% in key operational areas.',
      icon: Briefcase,
    },
    {
      role: 'Data Analyst Intern',
      company: 'Data Insights Co.',
      period: 'Summer 2018',
      description: 'Assisted senior analysts with data cleaning, wrangling, and visualization. Contributed to a major market research project by analyzing customer survey data.',
      icon: Briefcase,
    },
  ],
  education: [
    {
      degree: 'Master of Science in Data Science',
      institution: 'University of Technology',
      period: '2017 - 2019',
      description: 'Specialized in machine learning, big data technologies, and statistical analysis.',
      icon: GraduationCap,
    },
    {
      degree: 'Bachelor of Business Administration',
      institution: 'City Business School',
      period: '2013 - 2017',
      description: 'Focused on finance and marketing analytics.',
      icon: GraduationCap,
    },
  ],
  contact: {
    email: 'usman.gujjer@example.com', // Placeholder
  }
};
