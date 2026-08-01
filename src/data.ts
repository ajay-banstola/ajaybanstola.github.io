// ============================================================
// All your site content lives here. Edit this file, push, done.
// ============================================================

export const site = {
  name: 'Ajay Banstola',
  role: 'Software Engineer @ Apex Innovations',
  location: 'Lafayette, LA',
  email: 'ajay.banstola@gmail.com',
  github: 'https://github.com/ajaybanstola',
  linkedin: 'https://www.linkedin.com/in/ajaybanstola',
  tagline: 'AI systems · fuzzing & binary analysis · medical-imaging ML',
  intro:
    "Software engineer with 5+ years across AI platforms, large-scale archiving systems, and fintech. Currently building at Apex Innovations. I recently finished my M.S. in Computer Science at UL Lafayette with a 4.0, where my research spanned glaucoma progression prediction from RNFLT maps and binary-level fuzzing under Prof. Arun Lakhotia.",
};

export const skills = {
  'Languages': ['Python', 'Java', 'JavaScript / TypeScript', 'C / C++', 'Rust (research)'],
  'AI / ML': ['PyTorch', 'TensorFlow', 'scikit-learn', 'CNNs', 'RAG', 'LangChain', 'Hugging Face'],
  'Web & Backend': ['Django', 'Flask', 'React', 'Node.js', 'REST APIs'],
  'Infra & Tools': ['AWS', 'Azure', 'Datadog', 'Jenkins CI/CD', 'Git', 'Linux'],
  'Data': ['PostgreSQL', 'MSSQL', 'MongoDB', 'ETL pipelines', 'Tableau', 'Power BI'],
};

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Apex Innovations',
    where: 'Lafayette, LA',
    when: 'Mar 2026 — Present',
    points: [
      // TODO(Ajay): replace this line with 1–2 real bullets about your work at Apex.
      'Building software at Apex Innovations. (Edit src/data.ts to describe your current work.)',
    ],
    stack: ['—'],
  },
  {
    role: 'AI Engineer',
    company: 'Opportunity Machine',
    where: 'Lafayette, LA',
    when: 'May 2025 — Aug 2025',
    points: [
      'Co-led full-stack development of the Blue Partner AI platform with law enforcement partners, including a real-time notification system sharing live map locations with officers — cutting paperwork by 75%.',
      'Integrated GPT for conversational AI, automated report generation, and policy compliance, reducing average incident-report time from 50 to 15 minutes.',
    ],
    stack: ['Azure', 'React', 'TypeScript', 'ElevenLabs'],
  },
  {
    role: 'Software Engineer',
    company: 'Smarsh Inc.',
    where: 'Portland, OR',
    when: 'Nov 2021 — Nov 2023',
    points: [
      'Built and deployed a scalable web-archiving platform; automated CI/CD with Jenkins (75% faster deploy cycles), kept 95%+ unit-test coverage, and wired Datadog monitoring across 65+ distributed servers.',
      'Designed high-performance migration pipelines moving multi-terabyte datasets from PostgreSQL to MSSQL, improving transfer efficiency by 20%.',
    ],
    stack: ['Python', 'Django', 'Jenkins', 'Datadog'],
  },
  {
    role: 'Associate Software Engineer',
    company: 'PayNep Pvt. Ltd.',
    where: 'Kathmandu, Nepal',
    when: 'Nov 2020 — Oct 2021',
    points: [
      'Led back-end and API development for a digital wallet — bus ticketing, mobile top-up, and payment integrations — and led its deployment.',
      'Documented APIs in Confluence and automated Postman test runners, improving API reliability for cross-functional teams.',
    ],
    stack: ['Python', 'Flask', 'Postman'],
  },
];

export const projects = [
  {
    name: 'Glaucoma Progression Prediction',
    desc: 'Deep-learning pipeline detecting glaucoma progression from RNFLT maps (GDP500 dataset). Benchmarked VGG and ResNet with subgroup AUCs across demographic groups to check fairness of generalization.',
    stack: ['PyTorch', 'VGG', 'ResNet'],
  },
  {
    name: 'Byteri — binary-level fuzzing',
    desc: "Enhanced a taint-analysis framework under Prof. Arun Lakhotia: built a custom AFL++ mutator using Byteri's AST-based input generation, and compared taint behavior between C and Rust binaries.",
    stack: ['C', 'Rust', 'AFL++', 'LLVM'],
  },
  {
    name: 'MedScan — pneumonia detection',
    desc: 'Web app detecting pneumonia from chest X-rays: CNN model served through a Flask API with a React frontend for real-time predictions.',
    stack: ['Flask', 'CNN', 'React'],
  },
  {
    name: 'Customer Predictive Analytics',
    desc: 'Lead-conversion prediction with logistic regression on historical customer data, with a web dashboard visualizing the results.',
    stack: ['scikit-learn', 'Flask'],
  },
];

export const journey = [
  { when: '2026 — now', label: 'current', title: 'Software Engineer', where: 'Apex Innovations, Lafayette LA' },
  { when: '2025', label: 'graduated', title: 'M.S. Computer Science, 4.0 GPA', where: 'UL Lafayette — Academic Excellence Award' },
  { when: '2025', label: 'ai', title: 'AI Engineer', where: 'Opportunity Machine — Blue Partner platform' },
  { when: '2024', label: 'fellowship', title: 'Robert May Fellowship', where: 'Full-duration fellowship for the M.S. program' },
  { when: '2021 — 2023', label: 'scale', title: 'Software Engineer', where: 'Smarsh Inc., Portland OR' },
  { when: '2020 — 2021', label: 'start', title: 'Associate Software Engineer', where: 'PayNep, Kathmandu — where it started' },
];
