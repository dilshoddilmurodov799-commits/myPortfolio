import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type Language = 'en' | 'uz' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.home': 'Back to Home',
    'nav.language': 'Language',
    
    // Hero
    'hero.welcome': '👋 Welcome to my portfolio',
    'hero.name': 'Dilshod Dilmurodov',
    'hero.title': 'IT Technician | Junior Full-Stack Developer',
    'hero.description': 'Building innovative web applications and teaching the next generation of developers. From Tashkent, Uzbekistan 🇺🇿',
    'hero.viewWork': 'View My Work',
    'hero.downloadResume': 'Download Resume',
    'hero.downloadCV': 'Download CV',
    
    // About
  'about.title': 'About Me',

'about.subtitle':
  'Full-Stack JavaScript developer passionate about building impactful software, leading technical communities, and transforming ideas into scalable digital experiences.',

'about.journey': 'My Journey',

'about.journeyText':
  'From building full-stack applications to founding a 90+ member coding community, my journey has been driven by curiosity, continuous learning, and a passion for creating software that solves real-world problems. Along the way, I have mentored aspiring developers, collaborated on production-ready projects, and maintained academic excellence while constantly expanding my technical expertise.',

'about.fullStack': 'Full-Stack Development',

'about.fullStackDesc':
  'Building scalable web applications with React, Next.js, Node.js, SQL & modern technologies.',

'about.itTech': 'Community Leadership',

'about.itTechDesc':
  'Founder & President of Codenerd, mentoring 70+ students through hands-on programming.',

'about.techStack': 'Modern Tech Stack',

'about.techStackDesc':
  'JavaScript, TypeScript, React, Next.js, Node.js, MongoDB, SQL, Python & Git.',

'about.problemSolver': 'System Design',

'about.problemSolverDesc':
  'Designing practical, maintainable solutions with clean architecture and real-world scalability.',

'about.fastLearner': 'Continuous Growth',

'about.fastLearnerDesc':
  'Combining academic excellence with industry experience while constantly exploring new technologies.',
    
    // Skills
    'skills.title': 'Skills & Expertise',
    'skills.subtitle': 'A comprehensive toolkit of modern technologies and frameworks',
    'skills.frontend': 'Frontend Development',
    'skills.backend': 'Backend Development',
    'skills.database': 'Database & Storage',
    'skills.devops': 'DevOps & Tools',
    'skills.tools': 'Tools',
    'skills.languages': 'Programming Languages',
    'skills.webtech': 'Web Technologies',
    'skills.continuous': 'Continuous Learning',
    'skills.continuousText': 'Always expanding my skill set through online courses, certifications, and hands-on projects. Currently exploring AI/ML integration, blockchain development, and advanced cloud architecture.',
    
    // Experience
    'experience.title': 'Experience',
    'experience.subtitle': 'A timeline of professional growth, innovation, and hands-on development experience',
    'experience.achievements': 'Notable Achievements',
    'experience.achievement1': 'Successfully deployed and scaled multiple production applications serving thousands of users',
    'experience.achievement2': 'Optimized database queries resulting in 40% performance improvement',
    'experience.achievement3': 'Implemented CI/CD pipelines reducing deployment time by 60%',
    'experience.job1.title': 'Junior Full-Stack Developer',
    'experience.job1.company': 'Tech Innovations Ltd.',
    'experience.job1.location': 'Remote',
    'experience.job1.period': '2023 - Present',
    'experience.job1.desc': 'Developing and maintaining web applications using React, Node.js, and PostgreSQL. Collaborated with cross-functional teams to deliver high-quality software solutions.',
    'experience.job2.title': 'IT Technician',
    'experience.job2.company': 'Digital Solutions Inc.',
    'experience.job2.location': 'On-site',
    'experience.job2.period': '2022 - 2023',
    'experience.job2.desc': 'Provided technical support, system maintenance, and network troubleshooting. Managed IT infrastructure and ensured optimal performance of all technical systems.',
    'experience.job3.title': 'Web Development Internship',
    'experience.job3.company': 'StartUp Hub',
    'experience.job3.location': 'Hybrid',
    'experience.job3.period': '2021 - 2022',
    'experience.job3.desc': 'Assisted in building responsive web applications and RESTful APIs. Gained hands-on experience with modern development workflows and agile methodologies.',
    
    // Education
    'education.title': 'Education & Certifications',
    'education.subtitle': 'Academic foundation and professional certifications that fuel my expertise',
    'education.featured': 'Featured Certifications',
    'education.seeAll': 'See All Certificates',
    'education.achievements': 'Achievements',
    'education.coursework': 'Relevant Coursework',
    'education.certificates': 'All Certificates',
    'education.allCertificates': 'All Certificates',
    'education.featuredCerts': 'Featured Certificates',
    
    // Portfolio
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'A collection of projects showcasing full-stack development and creative problem-solving',
    'portfolio.viewAll': 'View All Projects on GitHub',
    'portfolio.allProjects': 'All Projects',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': "Let's collaborate on your next project",
    'contact.send': 'Send a Message',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.sendButton': 'Send Message',
    'contact.connect': 'Connect With Me',
    
    // Footer
    'footer.quick': 'Quick Links',
    'footer.social': 'Social Media',
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with React & Tailwind CSS',
    
    // Certificates
    'certificates.title': 'All Certificates',
    'certificates.subtitle': 'A comprehensive collection of my professional certifications and achievements',
    'certificates.back': 'Back to Home',
    'certificates.featured': 'Featured',
    'certificates.professionalCerts': 'Professional certifications and achievements',
    'certificates.featuredCertificates': 'Featured Certificates',
    'certificates.downloadCert': 'Download Certificate',
    'certificates.allCerts': 'All Certificates',
    'certificates.downloading': 'Downloading',
    
    // Resume
    'resume.title': 'Resume / CV',
    'resume.download': 'Download PDF',
    'resume.company1': 'Tech Innovations Ltd.',
    'resume.company2': 'StartupHub Inc.',
    'resume.location1': 'Remote',
    'resume.location2': 'Remote',
    'resume.period1': '2023 - Present',
    'resume.period2': '2022 - 2023',
    'resume.jobTitle1': 'Junior Full-Stack Developer',
    'resume.jobTitle2': 'Frontend Developer Intern',
    'resume.job1desc1': 'Developed and maintained responsive web applications using React.js and Node.js',
    'resume.job1desc2': 'Collaborated with cross-functional teams to deliver high-quality software solutions',
    'resume.job1desc3': 'Implemented RESTful APIs and integrated third-party services',
    'resume.job2desc1': 'Built responsive user interfaces using modern frontend frameworks',
    'resume.job2desc2': 'Participated in code reviews and learned best practices',
    'resume.job2desc3': 'Contributed to improving application performance and user experience',
    'resume.degree': 'Bachelor of Science in Computer Science',
    'resume.university': 'Tech University',
    'resume.universityLocation': 'City, Country',
    'resume.gpa': 'GPA: 3.8/4.0',
    'resume.eduPeriod': '2020 - 2024',
    'resume.honor1': "Dean's List (All Semesters)",
    'resume.honor2': 'Outstanding Student Award',
    'resume.honor3': 'Academic Excellence Scholarship',
    'resume.project1': 'E-Commerce Platform',
    'resume.project1desc': 'Full-stack online marketplace with payment integration and real-time analytics.',
    'resume.project2': 'Task Management App',
    'resume.project2desc': 'Collaborative project management tool with real-time updates and team features.',
    'resume.project3': 'Weather Dashboard',
    'resume.project3desc': 'Interactive weather app with forecasts, maps, and location-based services.',
    'resume.project4': 'Blog Platform',
    'resume.project4desc': 'Modern blogging platform with markdown support and SEO optimization.',
    'resume.back': 'Back to Home',
    
    // Projects
    'projects.title': 'All Projects',
    'projects.subtitle': 'A showcase of my development work and contributions',
    'projects.back': 'Back to Home',
    'projects.demo': 'Demo',
    'projects.code': 'Code',
  },
  uz: {
    // Navigation
    'nav.about': 'Men Haqimda',
    'nav.skills': 'Malakalarim',
    'nav.experience': 'Tajriba',
    'nav.education': 'Ta\'lim',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Aloqa',
    'nav.menu': 'Menyu',
    'nav.home': 'Bosh Sahifaga',
    'nav.language': 'Til',
    
    // Hero
    'hero.welcome': '👋 Portfoliomga xush kelibsiz',
    'hero.name': 'Dilshod Dilmurodov',
    'hero.title': 'IT Texnik | Kichik Full-Stack Dasturchi',
    'hero.description': 'Innovatsion veb-ilovalar yaratish va keyingi avlod dasturchilarini o\'qitish. Toshkent, O\'zbekiston 🇺🇿',
    'hero.viewWork': 'Ishlarimni Ko\'rish',
    'hero.downloadResume': 'Rezyumeni Yuklab Olish',
    'hero.downloadCV': 'Rezyumeni Yuklab Olish',
    
    // About
    'about.title': 'Men haqimda',

'about.subtitle':
  'Full-Stack JavaScript dasturchisi sifatida zamonaviy veb-ilovalar yarataman, IT hamjamiyatlarini rivojlantiraman va g‘oyalarni real raqamli mahsulotlarga aylantiraman.',

'about.journey': 'Mening yo‘lim',

'about.journeyText':
  'Dasturlashdagi yo‘lim muammolarni yechishga bo‘lgan qiziqishdan boshlandi. Vaqt o‘tishi bilan to‘liq funksional veb-ilovalar yaratishdan tashqari, 90 nafardan ortiq a’zoga ega Codenerd dasturlash hamjamiyatiga asos soldim. Bugun amaliy dasturlash tajribasi, mentorlik va uzluksiz o‘rganishni uyg‘unlashtirib, zamonaviy dasturiy yechimlar ishlab chiqaman.',

'about.fullStack': 'Full-Stack dasturlash',

'about.fullStackDesc':
  'React, Next.js, Node.js, SQL va boshqa zamonaviy texnologiyalar yordamida kengaytiriladigan veb-ilovalar yarataman.',

'about.itTech': 'IT hamjamiyati yetakchisi',

'about.itTechDesc':
  '90+ a’zoga ega Codenerd hamjamiyati asoschisi va prezidenti, 70+ dasturchiga mentorlik qilganman.',

'about.techStack': 'Texnologiyalar',

'about.techStackDesc':
  'JavaScript, TypeScript, React, Next.js, Node.js, MongoDB, SQL, Python va Git.',

'about.problemSolver': 'Tizim arxitekturasi',

'about.problemSolverDesc':
  'Ishonchli, kengaytiriladigan va qo‘llab-quvvatlash oson bo‘lgan dasturiy yechimlarni loyihalash.',

'about.fastLearner': 'Doimiy rivojlanish',

'about.fastLearnerDesc':
  'Nazariy bilimlarni amaliy tajriba bilan uyg‘unlashtirib, yangi texnologiyalarni muntazam o‘zlashtiraman.',
    
    // Skills
    'skills.title': 'Malakalar va Tajriba',
    'skills.subtitle': 'Zamonaviy texnologiyalar va freymvorklarning to\'liq to\'plami',
    'skills.frontend': 'Frontend Dasturlash',
    'skills.backend': 'Backend Dasturlash',
    'skills.database': 'Ma\'lumotlar Bazasi',
    'skills.devops': 'DevOps va Vositalar',
    'skills.tools': 'Vositalar',
    'skills.languages': 'Dasturlash Tillari',
    'skills.webtech': 'Veb Texnologiyalar',
    'skills.continuous': 'Doimiy O\'rganish',
    'skills.continuousText': 'Onlayn kurslar, sertifikatlar va amaliy loyihalar orqali malakalarimni doimo kengaytiraman. Hozirda AI/ML integratsiyasi, blokcheyn dasturlash va ilg\'or bulut arxitekturasini o\'rganyapman.',
    
    // Experience
    'experience.title': 'Tajriba',
    'experience.subtitle': 'Professional o\'sish, innovatsiya va amaliy dasturlash tajribasining vaqt chizig\'i',
    'experience.achievements': 'Muhim Yutuqlar',
    'experience.achievement1': 'Minglab foydalanuvchilarga xizmat ko\'rsatadigan bir nechta ishlab chiqarish ilovalarini muvaffaqiyatli joylashtirdim',
    'experience.achievement2': 'Ma\'lumotlar bazasi so\'rovlarini optimallashtirdim, natijada 40% samaradorlik oshdi',
    'experience.achievement3': 'CI/CD quvurlarini joriy qildim, joylashtirish vaqtini 60% qisqartirdim',
    'experience.job1.title': 'Junior Full-Stack Dasturchi',
    'experience.job1.company': 'Tech Innovations Ltd.',
    'experience.job1.location': 'Masofaviy',
    'experience.job1.period': '2023 - Hozir',
    'experience.job1.desc': 'React, Node.js va PostgreSQL yordamida veb ilovalarni ishlab chiqdim va qo\'llab-quvvatladim. Yuqori sifatli dasturiy yechimlarni taqdim etish uchun turli bo\'limlar bilan hamkorlik qildim.',
    'experience.job2.title': 'IT Texnik',
    'experience.job2.company': 'Digital Solutions Inc.',
    'experience.job2.location': 'Ofisda',
    'experience.job2.period': '2022 - 2023',
    'experience.job2.desc': 'Texnik qo\'llab-quvvatlash, tizimni saqlash va tarmoq muammolarini hal qildim. IT infratuzilmasini boshqardim va barcha texnik tizimlarning optimal ishlashini ta\'minladim.',
    'experience.job3.title': 'Veb Dasturlash Stajyorligi',
    'experience.job3.company': 'StartUp Hub',
    'experience.job3.location': 'Gibrid',
    'experience.job3.period': '2021 - 2022',
    'experience.job3.desc': 'Responsiv veb ilovalar va RESTful API-larni yaratishda yordam berdim. Zamonaviy dasturlash jarayonlari va agile metodologiyalar bilan amaliy tajriba oldim.',
    
    // Education
    'education.title': 'Ta\'lim va Sertifikatlar',
    'education.subtitle': 'Tajribamni rivojlantiradigan akademik asos va professional sertifikatlar',
    'education.featured': 'Asosiy Sertifikatlar',
    'education.seeAll': 'Barcha Sertifikatlarni Ko\'rish',
    'education.achievements': 'Yutuqlar',
    'education.coursework': 'Tegishli Kurslar',
    'education.certificates': 'Barcha Sertifikatlar',
    'education.allCertificates': 'Barcha Sertifikatlar',
    'education.featuredCerts': 'Asosiy Sertifikatlar',
    
    // Portfolio
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Full-stack dasturlash va ijodiy muammo yechishni namoyish etuvchi loyihalar',
    'portfolio.viewAll': 'GitHubda Barcha Loyihalarni Ko\'rish',
    'portfolio.allProjects': 'Barcha Loyihalar',
    
    // Contact
    'contact.title': 'Bog\'lanish',
    'contact.subtitle': 'Keling, keyingi loyihangizda hamkorlik qilaylik',
    'contact.send': 'Xabar Yuborish',
    'contact.name': 'Ism',
    'contact.email': 'Email',
    'contact.message': 'Xabar',
    'contact.sendButton': 'Yuborish',
    'contact.connect': 'Men Bilan Bog\'lanish',
    
    // Footer
    'footer.quick': 'Tezkor Havolalar',
    'footer.social': 'Ijtimoiy Tarmoqlar',
    'footer.rights': 'Barcha huquqlar himoyalangan.',
    'footer.built': 'React va Tailwind CSS bilan yaratilgan',
    
    // Certificates
    'certificates.title': 'Barcha Sertifikatlar',
    'certificates.subtitle': 'Professional sertifikatlar va yutuqlarimning to\'liq to\'plami',
    'certificates.back': 'Bosh Sahifaga',
    'certificates.featured': 'Asosiy',
    'certificates.professionalCerts': 'Professional sertifikatlar va yutuqlar',
    'certificates.featuredCertificates': 'Asosiy Sertifikatlar',
    'certificates.downloadCert': 'Sertifikatni Yuklab Olish',
    'certificates.allCerts': 'Barcha Sertifikatlar',
    'certificates.downloading': 'Yuklab olinmoqda',
    
    // Resume
    'resume.title': 'Rezyume / CV',
    'resume.download': 'PDF Yuklab Olish',
    'resume.company1': 'Tech Innovations Ltd.',
    'resume.company2': 'StartupHub Inc.',
    'resume.location1': 'Masofaviy',
    'resume.location2': 'Masofaviy',
    'resume.period1': '2023 - Hozir',
    'resume.period2': '2022 - 2023',
    'resume.jobTitle1': 'Junior Full-Stack Dasturchi',
    'resume.jobTitle2': 'Frontend Dasturchi Stajyor',
    'resume.job1desc1': 'React.js va Node.js yordamida responsiv veb ilovalarni ishlab chiqdim va qo\'llab-quvvatladim',
    'resume.job1desc2': 'Yuqori sifatli dasturiy ta\'minot yechimlarini taqdim etish uchun turli bo\'limlar bilan hamkorlik qildim',
    'resume.job1desc3': 'RESTful API-larni amalga oshirdim va uchinchi tomon xizmatlarini integatsiya qildim',
    'resume.job2desc1': 'Zamonaviy frontend freymvorklar yordamida responsiv foydalanuvchi interfeyslarini yaratdim',
    'resume.job2desc2': 'Kod ko\'rib chiqishda ishtirok etdim va eng yaxshi amaliyotlarni o\'rgandim',
    'resume.job2desc3': 'Ilova ishlashi va foydalanuvchi tajribasini yaxshilashga hissa qo\'shdim',
    'resume.degree': 'Kompyuter fanlari bo\'yicha bakalavr',
    'resume.university': 'Texnologiya Universiteti',
    'resume.universityLocation': 'Shahar, Mamlakat',
    'resume.gpa': 'O\'rtacha ball: 3.8/4.0',
    'resume.eduPeriod': '2020 - 2024',
    'resume.honor1': 'Dekan ro\'yxati (Barcha semestrlar)',
    'resume.honor2': 'A\'lo talaba mukofoti',
    'resume.honor3': 'Akademik mukammallik stipendiyasi',
    'resume.project1': 'Elektron Tijorat Platformasi',
    'resume.project1desc': 'To\'lov integratsiyasi va real vaqt tahlili bilan to\'liq funksional onlayn bozor.',
    'resume.project2': 'Vazifalarni Boshqarish Ilovasi',
    'resume.project2desc': 'Real vaqt yangilanishlari va jamoa funksiyalari bilan hamkorlikdagi loyiha boshqaruv vositasi.',
    'resume.project3': 'Ob-havo Paneli',
    'resume.project3desc': 'Prognozlar, xaritalar va joylashuv asosidagi xizmatlar bilan interaktiv ob-havo ilovasi.',
    'resume.project4': 'Blog Platformasi',
    'resume.project4desc': 'Markdown qo\'llab-quvvatlashi va SEO optimizatsiyasi bilan zamonaviy blog platformasi.',
    'resume.back': 'Bosh Sahifaga',
    
    // Projects
    'projects.title': 'Barcha Loyihalar',
    'projects.subtitle': 'Dasturlash ishlarim va hissalarimning ko\'rgazmasi',
    'projects.back': 'Bosh Sahifaga',
    'projects.demo': 'Demo',
    'projects.code': 'Kod',
  },
  ru: {
    // Navigation
    'nav.about': 'Обо мне',
    'nav.skills': 'Навыки',
    'nav.experience': 'Опыт',
    'nav.education': 'Образование',
    'nav.portfolio': 'Портфолио',
    'nav.contact': 'Контакты',
    'nav.menu': 'Меню',
    'nav.home': 'На главную',
    'nav.language': 'Язык',
    
    // Hero
    'hero.welcome': '👋 Добро пожаловать в моё портфолио',
    'hero.name': 'Дильшод Дильмуродов',
    'hero.title': 'IT-специалист | Младший Full-Stack разработчик',
    'hero.description': 'Создаю инновационные веб-приложения и обучаю следующее поколение разработчиков. Из Ташкента, Узбекистан 🇺🇿',
    'hero.viewWork': 'Посмотреть работы',
    'hero.downloadResume': 'Скачать резюме',
    'hero.downloadCV': 'Скачать резюме',
    
    // About
    'about.title': 'Обо мне',

'about.subtitle':
  'Full-Stack JavaScript разработчик, создающий масштабируемые веб-приложения, развивающий IT-сообщество и воплощающий идеи в современные цифровые продукты.',

'about.journey': 'Мой путь',

'about.journeyText':
  'Мой путь начался с интереса к программированию и стремления решать реальные задачи. Со временем я перешёл от разработки полноценных веб-приложений к созданию собственного сообщества программистов с более чем 90 участниками. Сегодня я совмещаю практический опыт разработки, наставничество и постоянное профессиональное развитие, создавая современные программные решения.',

'about.fullStack': 'Full-Stack разработка',

'about.fullStackDesc':
  'Создание масштабируемых веб-приложений с использованием React, Next.js, Node.js, SQL и современных технологий.',

'about.itTech': 'Лидерство в IT',

'about.itTechDesc':
  'Основатель и президент сообщества Codenerd, наставник для более чем 70 начинающих разработчиков.',

'about.techStack': 'Современный стек',

'about.techStackDesc':
  'JavaScript, TypeScript, React, Next.js, Node.js, MongoDB, SQL, Python и Git.',

'about.problemSolver': 'Архитектура систем',

'about.problemSolverDesc':
  'Проектирование надёжных, масштабируемых и удобных в сопровождении программных решений.',

'about.fastLearner': 'Непрерывное развитие',

'about.fastLearnerDesc':
  'Постоянно совершенствую навыки, сочетая академические знания с практическим опытом разработки.',
    
    // Skills
    'skills.title': 'Навыки и опыт',
    'skills.subtitle': 'Комплексный набор современных технологий и фреймворков',
    'skills.frontend': 'Frontend разработка',
    'skills.backend': 'Backend разработка',
    'skills.database': 'Базы данных',
    'skills.devops': 'DevOps и инструменты',
    'skills.tools': 'Инструменты',
    'skills.languages': 'Языки программирования',
    'skills.webtech': 'Веб-технологии',
    'skills.continuous': 'Непрерывное обучение',
    'skills.continuousText': 'Постоянно расширяю свои навыки через онлайн-курсы, сертификации и практические проекты. В настоящее время изучаю интеграцию AI/ML, разработку блокчейна и продвинутую облачную архитектуру.',
    
    // Experience
    'experience.title': 'Опыт работы',
    'experience.subtitle': 'Временная шкала профессионального роста, инноваций и практического опыта разработки',
    'experience.achievements': 'Основные достижения',
    'experience.achievement1': 'Успешно развернул и масштабировал несколько производственных приложений, обслуживающих тысячи пользователей',
    'experience.achievement2': 'Оптимизировал запросы к базе данных, что привело к повышению производительности на 40%',
    'experience.achievement3': 'Внедрил CI/CD конвейеры, сократив время развертывания на 60%',
    'experience.job1.title': 'Junior Full-Stack Разработчик',
    'experience.job1.company': 'Tech Innovations Ltd.',
    'experience.job1.location': 'Удаленно',
    'experience.job1.period': '2023 - Настоящее время',
    'experience.job1.desc': 'Разработка и поддержка веб-приложений с использованием React, Node.js и PostgreSQL. Сотрудничество с кросс-функциональными командами для создания высококачественных программных решений.',
    'experience.job2.title': 'IT Техник',
    'experience.job2.company': 'Digital Solutions Inc.',
    'experience.job2.location': 'В офисе',
    'experience.job2.period': '2022 - 2023',
    'experience.job2.desc': 'Предоставление технической поддержки, обслуживание систем и устранение сетевых неполадок. Управление ИТ-инфраструктурой и обеспечение оптимальной работы всех технических систем.',
    'experience.job3.title': 'Стажировка Веб-Разработчика',
    'experience.job3.company': 'StartUp Hub',
    'experience.job3.location': 'Гибрид',
    'experience.job3.period': '2021 - 2022',
    'experience.job3.desc': 'Помощь в создании адаптивных веб-приложений и RESTful API. Получение практического опыта с современными рабочими процессами разработки и гибкими методологиями.',
    
    // Education
    'education.title': 'Образование и сертификаты',
    'education.subtitle': 'Академическая база и профессиональные сертификаты, которые подпитывают мой опыт',
    'education.featured': 'Избранные сертификаты',
    'education.seeAll': 'Смотреть все сертификаты',
    'education.achievements': 'Достижения',
    'education.coursework': 'Соответствующие курсы',
    'education.certificates': 'Все сертификаты',
    'education.allCertificates': 'Все сертификаты',
    'education.featuredCerts': 'Избранные сертификаты',
    
    // Portfolio
    'portfolio.title': 'Портфолио',
    'portfolio.subtitle': 'Коллекция проектов, демонстрирующих full-stack разработку и творческое решение проблем',
    'portfolio.viewAll': 'Все проекты на GitHub',
    'portfolio.allProjects': 'Все проекты',
    
    // Contact
    'contact.title': 'Свяжитесь со мной',
    'contact.subtitle': 'Давайте сотрудничать над вашим следующим проектом',
    'contact.send': 'Отправить сообщение',
    'contact.name': 'Имя',
    'contact.email': 'Email',
    'contact.message': 'Сообщение',
    'contact.sendButton': 'Отправить',
    'contact.connect': 'Связаться со мной',
    
    // Footer
    'footer.quick': 'Быстрые ссылки',
    'footer.social': 'Социальные сети',
    'footer.rights': 'Все права защищены.',
    'footer.built': 'Создано с помощью React и Tailwind CSS',
    
    // Certificates
    'certificates.title': 'Все сертификаты',
    'certificates.subtitle': 'Полная коллекция моих профессиональных сертификатов и достижений',
    'certificates.back': 'На главную',
    'certificates.featured': 'Избранное',
    'certificates.professionalCerts': 'Профессиональные сертификаты и достижения',
    'certificates.featuredCertificates': 'Избранные сертификаты',
    'certificates.downloadCert': 'Скачать сертификат',
    'certificates.allCerts': 'Все сертификаты',
    'certificates.downloading': 'Загрузка',
    
    // Resume
    'resume.title': 'Резюме / CV',
    'resume.download': 'Скачать PDF',
    'resume.company1': 'Tech Innovations Ltd.',
    'resume.company2': 'StartupHub Inc.',
    'resume.location1': 'Удаленно',
    'resume.location2': 'Удаленно',
    'resume.period1': '2023 - Настоящее время',
    'resume.period2': '2022 - 2023',
    'resume.jobTitle1': 'Junior Full-Stack Разработчик',
    'resume.jobTitle2': 'Стажер Frontend Разработчик',
    'resume.job1desc1': 'Разрабатывал и поддерживал адаптивные веб-приложения с использованием React.js и Node.js',
    'resume.job1desc2': 'Сотрудничал с кросс-функциональными командами для создания качественных программных решений',
    'resume.job1desc3': 'Реализовал RESTful API и интегрировал сторонние сервисы',
    'resume.job2desc1': 'Создавал адаптивные пользовательские интерфейсы с использованием современных фреймворков',
    'resume.job2desc2': 'Участвовал в ревью кода и изучал лучшие практики',
    'resume.job2desc3': 'Внес вклад в улучшение производительности приложения и пользовательского опыта',
    'resume.degree': 'Бакалавр компьютерных наук',
    'resume.university': 'Технологический Университет',
    'resume.universityLocation': 'Город, Страна',
    'resume.gpa': 'Средний балл: 3.8/4.0',
    'resume.eduPeriod': '2020 - 2024',
    'resume.honor1': 'Список декана (Все семестры)',
    'resume.honor2': 'Награда выдающегося студента',
    'resume.honor3': 'Стипендия за академическое превосходство',
    'resume.project1': 'Платформа электронной коммерции',
    'resume.project1desc': 'Полнофункциональный онлайн-магазин с интеграцией платежей и аналитикой в реальном времени.',
    'resume.project2': 'Приложение для управления задачами',
    'resume.project2desc': 'Инструмент совместного управления проектами с обновлениями в реальном времени и командными функциями.',
    'resume.project3': 'Панель погоды',
    'resume.project3desc': 'Интерактивное погодное приложение с прогнозами, картами и службами на основе местоположения.',
    'resume.project4': 'Платформа для блогов',
    'resume.project4desc': 'Современная платформа для блогов с поддержкой markdown и SEO-оптимизацией.',
    'resume.back': 'На главную',
    
    // Projects
    'projects.title': 'Все проекты',
    'projects.subtitle': 'Витрина моих разработок и вкладов',
    'projects.back': 'На главную',
    'projects.demo': 'Демо',
    'projects.code': 'Код',
  },


};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
