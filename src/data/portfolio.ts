export type PortfolioProject = {
  name: string
  type: string
  description: string
  technologies: readonly string[]
  /** URL complète de votre dépôt (ex. https://github.com/VOTRE_USER/mon-repo) */
  githubUrl?: string
}

export const portfolio = {
  profile_image: '/photos/ramadanai/national/participant.png',
  profile_name: 'Bouchra Oulmouk',
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
      "En parallèle des cours, j'investis dans les hackathons, les bootcamps et la vie associative : concourir, prototyper vite, et apprendre en équipe. Voici quelques moments marquants de mon parcours.",
    extracurricular: [
      {
        title: 'RamadanAI Hackathon',
        badge: '2024 · Prix Impact territorial & utilité publique',
        description:
          "Avec mon équipe, nous avons remporté la 3ᵉ place au hackathon régional RamadanAI (prix Impact territorial & utilité publique), puis été sélectionnées pour la phase nationale en tant que finalistes — un parcours intense autour de l'IA au service des territoires.",
        galleries: [
          {
            label: 'Phase régionale',
            images: [
              {
                src: '/photos/ramadanai/regional/prix-trophee.png',
                alt: 'Remise du prix au Ramadan IA Hackathon régional — trophée et certificat',
              },
              {
                src: '/photos/ramadanai/regional/equipe-prix.png',
                alt: 'Équipe lauréate du Ramadan IA Hackathon régional avec certificats et trophée',
              },
            ],
          },
          {
            label: 'Phase nationale',
            images: [
              {
                src: '/photos/ramadanai/national/equipe.png',
                alt: 'Équipe au Ramadan IA Hackathon National devant le backdrop officiel',
              },
              {
                src: '/photos/ramadanai/national/portrait.png',
                alt: 'Portrait au Ramadan IA Hackathon National — Ministère de la Transition Numérique',
              },
            ],
          },
        ],
      },
      {
        title: 'Hack’Days Ideation — Euromed Innovation Center',
        badge: '2026 · UEMF · Euromed Innovation Center',
        description:
          "Participation au programme Hack’Days Ideation 2026 à l’Euromed Innovation Center (Université Euroméditerranée de Fès), en collaboration avec Tamwilcom, InnovInvest et Bank of Africa — travail en équipe, idéation et livrables sous contrainte de temps dans un cadre professionnel.",
        images: [
          {
            src: '/photos/euromed/travail-bureau.png',
            alt: 'Travail sur ordinateur au sein de l’Euromed Innovation Center',
          },
          {
            src: '/photos/euromed/equipe.png',
            alt: 'Équipe du Hack’Days Ideation — Euromed Innovation Center',
          },
          {
            src: '/photos/euromed/certificat-hackdays.png',
            alt: 'Certificat de participation — Hack’Days Ideation Program 2026, Euromed Innovation Center',
            wide: true,
          },
        ],
      },
      {
        title: 'Water4Future — Hackathon international',
        badge: '2026 · Montpellier · UNESCO ICIREWARD',
        description:
          'Hackathon international sur l’eau et la durabilité : équipe finaliste en 2024. Participation à la compétition internationale étudiants à Montpellier en 2026 avec attestation du Centre UNESCO ICIREWARD.',
        images: [
          {
            src: '/photos/water4future/attestation-participation.png',
            alt: 'Attestation de participation — Hackathon Water4Future international competition students, UNESCO ICIREWARD, Montpellier',
            wide: true,
          },
        ],
      },
    ],
    professional: [
      {
        kind: 'internship' as const,
        title: 'Stage — EHC',
        organization: 'EHC (Experts Human Capital) · Casablanca',
        period: 'Juil. — août 2025',
        description:
          "Stage chez EHC (Experts Human Capital) : découverte de l’entreprise et missions de développement (attestation de septembre 2025).",
        images: [
          {
            src: '/photos/ehc/attestation-stage.png',
            alt: 'Attestation de stage — EHC Experts Human Capital, Bouchra Oulmouk',
            wide: true,
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
            src: '/photos/zoom/club-banner.png',
            alt: 'Représentation du ZOOM University Club — événement à la faculté',
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
  ] satisfies PortfolioProject[],
}
