/* ============== i18n System — Zero Dependencies ============== */
const i18n = {
  en: {
    brand: 'JJGM',
    'nav.about': 'ABOUT',
    'nav.experience': 'EXPERIENCE',
    'nav.skills': 'SKILLS',
    'nav.projects': 'PROJECTS',
    'nav.contact': 'CONTACT',
    'hero.label': 'Senior Software Engineer',
    'hero.subtitle': 'Engineering robust, scalable solutions',
    'hero.name_first': 'Juan Jose</span><span class="accent-letter">',
    'hero.name_last': 'Gomez',
    'hero.name_last2': 'Martinuzzo',
    'hero.location': 'Guarapari, Espírito Santo, Brazil',
    'hero.email': 'Jjgomez2k@gmail.com',
    'hero.desc': 'Senior Full Stack Developer with more than 5 years of experience building scalable web applications. Expert in .NET, Python, Java, Node.js, React, AWS and Testing.',
    'hero.cta_projects': 'VIEW PROJECTS',
    'hero.cta_contact': 'GET IN TOUCH',
    'hero.scroll': 'Scroll',
    'about.title': 'ABOUT',
    'about.subtitle': 'Full Stack Developer with experience building scalable applications and APIs for complex, high-demand environments.',
    'about.p1': 'Senior Full Stack Developer with experience in .NET, Python, Java, Node.js, React, AWS and Testing.',
    'about.p2': 'Proactive and determined, I bring passion for learning and collaborative spirit to contribute to team success.',
    'about.p3': 'Languages: English – Fluent, Spanish – Native, Portuguese – Fluent, Japanese – Low Intermediate.',
    'about.stat_yr': 'Years of experience',
    'about.stat_proj': 'Projects delivered',
    'about.stat_lang': 'Languages',
    'about.stat_techs': 'Key technologies',
    'exp.title': 'PROFESSIONAL EXPERIENCE',
    'exp.subtitle': 'A track record of technical impact and leadership.',
    'exp.j1_date': 'September 2025 – March 2026',
    'exp.j1_role': 'Software Engineer',
    'exp.j1_company': 'K2 Partnering Solutions (ExxonMobil), Brazil',
    'exp.j1_desc_li_1': 'Advanced data architecture and strategic business insights delivery',
    'exp.j1_desc_li_2': 'Robust and scalable ETL pipelines with .NET 9, Angular, Azure Functions, Service Bus, SQL Server',
    'exp.j1_desc_li_3': 'Automated data pipelines for efficient cross-system integration',
    'exp.j1_desc_li_4': 'SOLID principles applied for sustainable codebase; collaborated with multidisciplinary teams',
    'exp.j2_date': 'October 2024 – August 2025',
    'exp.j2_role': 'Senior Backend Engineer',
    'exp.j2_company': 'GFT Technologies, Brazil',
    'exp.j2_desc_li_1': 'Loan generation system from scratch for Crefisa (AAA credit institution), targeting retirees',
    'exp.j2_desc_li_2': '.NET 8, Jenkins, Oracle, OpenShift, REST/SOAP APIs',
    'exp.j2_desc_li_3': 'CI/CD pipelines using Jenkins for streamlined development',
    'exp.j2_desc_li_4': 'Event-driven design, AWS services (EC2, S3, RDS, Lambda), reusable components',
    'exp.j3_date': 'August 2023 – September 2024',
    'exp.j3_role': 'Senior Full Stack Developer',
    'exp.j3_company': 'SYSMAP Solutions, Brazil',
    'exp.j3_desc_li_1': 'High-performance admin platform for large-scale internet and TV operations',
    'exp.j3_desc_li_2': 'React/Redux frontend; Java 8/11 Spring Boot, JPA, Hibernate, Python backend',
    'exp.j3_desc_li_3': 'DDD principles, TDD, RabbitMQ, Redis, Kubernetes orchestration',
    'exp.j3_desc_li_4': 'Seamless platform integration with DevOps and network engineers',
    'exp.j4_date': 'August 2021 – July 2023',
    'exp.j4_role': 'Senior Full Stack Developer',
    'exp.j4_company': 'ACT Digital, Brazil',
    'exp.j4_desc_li_1': 'Funds Revenue Management platform at BTG Pactual full-stack ownership',
    'exp.j4_desc_li_2': 'React, Angular, TypeScript frontend; .NET, Java, Python backend',
    'exp.j4_desc_li_3': '30% faster transaction processing through optimized DB queries',
    'exp.j4_desc_li_4': 'AWS serverless migration; 20% reduction in manual workloads',
    'exp.j5_date': 'February 2021 - July 2021',
    'exp.j5_role': 'Lead Software Engineer',
    'exp.j5_company': 'Construix, Framingham, MA, USA',
    'exp.j5_desc_li_1': 'Spearheaded project management feature using Agile, exceeding deadlines by 20%',
    'exp.j5_desc_li_2': 'Implemented CI/CD with Cypress, cutting bug regressions by 40%',
    'exp.j5_desc_li_3': 'Optimized PostgreSQL stored procedures, achieving 30% faster server response',
    'exp.j5_desc_li_4': 'Mentored junior developers; dockerized services with Kubernetes',
    'exp.j6_date': 'February 2019 - February 2021',
    'exp.j6_role': 'Full Stack Developer',
    'exp.j6_company': "Otima Gestao, Guarapari, ES, Brazil",
    'exp.j6_desc_li_1': 'Built POS system for retail/restaurants; responsive Angular customer portal',
    'exp.j6_desc_li_2': 'Led team, implemented code reviews; reduced crashes by 50%, support tickets by 40%',
    'exp.j6_desc_li_3': 'Innovated with GraphQL for mobile applications; built tech-driven customer solutions',
    'exp.j6_desc_li_4': '.NET Framework 4.5, .NET Core, C#, SQL Server, Node.js, React, React Native, Redux',
    'skills.title': 'SKILLS & TOOLS',
    'skills.subtitle': 'Technical mastery across three core areas, refined through hands-on delivery.',
    'skills.cat1_name': 'Languages',
    'skills.cat1_skill1_name': 'C# / .NET',
    'skills.cat1_skill2_name': 'Python',
    'skills.cat1_skill3_name': 'Java',
    'skills.cat1_skill4_name': 'TypeScript / JavaScript',
    'skills.cat2_name': 'Infrastructure & Cloud',
    'skills.cat2_skill1_name': 'AWS / Azure / GCP',
    'skills.cat2_skill2_name': 'Docker / Kubernetes',
    'skills.cat2_skill3_name': 'CI/CD Pipelines',
    'skills.cat2_skill4_name': 'System Integration',
    'skills.cat3_name': 'Architecture & DevOps',
    'skills.cat3_skill1_name': 'Event-Driven Architecture',
    'skills.cat3_skill2_name': 'API Design',
    'skills.cat3_skill3_name': 'Database Design',
    'skills.cat3_skill4_name': 'Clean Code Principles',
    'projects.title': 'SELECTED PROJECTS',
    'projects.subtitle': 'Selected work demonstrating real impact and pragmatic engineering.',
    'proj1.title': 'E3 ETL — ExxonMobil',
    'proj1.desc': 'Extract-Transform-Load pipeline for Oil and derivative products, consolidating financial and non-financial information into the corporate Datawarehouse.',
    'proj1.tag1': 'ETL',
    'proj1.tag2': 'C#',
    'proj1.tag3': 'SQL',

    'proj2.title': 'Crefisa Loans',
    'proj2.desc': 'Financial software for managing credit loans across 19 regional divisions and 150 branches, including automated reporting and cash flow control.',
    'proj2.tag1': 'C#',
    'proj2.tag2': 'React',
    'proj2.tag3': 'MySQL',

    'proj3.title': 'Itau Financial Services',
    'proj3.desc': 'Development and integration of core banking services with complex payment gateway and financial product systems across multiple platforms.',
    'proj3.tag1': 'C#',
    'proj3.tag2': 'Python',
    'proj3.tag3': 'AWS',

    'proj4.title': 'Sysmap Management Platform',
    'proj4.desc': 'Full-stack development of a corporate management system handling over 450 employees across multiple branches.',
    'proj4.tag1': 'Java',
    'proj4.tag2': 'Python',
    'proj4.tag3': 'React',

    'proj5.title': 'BTG Pactual Fund Platform',
    'proj5.desc': 'Development and maintenance of digital investment platform for asset management, including portfolio and performance analytics.',
    'proj5.tag1': 'C#',
    'proj5.tag2': 'Python',
    'proj5.tag3': 'React',

    'proj6.title': 'Construix Integrations',
    'proj6.desc': 'Software development and workflow management for Construix integrations such as marketing, sales and staff.',
    'proj6.tag1': 'Python',
    'proj6.tag2': 'Node.js',
    'proj6.tag3': 'React',

    'proj7.title': 'Otima Gestao ERP',
    'proj7.desc': 'ERP system for supporting 150 clients in administration and operations.',
    'proj7.tag1': 'C#',
    'proj7.tag2': 'Node.js',
    'proj7.tag3': 'React',
    'contact.title': 'CONTACT',
    'contact.subtitle': 'Open to new projects and international opportunities.',
    'contact.contact_card_email_label': 'Email',
    'contact.contact_card_email_addr': 'Jjgomez2k@gmail.com',
    'contact.contact_card_linkedin_label': 'LinkedIn',
    'contact.contact_card_linkedin_link': 'linkedin.com/in/juan-gomez-martinuzzo',
    'contact.contact_card_github_label': 'GitHub',
    'contact.contact_card_github_link': 'github.com/juangomezmartinuzzo',
    'footer.text': 'Design and built with care.',

  },
  es: {
    brand: 'JJGM',
    'nav.skills': 'HABILIDADES',
    'nav.projects': 'PROYECTOS',
    'nav.contact': 'CONTACTO',
    'hero.label': 'Ingeniero de Software Senior',
    'hero.subtitle': 'Ingeniería de soluciones robustas y escalables',
    'hero.name_first': 'Juan Jose</span><span class="accent-letter">',
    'hero.name_last': 'Gomez',
    'hero.name_last2': 'Martinuzzo',
    'hero.location': 'Guarapari, Espírito Santo, Brasil',
    'hero.email': 'Jjgomez2k@gmail.com',
    'hero.desc': 'Desarrollador Full Stack Senior con más de 5 años de experiencia en aplicaciones web escalables. Especialista en .NET, Python, Java, Node.js, React, AWS y Testing.',
    'hero.cta_projects': 'VER PROYECTOS',
    'hero.cta_contact': 'CONTACTAR',
    'hero.scroll': 'Desplazar',
    'about.title': 'SOBRE MÍ',
    'about.subtitle': 'Desarrollador Full Stack con experiencia en aplicaciones escalables y APIs para entornos complejos y de alta demanda.',
    'about.p1': 'Desarrollador Full Stack Senior con experiencia en .NET, Python, Java, Node.js, React, AWS y Testing.',
    'about.p2': 'Proactivo y determinado, traigo pasión por el aprendizaje y espíritu colaborativo para contribuir al éxito del equipo.',
    'about.p3': 'Idiomas: inglés (fluido), español (nativo), portugués (fluido), japonés (nivel básico-intermedio).',
    'about.stat_yr': 'Años de experiencia',
    'about.stat_proj': 'Proyectos entregados',
    'about.stat_lang': 'Idiomas',
    'about.stat_techs': 'Tecnologías principales',
    'exp.title': 'EXPERIENCIA PROFESIONAL',
    'exp.subtitle': 'Un historial de impacto técnico y liderazgo.',
    'exp.j1_date': 'Septiembre 2025 – Marzo 2026',
    'exp.j1_role': 'Ingeniero de Software',
    'exp.j1_company': 'K2 Partnering Solutions (ExxonMobil), Brasil',
    'exp.j1_desc_li_1': 'Arquitectura de datos avanzada y entrega de insights estratégicos de negocio',
    'exp.j1_desc_li_2': 'Pipelines ETL robustos y escalables con .NET 9, Angular, Azure Functions, Service Bus, SQL Server',
    'exp.j1_desc_li_3': 'Pipelines de datos automatizados para integración eficiente entre sistemas',
    'exp.j1_desc_li_4': 'Principios SOLID aplicados para código sostenible; colaboración con equipos multidisciplinarios',
    'exp.j2_date': 'Octubre 2024 – Agosto 2025',
    'exp.j2_role': 'Ingeniero Backend Senior',
    'exp.j2_company': 'GFT Technologies, Brasil',
    'exp.j2_desc_li_1': 'Sistema de generación de préstamos desde cero para Crefisa (institución AAA), orientado a jubilados',
    'exp.j2_desc_li_2': '.NET 8, Jenkins, Oracle, OpenShift, APIs REST/SOAP',
    'exp.j2_desc_li_3': 'Pipelines CI/CD con Jenkins para desarrollo optimizado',
    'exp.j2_desc_li_4': 'Diseño orientado a eventos, servicios AWS (EC2, S3, RDS, Lambda), componentes reutilizables',
    'exp.j3_date': 'Agosto 2023 – Septiembre 2024',
    'exp.j3_role': 'Desarrollador Full Stack Senior',
    'exp.j3_company': 'SYSMAP Solutions, Brasil',
    'exp.j3_desc_li_1': 'Plataforma de administración de alto rendimiento para operaciones masivas de internet y TV',
    'exp.j3_desc_li_2': 'Frontend React/Redux; Backend Java 8/11 Spring Boot, JPA, Hibernate, Python',
    'exp.j3_desc_li_3': 'DDD, TDD, RabbitMQ, Redis, orquestación con Kubernetes',
    'exp.j3_desc_li_4': 'Integración perfecta con ingenieros DevOps y de red',
    'exp.j4_date': 'Agosto 2021 – Julio 2023',
    'exp.j4_role': 'Desarrollador Full Stack Senior',
    'exp.j4_company': 'ACT Digital, Brasil',
    'exp.j4_desc_li_1': 'Plataforma de gestión de rendimiento de fondos en BTG Pactual con propiedad full-stack',
    'exp.j4_desc_li_2': 'Frontend React, Angular, TypeScript; Backend .NET, Java, Python',
    'exp.j4_desc_li_3': '30% más rápido en procesamiento de transacciones con consultas OPTIMIZADAS',
    'exp.j4_desc_li_4': 'Migración serverless AWS; 20% menos trabajo manual',
    'exp.j5_date': 'Febrero 2021 - Julio 2021',
    'exp.j5_role': 'Ingeniero de Software Principal',
    'exp.j5_company': 'Construix, Framingham, MA, EE.UU.',
    'exp.j5_desc_li_1': 'Dirigí la función de gestión de proyectos con Agile, superando plazos en 20%',
    'exp.j5_desc_li_2': 'Implementé CI/CD con Cypress, reduciendo regresiones de bugs en 40%',
    'exp.j5_desc_li_3': 'Opticé procedimientos almacenados de PostgreSQL, logando respuesta del servidor 30% más rápida',
    'exp.j5_desc_li_4': 'Mentoré desarrolladores juniors; servicios dockerizados con Kubernetes',
    'exp.j6_date': 'Febrero 2019 - Febrero 2021',
    'exp.j6_role': 'Desarrollador Full Stack',
    'exp.j6_company': 'Ótima Gestão, Guarapari, ES, Brasil',
    'exp.j6_desc_li_1': 'Construí sistema POS para retail/restaurantes; portal Angular responsivo para clientes',
    'exp.j6_desc_li_2': 'Lideré equipo, implementé reviews de código; reduje crashes en 50%, tickets de soporte en 40%',
    'exp.j6_desc_li_3': 'Innové con GraphQL para aplicaciones móviles; construí soluciones para clientes impulsadas por tecnología',
    'exp.j6_desc_li_4': '.NET Framework 4.5, .NET Core, C#, SQL Server, Node.js, React, React Native, Redux',
    'skills.title': 'HABILIDADES & HERRAMIENTAS',
    'skills.subtitle': 'Dominio técnico en tres áreas principales, refinado con entrega práctica.',
    'skills.cat1_name': 'Lenguajes',
    'skills.cat1_skill1_name': 'C# / .NET',
    'skills.cat1_skill2_name': 'Python',
    'skills.cat1_skill3_name': 'Java',
    'skills.cat1_skill4_name': 'TypeScript / JavaScript',
    'skills.cat2_name': 'Infraestructura & Cloud',
    'skills.cat2_skill1_name': 'AWS / Azure / GCP',
    'skills.cat2_skill2_name': 'Docker / Kubernetes',
    'skills.cat2_skill3_name': 'Pipelines CI/CD',
    'skills.cat2_skill4_name': 'Integración de Sistemas',
    'skills.cat3_name': 'Arquitectura & DevOps',
    'skills.cat3_skill1_name': 'Arquitectura orientada a eventos',
    'skills.cat3_skill2_name': 'Diseño de APIs',
    'skills.cat3_skill3_name': 'Diseño de base de datos',
    'skills.cat3_skill4_name': 'Principios de Código Limpio',
    'projects.title': 'PROYECTOS SELECCIONADOS',
    'projects.subtitle': 'Trabajo seleccionado que demuestra impacto real e ingeniería pragmática.',
    'proj1.title': 'E3 ETL — ExxonMobil',
    'proj1.desc': 'Pipeline de extracción, transformación y carga (ETL) para petróleo y derivados, consolidando información financiera y no financiera en el Datawarehouse corporativo.',
    'proj1.tag1': 'ETL',
    'proj1.tag2': 'C#',
    'proj1.tag3': 'SQL',

    'proj2.title': 'Crefisa Loans',
    'proj2.desc': 'Software financiero para la gestión de préstamos de crédito en 19 divisiones regionales y 150 sucursales, incluyendo reportes automatizados y control de flujo de caja.',
    'proj2.tag1': 'C#',
    'proj2.tag2': 'React',
    'proj2.tag3': 'MySQL',

    'proj3.title': 'Itau Financial Services',
    'proj3.desc': 'Desarrollo e integración de servicios bancarios core con pasarelas de pago complejas y sistemas de productos financieros en múltiples plataformas.',
    'proj3.tag1': 'C#',
    'proj3.tag2': 'Python',
    'proj3.tag3': 'AWS',

    'proj4.title': 'Sysmap Management Platform',
    'proj4.desc': 'Desarrollo full-stack de un sistema de gestión corporativa con capacidad para más de 450 empleados en múltiples sedes.',
    'proj4.tag1': 'Java',
    'proj4.tag2': 'Python',
    'proj4.tag3': 'React',

    'proj5.title': 'BTG Pactual Fund Platform',
    'proj5.desc': 'Desarrollo y mantenimiento de una plataforma de inversión digital para gestión de activos, incluyendo análisis de cartera y rendimiento.',
    'proj5.tag1': 'C#',
    'proj5.tag2': 'Python',
    'proj5.tag3': 'React',

    'proj6.title': 'Construix Integrations',
    'proj6.desc': 'Desarrollo de software y gestión de flujos de trabajo para integraciones de Construix en marketing, ventas y personal.',
    'proj6.tag1': 'Python',
    'proj6.tag2': 'Node.js',
    'proj6.tag3': 'React',

    'proj7.title': 'Otima Gestao ERP',
    'proj7.desc': 'Sistema ERP para soporte de 150 clientes en administración y operaciones.',
    'proj7.tag1': 'C#',
    'proj7.tag2': 'Node.js',
    'proj7.tag3': 'React',
    'contact.title': 'CONTACTO',
    'contact.subtitle': 'Abierto a nuevos proyectos y oportunidades internacionales.',
    'contact.contact_card_email_label': 'Correo',
    'contact.contact_card_email_addr': 'Jjgomez2k@gmail.com',
    'contact.contact_card_linkedin_label': 'LinkedIn',
    'contact.contact_card_linkedin_link': 'linkedin.com/in/juan-gomez-martinuzzo',
    'contact.contact_card_github_label': 'GitHub',
    'contact.contact_card_github_link': 'github.com/juangomezmartinuzzo',
    'footer.text': 'Diseñado y construido con esmero.',
  },
  pt: {
    brand: 'JJGM',
    'nav.about': 'SOBRE',
    'nav.experience': 'EXPERIÊNCIA',
    'nav.skills': 'HABILIDADES',
    'nav.projects': 'PROJETOS',
    'nav.contact': 'CONTATO',
    'hero.label': 'Engenheiro de Software Sênior',
    'hero.subtitle': 'Criando soluções robustas e escaláveis',
    'hero.name_first': 'Juan Jose</span><span class="accent-letter">',
    'hero.name_last': 'Gomez',
    'hero.name_last2': 'Martinuzzo',
    'hero.location': 'Guarapari, Espírito Santo, Brasil',
    'hero.email': 'Jjgomez2k@gmail.com',
    'hero.desc': 'Desenvolvedor Full Stack Sênior com mais de 5 anos de experiência em aplicações web escaláveis. Especialista em .NET, Python, Java, Node.js, React, AWS e Testing.',
    'hero.cta_projects': 'VER PROJETOS',
    'hero.cta_contact': 'ENTRE EM CONTATO',
    'hero.scroll': 'Rolar',
    'about.title': 'SOBRE',
    'about.subtitle': 'Desenvolvedor Full Stack com experience em aplicações escaláveis e APIs para ambientes complexos e de alta demanda.',
    'about.p1': 'Desenvolvedor Full Stack Sênior com experiencia em .NET, Python, Java, Node.js, React, AWS e Testing.',
    'about.p2': 'Proativo e determinado, trago paixão pelo aprendizado e espírito colaborativo para contribuir com o sucesso da equipe.',
    'about.p3': 'Idiomas: inglês (fluente), espanhol (nativo), português (fluente), japonês (nível básico-intermediário).',
    'about.stat_yr': 'Anos de experiencia',
    'about.stat_proj': 'Projetos entregues',
    'about.stat_lang': 'Idiomas',
    'about.stat_techs': 'Tecnologias principais',
    'exp.title': 'EXPERIÊNCIA PROFISSIONAL',
    'exp.subtitle': 'Um historico de impacto técnico e liderança técnica.',
    'exp.j1_date': 'Setembro 2025 – Março 2026',
    'exp.j1_role': 'Engenheiro de Software',
    'exp.j1_company': 'K2 Partnering Solutions (ExxonMobil), Brasil',
    'exp.j1_desc_li_1': 'Arquitetura de dados avançada e entrega de insights estratégicos de negocio',
    'exp.j1_desc_li_2': 'Pipelines ETL robustos e escalaveis com .NET 9, Angular, Azure Functions, Service Bus, SQL Server',
    'exp.j1_desc_li_3': 'Pipelines de dados automatizados para integração eficiente entre sistemas',
    'exp.j1_desc_li_4': 'Principios SOLID aplicados para base de código sustentável; colaboração com equipes multidisciplinares',
    'exp.j2_date': 'Outubro 2024 – Agosto 2025',
    'exp.j2_role': 'Engenheiro Backend Sênior',
    'exp.j2_company': 'GFT Technologies, Brasil',
    'exp.j2_desc_li_1': 'Sistema de geração de emprestimos do zero para Crefisa (instituição AAA), voltado a aposentados',
    'exp.j2_desc_li_2': '.NET 8, Jenkins, Oracle, OpenShift, APIs REST/SOAP',
    'exp.j2_desc_li_3': 'Pipelines CI/CD com Jenkins para desenvolvimento otimizado',
    'exp.j2_desc_li_4': 'Design orientado a eventos, servicos AWS (EC2, S3, RDS, Lambda), componentes reutilizaveis',
    'exp.j3_date': 'Agosto 2023 – Setembro 2024',
    'exp.j3_role': 'Desenvolvedor Full Stack Sênior',
    'exp.j3_company': 'SYSMAP Solutions, Brasil',
    'exp.j3_desc_li_1': 'Plataforma de administração de alto desempenho para operacoes massivas de internet e TV',
    'exp.j3_desc_li_2': 'Frontend React/Redux; Backend Java 8/11 Spring Boot, JPA, Hibernate, Python',
    'exp.j3_desc_li_3': 'DDD, TDD, RabbitMQ, Redis, orquestração com Kubernetes',
    'exp.j3_desc_li_4': 'Integração perfeita com engenheiros DevOps e de rede',
    'exp.j4_date': 'Agosto 2021 – Julho 2023',
    'exp.j4_role': 'Desenvolvedor Full Stack Sênior',
    'exp.j4_company': 'ACT Digital, Brasil',
    'exp.j4_desc_li_1': 'Plataforma de gestão de receita de fundos no BTG Pactual com propriedade full-stack',
    'exp.j4_desc_li_2': 'Frontend React, Angular, TypeScript; Backend .NET, Java, Python',
    'exp.j4_desc_li_3': '30% mais rápido no processamento de transacoes com consultas OTIMIZADAS',
    'exp.j4_desc_li_4': 'Migracao serverless AWS; 20% menos de trabalho manual',
    'exp.j5_date': 'Fevereiro 2021 - Julho 2021',
    'exp.j5_role': 'Engenheiro de Software Líder',
    'exp.j5_company': 'Construix, Framingham, MA, EUA',
    'exp.j5_desc_li_1': 'Lideré o desenvolvimento do recurso de gerenciamento de projetos com Agile, excedendo prazos em 20%',
    'exp.j5_desc_li_2': 'Implementé CI/CD com Cypress, reduzindo regressão de bugs em 40%',
    'exp.j5_desc_li_3': 'Otenticé procedures stored de PostgreSQL, alcanzando resposta do servidor 30% máis rápida',
    'exp.j5_desc_li_4': 'Mentorou desenvolvedores júnior; servicios dockerizados con Kubernetes',
    'exp.j6_date': 'Fevereiro 2019 - Fevereiro 2021',
    'exp.j6_role': 'Desenvolvedor Full Stack',
    'exp.j6_company': 'Ótima Gestão, Guarapari, ES, Brasil',
    'exp.j6_desc_li_1': 'Criou sistema POS para varejo/restaurantes; portal Angular responsável para clientes',
    'exp.j6_desc_li_2': 'Liderou equipe, implementou code reviews; reduziu crashes em 50%, tickets de suporte em 40%',
    'exp.j6_desc_li_3': 'Inovou com GraphQL para aplicações mobile; construiu soluções para clientes impulsionadas por tecnologia',
    'exp.j6_desc_li_4': '.NET Framework 4.5, .NET Core, C#, SQL Server, Node.js, React, React Native, Redux',
    'skills.title': 'HABILIDADES & FERRAMENTAS',
    'skills.subtitle': 'Dominio técnico em três areas principais, refinado com entrega pratica.',
    'skills.cat1_name': 'Linguagens',
    'skills.cat1_skill1_name': 'C# / .NET',
    'skills.cat1_skill2_name': 'Python',
    'skills.cat1_skill3_name': 'Java',
    'skills.cat1_skill4_name': 'TypeScript / JavaScript',
    'skills.cat2_name': 'Infraestrutura & Cloud',
    'skills.cat2_skill1_name': 'AWS / Azure / GCP',
    'skills.cat2_skill2_name': 'Docker / Kubernetes',
    'skills.cat2_skill3_name': 'Pipelines CI/CD',
    'skills.cat2_skill4_name': 'Integracao de Sistemas',
    'skills.cat3_name': 'Arquitetura & DevOps',
    'skills.cat3_skill1_name': 'Arquitetura orientada a eventos',
    'skills.cat3_skill2_name': 'Design de APIs',
    'skills.cat3_skill3_name': 'Design de banco de dados',
    'skills.cat3_skill4_name': 'Principios de Codigo Limpo',
    'projects.title': 'PROJETOS SELECIONADOS',
    'projects.subtitle': 'Trabalho selecionado que demonstra impacto real e engenharia pragmatista.',
    'proj1.title': 'E3 ETL — ExxonMobil',
    'proj1.desc': 'Pipeline de extração, transformação e carga (ETL) para petróleo e derivados, consolidando informações financeiras e não financeiras no Datawarehouse corporativo.',
    'proj1.tag1': 'ETL',
    'proj1.tag2': 'C#',
    'proj1.tag3': 'SQL',

    'proj2.title': 'Crefisa Empréstimos',
    'proj2.desc': 'Software financeiro para gestão de empréstimos de crédito em 19 divisões regionais e 150 filiais, incluindo relatórios automatizados e controle de fluxo de caixa.',
    'proj2.tag1': 'C#',
    'proj2.tag2': 'React',
    'proj2.tag3': 'MySQL',

    'proj3.title': 'Itaú Financial Services',
    'proj3.desc': 'Desenvolvimento e integração de serviços bancários core com gateways de pagamento complexos e sistemas de produtos financeiros em múltiplas plataformas.',
    'proj3.tag1': 'C#',
    'proj3.tag2': 'Python',
    'proj3.tag3': 'AWS',

    'proj4.title': 'Sysmap Management Platform',
    'proj4.desc': 'Desenvolvimento full-stack de um sistema de gestão corporativa atendendo a mais de 450 funcionários em diversas unidades.',
    'proj4.tag1': 'Java',
    'proj4.tag2': 'Python',
    'proj4.tag3': 'React',

    'proj5.title': 'BTG Pactual Fund Platform',
    'proj5.desc': 'Desenvolvimento e manutenção de plataforma de investimento digital para gestão de ativos (asset management), incluindo análise de portfólio e performance.',
    'proj5.tag1': 'C#',
    'proj5.tag2': 'Python',
    'proj5.tag3': 'React',

    'proj6.title': 'Construix Integrations',
    'proj6.desc': 'Desenvolvimento de software e gestão de workflow para integrações da Construix em marketing, vendas e RH.',
    'proj6.tag1': 'Python',
    'proj6.tag2': 'Node.js',
    'proj6.tag3': 'React',

    'proj7.title': 'Otima Gestão ERP',
    'proj7.desc': 'Sistema ERP para suporte a 150 clientes nas áreas administrativa e operacional.',
    'proj7.tag1': 'C#',
    'proj7.tag2': 'Node.js',
    'proj7.tag3': 'React',
    'contact.title': 'CONTATO',
    'contact.subtitle': 'Disponivel para novos projetos e oportunidades internacionais.',
    'contact.contact_card_email_label': 'Email',
    'contact.contact_card_email_addr': 'Jjgomez2k@gmail.com',
    'contact.contact_card_linkedin_label': 'LinkedIn',
    'contact.contact_card_linkedin_link': 'linkedin.com/in/juan-gomez-martinuzzo',
    'contact.contact_card_github_label': 'GitHub',
    'contact.contact_card_github_link': 'github.com/juangomezmartinuzzo',
    'footer.text': 'Desenhado e construido com cuidado.',
  },

  jp: {
    brand: 'JJGM',
    'nav.about': '自己紹介',
    'nav.experience': '経験',
    'nav.skills': 'スキル',
    'nav.projects': 'プロジェクト',
    'nav.contact': 'お問い合わせ',
    'hero.label': 'シニアソフトウェアエンジニア',
    'hero.subtitle': '堅牢でスケーラブルなソリューションをエンジニアリング',
    'hero.name_first': 'Juan Jose</span><span class="accent-letter">',
    'hero.name_last': 'Gomez',
    'hero.name_last2': 'Martinuzzo',
    'hero.location': 'ブラジル・エスピリトサント州 Guarapari',
    'hero.email': 'Jjgomez2k@gmail.com',
    'hero.desc': '5年以上の経験を持つシニアフルスタック開発者。.NET、Python、Java、Node.js、React、AWS、テストのスペシャリスト。',
    'hero.cta_projects': 'プロジェクトを見る',
    'hero.cta_contact': 'お問い合わせ',
    'hero.scroll': 'スクロール',
    'about.title': '自己紹介',
    'about.subtitle': '複雑で高負荷な環境向けに、スケーラブルなアプリケーションとAPIの構築経験を持つフルスタック開発者',
    'about.p1': 'シニアフルスタック開発者。.NET、Python、Java、Node.js、React、AWS、テストの経験あり。',
    'about.p2': '能動的で確固たる意志を持ち、学びへの情熱と協調的な精神でチームの成功に貢献します。',
    'about.p3': '言語：英語（流暢）、スペイン語（ネイティブ）、ポルトガル語（流暢）、日本語（初級中級）',
    'about.stat_yr': '年の経験',
    'about.stat_proj': '納品したプロジェクト',
    'about.stat_lang': '言語',
    'about.stat_techs': '主要技術',
    'exp.title': '職務経験',
    'exp.subtitle': '技術的インパクトとリーダーシップの実績',
    'exp.j1_date': '2025年9月 – 2026年3月',
    'exp.j1_role': 'ソフトウェアエンジニア',
    'exp.j1_company': 'K2 Partnering Solutions (エクソンモービル)、ブラジル',
    'exp.j1_desc_li_1': '高度なデータアーキテクチャと戦略的ビジネスインサイトの提供',
    'exp.j1_desc_li_2': '.NET 9、Angular、Azure Functions、Service Bus、SQL ServerによるスケーラブルなETLパイプライン',
    'exp.j1_desc_li_3': 'システム間統合のための自動データパイプライン',
    'exp.j1_desc_li_4': 'SOLID原則の適用、多職種チームとの協力',
    'exp.j2_date': '2024年10月 – 2025年8月',
    'exp.j2_role': 'シニアバックエンドエンジニア',
    'exp.j2_company': 'GFT Technologies、ブラジル',
    'exp.j2_desc_li_1': 'AAA金融機関Crefisa向けのローン発行システムをゼロから開発（退職者向け）',
    'exp.j2_desc_li_2': '.NET 8、Jenkins、Oracle、OpenShift、REST/SOAP API',
    'exp.j2_desc_li_3': 'JenkinsによるCI/CDパイプラインの実装',
    'exp.j2_desc_li_4': 'イベント駆動設計、AWSサービス（EC2、S3、RDS、Lambda）、再利用可能コンポーネント',
    'exp.j3_date': '2023年8月 – 2024年9月',
    'exp.j3_role': 'シニアフルスタック開発者',
    'exp.j3_company': 'SYSMAP Solutions、ブラジル',
    'exp.j3_desc_li_1': '大規模ネット・TV運用向けの高性能管理プラットフォーム',
    'exp.j3_desc_li_2': 'React/Redux フロントエンド / Java 8/11 Spring Boot、JPA、Hibernate、Python バックエンド',
    'exp.j3_desc_li_3': 'DDD、TDD、RabbitMQ、Redis、Kubernetesオーケストレーション',
    'exp.j3_desc_li_4': 'DevOps・ネットワークエンジニアとのシームレスな統合協力',
    'exp.j4_date': '2021年8月 – 2023年7月',
    'exp.j4_role': 'シニアフルスタック開発者',
    'exp.j4_company': 'ACT Digital、ブラジル',
    'exp.j4_desc_li_1': 'BTG Pactualでのファンド収益管理プラットフォームのフルスタック所有',
    'exp.j4_desc_li_2': 'React、Angular、TypeScript フロント / .NET、Java、Python バックエンド',
    'exp.j4_desc_li_3': 'DBクエリ最適化により取引処理速度を30%向上',
    'exp.j4_desc_li_4': 'AWSサーバーレス移行、手動作業を20%削減',
    'exp.j5_date': '2021年2月 - 2021年7月',
    'exp.j5_role': 'リードソフトウエアエンジニア',
    'exp.j5_company': 'Construix、マサチューセッツ州Framingham、米国',
    'exp.j5_desc_li_1': 'アジャイル手法でプロジェクト管理機能を開発し、納期を20%以上に達成',
    'exp.j5_desc_li_2': 'CypressでCI/CDを実装、バグ回帰を40%削減',
    'exp.j5_desc_li_3': 'PostgreSQLストアドプロシージャーを最適化し、サーバー応答を30%高速化',
    'exp.j5_desc_li_4': 'ジャーニアドベロッパーをメンターリング; KubernetesでDocker化サービスを開発',
    'exp.j6_date': '2019年2月 - 2021年2月',
    'exp.j6_role': 'フルスタック開発者',
    'exp.j6_company': 'Ótima Gestão、エスピリトサント州Guarapari、ブラジル',
    'exp.j6_desc_li_1': '小売・飲食店向けPOSシステム構築; Angularのレスポンシブ顧客ポータル開発',
    'exp.j6_desc_li_2': 'チームを率い、コードレビューを実施; クラッシュ50%削減、サポートチケット40%削減',
    'exp.j6_desc_li_3': 'モバイルアプリ向けGraphQLでのイノベーション; 技術駆動の顧客ソリューションを開発',
    'exp.j6_desc_li_4': '.NET Framework 4.5、.NET Core、C#、SQL Server、Node.js、React、React Native、Redux',
    'skills.title': 'スキル & ツール',
    'skills.subtitle': '3つの核心領域での技術的 mastery',
    'skills.cat1_name': '言語',
    'skills.cat1_skill1_name': 'C# / .NET',
    'skills.cat1_skill2_name': 'Python',
    'skills.cat1_skill3_name': 'Java',
    'skills.cat1_skill4_name': 'TypeScript / JavaScript',
    'skills.cat2_name': 'インフラ & クラウド',
    'skills.cat2_skill1_name': 'AWS / Azure / GCP',
    'skills.cat2_skill2_name': 'Docker / Kubernetes',
    'skills.cat2_skill3_name': 'CI/CD パイプライン',
    'skills.cat2_skill4_name': 'システム統合',
    'skills.cat3_name': 'アーキテクチャ & DevOps',
    'skills.cat3_skill1_name': 'イベント駆動アーキテクチャ',
    'skills.cat3_skill2_name': 'API デザイン',
    'skills.cat3_skill3_name': 'データベース設計',
    'skills.cat3_skill4_name': 'クリーンコード原理',
    'projects.title': '選定プロジェクト',
    'projects.subtitle': '実際のインパクトを示した選定作品',
    'proj1.title': 'E3 ETL — エクソンモービル',
    'proj1.desc': '石油および派生製品のETLパイプライン。財務および非財務情報を企業のデータウェアハウスに統合。',
    'proj1.tag1': 'ETL',
    'proj1.tag2': 'C#',
    'proj1.tag3': 'SQL',

    'proj2.title': 'Crefisa ローン管理システム',
    'proj2.desc': '19の地域部門と150の支店における融資管理用金融ソフトウェア。自動レポート作成とキャッシュフロー制御を含む。',
    'proj2.tag1': 'C#',
    'proj2.tag2': 'React',
    'proj2.tag3': 'MySQL',

    'proj3.title': 'Itaú 金融サービス',
    'proj3.desc': 'コアバンキングサービスと複雑な決済ゲートウェイおよび金融商品システムのマルチプラットフォーム統合開発。',
    'proj3.tag1': 'C#',
    'proj3.tag2': 'Python',
    'proj3.tag3': 'AWS',

    'proj4.title': 'Sysmap 経営管理プラットフォーム',
    'proj4.desc': '複数の拠点で450名以上の従業員を管理する企業管理システムのフルスタック開発。',
    'proj4.tag1': 'Java',
    'proj4.tag2': 'Python',
    'proj4.tag3': 'React',

    'proj5.title': 'BTG Pactual ファンドプラットフォーム',
    'proj5.desc': '資産管理用デジタル投資プラットフォームの開発と保守。ポートフォリオ分析およびパフォーマンス分析を含む。',
    'proj5.tag1': 'C#',
    'proj5.tag2': 'Python',
    'proj5.tag3': 'React',

    'proj6.title': 'Construix 統合ソリューション',
    'proj6.desc': 'マーケティング、販売、人事などのConstruix統合に向けたソフトウェア開発およびワークフロー管理。',
    'proj6.tag1': 'Python',
    'proj6.tag2': 'Node.js',
    'proj6.tag3': 'React',

    'proj7.title': 'Otima Gestao ERP',
    'proj7.desc': '150社のクライアントの管理および運用をサポートするERPシステム。',
    'proj7.tag1': 'C#',
    'proj7.tag2': 'Node.js',
    'proj7.tag3': 'React',
    'contact.title': 'お問い合わせ',
    'contact.subtitle': '新規プロジェクトと国際チャンスに応募可能です。',
    'contact.contact_card_email_label': 'メール',
    'contact.contact_card_email_addr': 'Jjgomez2k@gmail.com',
    'contact.contact_card_linkedin_label': 'LinkedIn',
    'contact.contact_card_linkedin_link': 'linkedin.com/in/juan-gomez-martinuzzo',
    'contact.contact_card_github_label': 'GitHub',
    'contact.contact_card_github_link': 'github.com/juangomezmartinuzzo',
    'footer.text': '想いを込めて設計・構築しました。',
  },
};

/* ============== Language Switching ============== */
let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = i18n[lang][key];
    if (text) {
      el.innerHTML = text;
    }
  });

  document.documentElement.lang = lang;
}

/* ============== Theme Toggle ============== */
let currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
  updateIcon();
}

function updateIcon() {
  const sun = document.querySelector('.sun-icon');
  const moon = document.querySelector('.moon-icon');
  if (currentTheme === 'dark') {
    sun.style.display = 'block';
    moon.style.display = 'none';
  } else {
    sun.style.display = 'none';
    moon.style.display = 'block';
  }
}

/* ============== Stats Counter Animation ============== */
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.count);
        let current = 0;
        const increment = Math.ceil(target / 60);
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          entry.target.textContent = current + (entry.target.dataset.count === '2' ? '+' : '');
        }, 25);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

/* ============== Scroll Animations ============== */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.skill-category, .project-card, .contact-card, .timeline-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
          const fills = entry.target.querySelectorAll('.skill-fill');
          fills.forEach(fill => fill.style.width = fill.style.getPropertyValue('--level'));
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ============== Smooth Scroll for Internal Links ============== */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

/* ============== Init Everything ============== */
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  animateCounters();
  initScrollAnimations();
  updateIcon();

  document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
});
