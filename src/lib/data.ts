import { Briefcase, GraduationCap, Github, Linkedin } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Sessions', href: '/sessions' },
  { name: 'Blog', href: '/blog' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/imusmangujjer', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/imusmangujjer', icon: Github },
];

export const RESUME_URL = 'https://drive.google.com/file/d/1iqZtaqkqvPcwclFyjYCq3wydA3CoFFvE/view?usp=sharing';

export const USER_DETAILS = {
  name: 'Muhammad Usman',
  tagline: 'With expertise in data visualization, KPI development, and AI automation.',
  roles: [
    'Decision Support Analyst',
    'AI Automation Strategist',
    'Business Intelligence Analyst',
    'Data Analyst',
    'Financial Analyst',
    'Marketing Analyst',
  ],
  bio: "I am a Decision Support Analyst with hands-on experience in data visualization, KPI development, and commercial insights generation. Skilled in Power BI, Excel, Tableau, and SQL, I am adept at collecting and cleaning data, preparing dashboards, and presenting clear, actionable findings for medical and leadership support teams. I am detail-oriented, collaborative, and driven by a continuous learning mindset with experience of PHIPA and global healthcare analysis exposure, and have a growing expertise as an AI Automation Strategist.",
  skills: {
    'Programming': ['Python', 'SQL Server', 'MySQL'],
    'Analytics': ['ML Models', 'Statistical Analysis', 'Ad hoc Analysis', 'Report writing', 'Impact analysis'],
    'Tools': ['Microsoft Excel', 'Power BI', 'PowerPoint', 'Tableau', 'Market Insights', 'Azure', 'AWS', 'GCP'],
    'Data Engineering': ['ETL Pipelines', 'Manipulating Data', 'Data Quality', 'Data Requirements', 'Medical coding'],
    'Healthcare Analytics': ['Decision Support', 'Advanced Statistical Analysis', 'Performance Indicators', 'Quality Improvement', 'Simulation Software', 'Preparing Reports', 'Health Policy', 'Benchmarking', 'Finance', 'SPSS'],
    'Business': ['Consistent', 'Ability to prioritize', 'Attention to Detail', 'Reliability', 'Creative', 'Project Planning'],
  },
  experience: [
    {
      role: 'Inventory Management Associate',
      company: '7-Eleven Inc, Windsor, Ontario, Canada',
      period: '2024 - Present',
      description: 'Provided exceptional customer service in a fast-paced retail environment. Managed cash register operations, including sales, returns, and daily reconciliation. Monitored inventory levels and restocked shelves.',
      icon: Briefcase,
    },
    {
      role: 'Business Intelligence Analyst',
      company: 'DotNow Private Limited, Lahore, Punjab, Pakistan',
      period: '2020 - 2023',
      description: 'Performed end-to-end data analysis to guide customer engagement decisions. Delivered BI dashboards reducing report preparation time by 35%. Used SQL automation to cut monthly data processing time from 6 hours to 1 hour.',
      icon: Briefcase,
    },
    {
      role: 'Junior Business Analyst',
      company: 'LondonITPros, Lahore, Punjab, Pakistan',
      period: '2019 - 2020',
      description: 'Conducted requirement gathering and data analysis to support decision-making and improve business processes. Prepared reports and presentations to communicate project updates and key insights to management.',
      icon: Briefcase,
    },
  ],
  education: [
    {
      degree: 'Post Graduate Certificate: Data Analytics for Business',
      institution: 'St. Clair College, Windsor, ON, Canada',
      period: '2023 - 2025',
      description: 'GPA: 4.0',
      icon: GraduationCap,
    },
    {
      degree: 'Bachelor of Science (Hons.): Computer Science',
      institution: 'Bahauddin Zakariya University, Multan - Punjab, Pakistan',
      period: '2015 - 2019',
      description: 'GPA: 3.78',
      icon: GraduationCap,
    },
  ],
  contact: {
    email: 'usmangujjer025@gmail.com',
  }
};
