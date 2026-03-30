export type Lang = "en" | "pt";

export const i18n = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
      hire: "Hire me",
    },
    hero: {
      greeting: "Hi, my name is",
      subtitle: "Software Engineer",
      description:
        "Engineer and student, always chasing the next thing to learn. Passionate about technology, sports, and a good film or series.",
      ctaPrimary: "View work",
      ctaSecondary: "Get in touch",
    },
    about: {
      section: "About",
      p1: "Hi! My name is Thiago São Pedro Oliveira and I am passionate about technology and everything it can provide. From an early age I was interested in computers and programming, which shaped my professional career.",
      p2: "I hold a Technical Certificate in Internet Computing from ETEC, a degree in Systems Analysis and Development from FATEC Jales, and I am currently enrolled as a special student in the Computer Science Post-Graduate program at UNESP IBILCE.",
      p3: "I currently work as a Full Stack developer at Enter Science, building scalable ecosystems with Laravel, Next.js and React Native for IT consulting clients.",
      p4: "I strive to grow continuously as a technology professional, working on challenging projects and delivering high-impact solutions.",
      labels: {
        location: "Location",
        company: "Current company",
        graduation: "Degree",
        postGrad: "Post-Grad",
        languages: "Languages",
        availability: "Availability",
      },
      values: {
        location: "Fernandópolis, SP — Brazil",
        company: "Enter Science",
        graduation: "FATEC Jales (2023 – 2025)",
        postGrad: "UNESP IBILCE (2026 – present)",
        languages: "English (proficient) · Spanish (basic)",
        availability: "Open to opportunities",
      },
    },
    experience: {
      section: "Experience",
      jobs: [
        {
          title: "Full Stack developer",
          company: "Enter Science",
          location: "São José do Rio Preto, SP (Remote)",
          period: "Jul 2025",
          end: "Present",
          description:
            "Development and maintenance of scalable ecosystems using Laravel on the back-end and Next.js for high-performance web interfaces. Building robust mobile apps with React Native for iOS and Android. Container architecture with Docker, RESTful API integration and automated deployment routines.",
          technologies: ["Laravel", "Next.js", "React Native", "Docker", "REST APIs"],
          current: true,
        },
        {
          title: "Administrative Intern",
          company: "ETEC Prof. Armando José Farinazzo",
          location: "Fernandópolis, SP",
          period: "Jun 2024",
          end: "Apr 2025",
          description:
            "Internship in the school's administrative office. Operated and maintained the NSA school management system and Windows Server environment. Created, edited and organized spreadsheets and administrative documents, and provided general IT support to the secretariat.",
          technologies: ["NSA (School System)", "Windows Server", "Excel", "IT Support"],
          current: false,
        },
        {
          title: "Marketing Intern",
          company: "Power Cube",
          location: "Fernandópolis, SP (Remote)",
          period: "Jan 2024",
          end: "Apr 2024",
          description:
            "Social media management and creation of digital content focused on engagement. Development of visual materials using design tools and copywriting techniques for campaigns. Support in digital marketing strategy planning and social media metrics analysis.",
          technologies: ["Social Media", "Digital Marketing", "Design"],
          current: false,
        },
      ],
    },
    skills: {
      section: "Skills",
      groups: [
        {
          label: "Languages",
          skills: ["PHP", "Python", "JavaScript", "TypeScript", "Java"],
        },
        {
          label: "Frameworks",
          skills: ["Laravel", "React", "Next.js", "React Native"],
        },
        {
          label: "Tools",
          skills: ["Git", "GitHub", "Docker", "VS Code", "PostgreSQL"],
        },
      ],
    },
    contact: {
      section: "Contact",
      heading: "Let's work together?",
      body: "I'm always open to new opportunities and interesting projects. If you have an idea you'd like to discuss or just want to talk about technology, feel free to reach out!",
      emailLabel: "Email",
      locationLabel: "Location",
      locationValue: "Fernandópolis, SP — Brazil",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      subjectPlaceholder: "Subject",
      messagePlaceholder: "Your message...",
      nameLabel: "Name",
      emailFieldLabel: "Email",
      subjectLabel: "Subject",
      messageLabel: "Message",
      submit: "Send message",
      sending: "Sending...",
      successToast: "Message sent successfully!",
    },
    footer: {
      copyright: "Thiago São Pedro Oliveira",
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      skills: "Habilidades",
      contact: "Contato",
      hire: "Contratar",
    },
    hero: {
      greeting: "Olá, meu nome é",
      subtitle: "Engenheiro de Software",
      description:
        "Engenheiro e estudante, sempre em busca do próximo aprendizado. Apaixonado por tecnologia, esportes e uma boa série ou filme.",
      ctaPrimary: "Ver trabalhos",
      ctaSecondary: "Entre em contato",
    },
    about: {
      section: "Sobre mim",
      p1: "Olá! Meu nome é Thiago São Pedro Oliveira e sou apaixonado por tecnologia e tudo o que ela pode proporcionar. Desde cedo me interessei em computadores e programação, e isso moldou minha trajetória profissional.",
      p2: "Sou formado Técnico em Informática para Internet pela ETEC Prof. Armando José Farinazzo, graduado em Análise e Desenvolvimento de Sistemas pela FATEC Jales, e atualmente curso Pós-Graduação em Ciência da Computação na UNESP IBILCE como aluno especial.",
      p3: "Atualmente trabalho como Engenheiro Full Stack na Enter Science, atuando com Laravel, Next.js e React Native no desenvolvimento de ecossistemas escaláveis para clientes de consultoria de TI.",
      p4: "Busco crescer continuamente como profissional, participando de projetos desafiadores e entregando soluções de alto impacto.",
      labels: {
        location: "Localização",
        company: "Empresa atual",
        graduation: "Graduação",
        postGrad: "Pós-Graduação",
        languages: "Idiomas",
        availability: "Disponibilidade",
      },
      values: {
        location: "Fernandópolis, SP — Brasil",
        company: "Enter Science",
        graduation: "FATEC Jales (2023 – 2025)",
        postGrad: "UNESP IBILCE (2026 – atual)",
        languages: "Inglês proficiente · Espanhol regular",
        availability: "Aberto a oportunidades",
      },
    },
    experience: {
      section: "Experiência",
      jobs: [
        {
          title: "Desenvolvedor Full Stack",
          company: "Enter Science",
          location: "São José do Rio Preto, SP (Remoto)",
          period: "Jul 2025",
          end: "Presente",
          description:
            "Desenvolvimento e sustentação de ecossistemas escaláveis com Laravel no back-end e Next.js para interfaces web de alta performance. Criação de aplicações mobile com React Native para iOS e Android. Arquitetura de containers com Docker, integração de APIs RESTful e automação de rotinas de deploy.",
          technologies: ["Laravel", "Next.js", "React Native", "Docker", "REST APIs"],
          current: true,
        },
        {
          title: "Estagiário Administrativo",
          company: "ETEC Prof. Armando José Farinazzo",
          location: "Fernandópolis, SP",
          period: "Jun 2024",
          end: "Abr 2025",
          description:
            "Estágio na secretaria da escola. Operação e manutenção do sistema de gestão escolar NSA e do ambiente Windows Server. Criação, edição e organização de planilhas e documentos administrativos, além de suporte de TI geral à secretaria.",
          technologies: ["NSA (Sistema Escolar)", "Windows Server", "Excel", "Suporte TI"],
          current: false,
        },
        {
          title: "Estagiário de Marketing",
          company: "Power Cube",
          location: "Fernandópolis, SP (Remoto)",
          period: "Jan 2024",
          end: "Abr 2024",
          description:
            "Gestão de redes sociais e criação de conteúdo digital focado em engajamento. Desenvolvimento de materiais visuais com ferramentas de design e técnicas de copywriting para campanhas. Planejamento de estratégias de marketing digital e análise de métricas.",
          technologies: ["Social Media", "Marketing Digital", "Design"],
          current: false,
        },
      ],
    },
    skills: {
      section: "Habilidades",
      groups: [
        {
          label: "Linguagens",
          skills: ["PHP", "Python", "JavaScript", "TypeScript", "Java"],
        },
        {
          label: "Frameworks",
          skills: ["Laravel", "React", "Next.js", "React Native"],
        },
        {
          label: "Ferramentas",
          skills: ["Git", "GitHub", "Docker", "VS Code", "PostgreSQL"],
        },
      ],
    },
    contact: {
      section: "Contato",
      heading: "Vamos trabalhar juntos?",
      body: "Estou sempre aberto a novas oportunidades e projetos interessantes. Se você tem uma ideia que gostaria de discutir ou apenas quer bater um papo sobre tecnologia, entre em contato!",
      emailLabel: "Email",
      locationLabel: "Localização",
      locationValue: "Fernandópolis, SP — Brasil",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "seu@email.com",
      subjectPlaceholder: "Assunto da mensagem",
      messagePlaceholder: "Sua mensagem...",
      nameLabel: "Nome",
      emailFieldLabel: "Email",
      subjectLabel: "Assunto",
      messageLabel: "Mensagem",
      submit: "Enviar mensagem",
      sending: "Enviando...",
      successToast: "Mensagem enviada com sucesso!",
    },
    footer: {
      copyright: "Thiago São Pedro Oliveira",
    },
  },
} as const;
