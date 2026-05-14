export const portfolio = {
  hero_headline:
    'Software Engineering & AI Student — Seeking 4-month PFA internship in AI & Web Development',
  about_me:
    'Software Engineering and AI student, passionate about full-stack development and artificial intelligence. With experience in AI projects and hackathons, seeking a 4-month internship (PFA) in AI & Web Development.',
  contact: {
    phone: '+212 716-249173',
    email: 'oulmoukbouchra@gmail.com',
    location: 'Errachidia, Morocco',
    linkedin: 'https://www.linkedin.com/in/Bouchra-Oulmouk',
    github: 'https://github.com/Bouchra-Oulmouk',
  },
  technical_skills: {
    languages: ['Python', 'Java', 'C', 'JavaScript (ES6+)', 'SQL'],
    ai_and_data_science: [
      'Machine Learning',
      'Deep Learning (CNN)',
      'GraphSAGE',
      'Pandas',
      'Data Visualization',
    ],
    web_development: [
      'React.js',
      'Spring Boot',
      'Node.js',
      'Express.js',
      'HTML5/CSS3',
    ],
    databases_and_tools: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Git',
      'GitHub',
      'Jira',
      'VS Code',
      'Linux',
    ],
  },
  about: {
    intro:
      "En parallèle des cours, j'investis dans les hackathons, les bootcamps et la vie associative : concourir, prototyper vite, et apprendre en équipe. Voici quelques moments marquants — les visuels ci-dessous sont des emplacements réservés que vous pourrez remplacer par vos photos réelles.",
    extracurricular: [
      {
        title: 'RamadanAI Hackathon',
        badge: '2024 · Prix Impact territorial & utilité publique',
        description:
          "Avec mon équipe, nous avons remporté la 3ᵉ place au hackathon régional RamadanAI, puis été sélectionnées pour la phase nationale en tant que finalistes. Un parcours intense autour de l'IA au service de l'intérêt collectif pendant le Ramadan.",
        images: [
          {
            alt: 'RamadanAI — moment d’équipe ou de travail',
            placeholderLabel: 'RamadanAI',
          },
          {
            alt: 'RamadanAI — présentation ou phase nationale',
            placeholderLabel: 'Phase nationale',
          },
        ],
      },
      {
        title: 'Bootcamp Euromed',
        badge: 'Formation intensive',
        description:
          "Participation à un bootcamp à l’Université Euroméditerranée : sessions condensées sur les pratiques tech, le travail en groupe et les livrables sous contrainte de temps — une excellente préparation aux environnements exigeants.",
        images: [
          {
            alt: 'Bootcamp Euromed — atelier ou session',
            placeholderLabel: 'Euromed',
          },
          {
            alt: 'Bootcamp Euromed — groupe / projet',
            placeholderLabel: 'Bootcamp',
          },
        ],
      },
      {
        title: 'Water4Future — Hackathon international',
        badge: '2024 · Finalistes',
        description:
          "Participation au hackathon international Water4Future autour des enjeux de l’eau et de la durabilité. Notre équipe est arrivée en finale, avec un prototype et une vision alignés sur l’impact environnemental.",
        images: [
          {
            alt: 'Water4Future — équipe ou hackathon',
            placeholderLabel: 'Water4Future',
          },
          {
            alt: 'Water4Future — pitch ou démo',
            placeholderLabel: 'Finale',
          },
        ],
      },
    ],
    professional: [
      {
        kind: 'internship' as const,
        title: 'Stage — développement web',
        organization: 'EHC · Casablanca',
        period: 'Été 2023',
        description:
          "Stage en développement web : contribution à une plateforme de gestion avec React.js, Express.js et MySQL — mise en pratique du full-stack en contexte professionnel.",
        images: [
          {
            alt: 'Stage EHC — bureau ou capture d’écran',
            placeholderLabel: 'Stage EHC',
          },
        ],
      },
      {
        kind: 'association' as const,
        title: 'Vice-présidente',
        organization: 'ZOOM University Club · FST Errachidia',
        period: '2025 — aujourd’hui',
        description:
          "Pilotage d’équipe, organisation d’événements tech et gestion de partenariats au sein du club universitaire — coordination, communication et mise en avant de la communauté étudiante.",
        images: [
          {
            alt: 'ZOOM Club — événement ou réunion',
            placeholderLabel: 'ZOOM Club',
          },
          {
            alt: 'ZOOM Club — vie associative',
            placeholderLabel: 'Événement',
          },
        ],
      },
    ],
  },
  projects: [
    {
      name: 'Intelligent Real-Time Access Control System',
      type: 'Academic Project',
      description:
        'Facial recognition system using Deep Neural Networks (CNN), optimized with real-time video processing via OpenCV and TensorFlow.',
      technologies: ['CNN', 'OpenCV', 'TensorFlow', 'Deep Learning'],
    },
    {
      name: 'AI Researcher Community Detection',
      type: 'Academic Project',
      description:
        'Modeled academic collaborations as graphs and implemented the GraphSAGE algorithm for community detection.',
      technologies: ['GraphSAGE', 'Graph ML', 'Python'],
    },
    {
      name: 'SmartLearn: E-learning Platform',
      type: 'Academic Project',
      description:
        'Full-stack e-learning platform with React.js and Spring Boot, MySQL database management.',
      technologies: ['React.js', 'Spring Boot', 'MySQL'],
    },
    {
      name: 'TaskMe: Task Management App',
      type: 'Academic Project',
      description:
        'Task-tracking app built with React.js, Express.js, and MongoDB.',
      technologies: ['React.js', 'Express.js', 'MongoDB'],
    },
  ],
}
