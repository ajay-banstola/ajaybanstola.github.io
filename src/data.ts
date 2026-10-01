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
  'Languages': ['Python', 'TypeScript / JavaScript', 'PHP', 'Java', 'SQL', 'C / C++', 'Rust (research)'],
  'AI & Agents': ['LLM APIs (Claude, GPT)', 'Agentic workflows & tool use', 'MCP', 'RAG', 'LangGraph / LangChain', 'AutoGen', 'Vector search (pgvector)', 'LLM evals'],
  'ML': ['PyTorch', 'Hugging Face', 'scikit-learn', 'TensorFlow', 'CNNs / medical imaging'],
  'Web & Backend': ['PHP', 'Django', 'FastAPI', 'Flask', 'React', 'Node.js', 'Astro', 'REST APIs'],
  'Cloud & DevOps': ['AWS', 'Azure', 'Docker', 'GitHub Actions', 'Jenkins', 'Datadog', 'Linux'],
  'Data': ['PostgreSQL', 'MSSQL', 'MongoDB', 'ETL pipelines', 'Tableau', 'Power BI'],
  'AI-assisted dev': ['Claude Code', 'Cursor', 'GitHub Copilot'],
};

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Apex Innovations',
    where: 'Lafayette, LA',
    when: 'Mar 2026 — Present',
    points: [
      'Apex Innovations makes Joint Accredited, interactive continuing-education and certification courseware for nurses and clinicians — NIH Stroke Scale (NIHSS+), stroke and neurology, cardiac, sepsis, and diabetes — used by hospital stroke programs and health systems.',
      'I build the platform that delivers it: the web application nurses use to take courses, complete assessments, and earn their certifications and CE credit.',
    ],
    stack: ['PHP', 'JavaScript', 'Healthcare e-learning'],
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
  { when: '2026 — now', tags: ['current', 'healthcare ed-tech'], title: 'Software Engineer', where: 'Apex Innovations, Lafayette LA', note: 'Building the platform behind accredited certification courses for nurses' },
  { when: '2025', tags: ['generative ai', 'public safety'], title: 'AI Engineer', where: 'Opportunity Machine, Lafayette LA', note: 'Blue Partner — GPT-powered incident reporting for law enforcement' },
  { when: '2024 — 2025', tags: ['m.s. cs', 'research', 'fellowship'], title: 'M.S. Computer Science — 4.0 GPA', where: 'UL Lafayette', note: 'Funded throughout by the Robert May Fellowship · Academic Excellence Award at graduation' },
  { when: '2021 — 2023', tags: ['distributed systems', 'scale'], title: 'Software Engineer', where: 'Smarsh Inc.', note: 'Web-archiving platform monitored across 65+ servers' },
  { when: '2020 — 2021', tags: ['fintech', 'first role'], title: 'Associate Software Engineer', where: 'PayNep, Kathmandu', note: 'Digital-wallet back end — where it started' },
];
