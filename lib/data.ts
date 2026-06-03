export type Locale = 'sk' | 'en';

export interface CompanyCooperation {
  name: string;
  url: string;
  logo: string;
  logoEn?: string;
  description: Record<Locale, string>;
}

export const companyCooperations: CompanyCooperation[] = [
  {
    name: 'SEN Systems',
    url: 'https://sensystems.sk',
    logo: '/icons/companies/sensystems.png',
    description: {
      sk: 'Pracujem tu od roku 2022 ako full-stack developer. Vyvíjam webové a desktopové aplikácie pre domácich i zahraničných klientov v ASP.NET Core, Blazor, WinUI 3 a MS SQL.',
      en: 'Working here since 2022 as a full-stack developer. Building web and desktop applications for domestic and international clients using ASP.NET Core, Blazor, WinUI 3 and MS SQL.',
    },
  },
  {
    name: 'Latschbacher',
    url: 'https://www.latschbacher.com',
    logo: '/icons/companies/latschbacher.png',
    description: {
      sk: 'Rakúska spoločnosť v oblasti lesného hospodárstva a logistiky dreva. Spolupracoval som na vývoji a údržbe ERP systému WinforstPro.',
      en: 'Austrian company in forestry and timber logistics. Collaborated on the development and maintenance of the WinforstPro ERP system.',
    },
  },
  {
    name: 'MIRRI',
    url: 'https://mirri.gov.sk',
    logo: '/icons/companies/mirri_sk.png',
    logoEn: '/icons/companies/mirri_en.png',
    description: {
      sk: 'Ministerstvo investícií, regionálneho rozvoja a informatizácie SR. Testoval som prístupnosť webových sídiel a mobilných aplikácií podľa noriem WCAG.',
      en: 'Ministry of Investments, Regional Development and Informatisation of the SR. Tested accessibility of web and mobile applications according to WCAG standards.',
    },
  },
  {
    name: 'Algorithmics',
    url: 'https://slovakia.alg.academy/svk',
    logo: '/icons/companies/algorithmics.svg',
    description: {
      sk: 'Medzinárodná škola programovania pre deti a mládež. Vyučoval som programovanie v Pythone a Scratch a prekladal vzdelávacie materiály SK/EN.',
      en: 'International coding school for children and youth. Taught Python and Scratch programming and translated educational materials from Slovak to English.',
    },
  },
];

export interface EducationEntry {
  label: string;
  description: string;
  url?: string;
  urlLabel?: string;
  urlSuffix?: string;
}

export interface EducationYear {
  year: string;
  entries: EducationEntry[];
}

export interface WorkItem {
  employer: string;
  url: string;
  duration: string;
  position: string;
}

export interface PortfolioItem {
  title: string;
  type: string;
  description: string;
  tags: string[];
  projectUrl?: string;
  githubUrl?: string;
  image?: string;
}

export interface TechCategory {
  label: string;
  color: string;
  items: string[];
}

export const educationData: Record<Locale, EducationYear[]> = {
  sk: [
    {
      year: '2024',
      entries: [
        {
          label: 'Blazor',
          description: 'ASP.NET Core Blazor školenie v školiacom stredisku',
          url: 'https://www.gopas.sk',
          urlLabel: 'GOPAS',
        },
        {
          label: 'WinUI 3',
          description: '3-dňové školenie pod vedením Prof. Veikko Krypczyk z nemeckého školiaceho strediska',
          url: 'https://www.it-visions.de',
          urlLabel: 'IT-Visions',
        },
      ],
    },
    {
      year: '2023',
      entries: [
        {
          label: 'FIIT STU',
          description: 'Ukončenie bakalárskeho stupňa štúdia na',
          url: 'https://www.fiit.stuba.sk',
          urlLabel: 'Fakulte informatiky a informačných technológií',
          urlSuffix: 'STU v Bratislave',
        },
        {
          label: 'WCAG',
          description: 'Interné školenia tvorby bezbarierového webu na ministerstve informatizácie Slovenskej republiky',
        },
      ],
    },
    {
      year: '2022',
      entries: [
        {
          label: 'Tvorba webu 5',
          description: 'Kurz Tvorba, programovanie webstránok V. – jQuery, interaktivita a úvod do JavaScriptu v školiacom stredisku',
          url: 'https://www.itlearning.sk',
          urlLabel: 'IT Learning Slovakia',
        },
        {
          label: 'Tvorba webu 4',
          description: 'Kurz Tvorba, programovanie webstránok IV. – responzívny dizajn, media pravidlá, flex a grid rozloženie v školiacom stredisku',
          url: 'https://www.itlearning.sk',
          urlLabel: 'IT Learning Slovakia',
        },
        {
          label: 'Tvorba webu 3',
          description: 'Kurz Tvorba, programovanie webstránok III. – expert HTML a CSS, pokročilé selektory, médiá a formuláre v školiacom stredisku',
          url: 'https://www.itlearning.sk',
          urlLabel: 'IT Learning Slovakia',
        },
        {
          label: 'MS SQL',
          description: 'Kurz Microsoft SQL Server pre vývojárov III. – programovanie databázy v školiacom stredisku',
          url: 'https://www.itlearning.sk',
          urlLabel: 'IT Learning Slovakia',
        },
        {
          label: 'Bootstrap',
          description: 'Kurz Bootstrap I. pre začiatočníkov – responzívny HTML, CSS a JS framework v školiacom stredisku',
          url: 'https://www.itlearning.sk',
          urlLabel: 'IT Learning Slovakia',
        },
      ],
    },
    {
      year: '2021',
      entries: [
        {
          label: 'DAŠ-ka',
          description: 'Ukončenie',
          url: 'https://komisia.sk/diecezna-animatorska-skola/',
          urlLabel: 'diecéznej animátorskej školy',
          urlSuffix: 'vo Važci zameranej na témy v oblasti vedenia ľudí v tíme a kresťanský život',
        },
        {
          label: 'Vzdelávanie',
          description: 'Kurzy zamerané na metodiku vzdelávania mládeže v informatike a príprava vzdelávacích materiálov v medzinárodnej škole programovania',
          url: 'https://slovakia.alg.academy/svk',
          urlLabel: 'Algorithmics',
        },
      ],
    },
    {
      year: '2020',
      entries: [
        {
          label: 'FIIT STU',
          description: 'Začiatok bakalárskeho stupňa štúdia na',
          url: 'https://www.fiit.stuba.sk',
          urlLabel: 'Fakulte informatiky a informačných technológií',
          urlSuffix: 'STU v Bratislave',
        },
        {
          label: 'GPUK',
          description: 'Ukončenie stredoškolského vzdelania na',
          url: 'https://gpuk.edupage.org',
          urlLabel: 'Gymnázium Kukučínova',
          urlSuffix: 'v Poprade',
        },
      ],
    },
  ],
  en: [
    {
      year: '2024',
      entries: [
        {
          label: 'Blazor',
          description: 'ASP.NET Core Blazor training at',
          url: 'https://www.gopas.sk',
          urlLabel: 'GOPAS',
          urlSuffix: 'training centre',
        },
        {
          label: 'WinUI 3',
          description: '3-day training led by Prof. Veikko Krypczyk from German training centre',
          url: 'https://www.it-visions.de',
          urlLabel: 'IT-Visions',
        },
      ],
    },
    {
      year: '2023',
      entries: [
        {
          label: 'FIIT STU',
          description: "Completed Bachelor's degree at the",
          url: 'https://www.fiit.stuba.sk',
          urlLabel: 'Faculty of Informatics and Information Technologies',
          urlSuffix: 'of STU in Bratislava',
        },
        {
          label: 'WCAG',
          description: 'Internal web accessibility training at the Ministry of Investments, Regional Development and Informatisation of the Slovak Republic',
        },
      ],
    },
    {
      year: '2022',
      entries: [
        {
          label: 'Web Dev 5',
          description: 'Course: Web Programming V. – jQuery, interactivity and introduction to JavaScript at',
          url: 'https://www.itlearning.sk',
          urlLabel: 'IT Learning Slovakia',
        },
        {
          label: 'Web Dev 4',
          description: 'Course: Web Programming IV. – responsive design, media queries, flexbox and grid at',
          url: 'https://www.itlearning.sk',
          urlLabel: 'IT Learning Slovakia',
        },
        {
          label: 'Web Dev 3',
          description: 'Course: Web Programming III. – expert HTML & CSS, advanced selectors, media and forms at',
          url: 'https://www.itlearning.sk',
          urlLabel: 'IT Learning Slovakia',
        },
        {
          label: 'MS SQL',
          description: 'Course: Microsoft SQL Server for Developers III. – database programming at',
          url: 'https://www.itlearning.sk',
          urlLabel: 'IT Learning Slovakia',
        },
        {
          label: 'Bootstrap',
          description: 'Course: Bootstrap I. for beginners – responsive HTML, CSS & JS framework at',
          url: 'https://www.itlearning.sk',
          urlLabel: 'IT Learning Slovakia',
        },
      ],
    },
    {
      year: '2021',
      entries: [
        {
          label: 'DAS',
          description: 'Completed the',
          url: 'https://komisia.sk/diecezna-animatorska-skola/',
          urlLabel: 'Diocesan Animator School',
          urlSuffix: 'in Važec, focused on team leadership and Christian life',
        },
        {
          label: 'Teaching',
          description: 'Courses on youth IT education methodology and preparation of teaching materials at the international coding school',
          url: 'https://slovakia.alg.academy/svk',
          urlLabel: 'Algorithmics',
        },
      ],
    },
    {
      year: '2020',
      entries: [
        {
          label: 'FIIT STU',
          description: "Started Bachelor's studies at the",
          url: 'https://www.fiit.stuba.sk',
          urlLabel: 'Faculty of Informatics and Information Technologies',
          urlSuffix: 'of STU in Bratislava',
        },
        {
          label: 'GPUK',
          description: 'Completed secondary education at',
          url: 'https://gpuk.edupage.org',
          urlLabel: 'Gymnázium Kukučínova',
          urlSuffix: 'in Poprad',
        },
      ],
    },
  ],
};

export const workData: Record<Locale, WorkItem[]> = {
  sk: [
    {
      employer: 'SEN Systems',
      url: 'https://sensystems.sk',
      duration: '2022 – súčasnosť',
      position: 'Full-stack developer (.NET, MS SQL)',
    },
    {
      employer: 'Ministerstvo investícií, regionálneho rozvoja a informatizácie SR',
      url: 'https://mirri.gov.sk',
      duration: '2023',
      position: 'Tester prístupnosti webových sídel a mobilných aplikácií',
    },
    {
      employer: 'Algorithmics',
      url: 'https://slovakia.alg.academy/svk',
      duration: '2022',
      position: 'Lektor programovania v jazyku Python a Scratch, prekladateľ SK/EN',
    },
  ],
  en: [
    {
      employer: 'SEN Systems',
      url: 'https://sensystems.sk',
      duration: '2022 – present',
      position: 'Full-stack developer (.NET, MS SQL)',
    },
    {
      employer: 'Ministry of Investments, Regional Development and Informatisation of SR',
      url: 'https://mirri.gov.sk',
      duration: '2023',
      position: 'Web and mobile application accessibility tester',
    },
    {
      employer: 'Algorithmics',
      url: 'https://slovakia.alg.academy/svk',
      duration: '2022',
      position: 'Python & Scratch programming instructor, SK/EN translator',
    },
  ],
};

export const portfolioData: Record<Locale, PortfolioItem[]> = {
  sk: [
    {
      title: 'Track My Bunny',
      type: 'Web',
      description: 'Aplikácia na sledovanie zdravia a pohody domácich králikov. Denné záznamy, monitorovanie hmotnosti, plánowanie liekov a vedenie veterinárnych návštev s exportom do PDF.',
      tags: ['Zdravie zvierat', 'Sledovanie', 'Next.js'],
      projectUrl: 'https://trackmybunny.kromka.it/',
    },
    {
      title: 'Predškoláčik',
      type: 'Web',
      description: 'Vzdelávacia aplikácia pre deti v predškolskom veku.',
      tags: ['Vzdelávanie', 'Umelá inteligencia', 'Učenie hrou'],
      projectUrl: 'https://predskolacik.app/',
      image: '/images/predskolacik.png',
    },
    {
      title: 'Pexesolab',
      type: 'Web',
      description: 'Generátor pexesa z vlastných obrázkov.',
      tags: ['Vzdelávanie', 'Umelá inteligencia', 'Učenie hrou'],
      projectUrl: 'https://pexeso.predskolacik.app/',
      image: '/images/pexesolab.jpg',
    },
    {
      title: 'SQL Injection Lab',
      type: 'Web',
      description: 'Laboratórium na bezpečné a legálne trénovanie svojich zručností v útokoch SQL Injection.',
      tags: ['SQL Injection', 'Informačná bezpečnosť', 'Vzdelávanie'],
      projectUrl: 'https://sqlinjectionlab.kromka.it/',
      githubUrl: 'https://github.com/xkromkad/SQLInjectionLab',
      image: '/images/sqlinjection.png',
    },
    {
      title: 'Mirka a Dávid',
      type: 'Web',
      description: 'Svadobná stránka s informáciami pre hostí a možnosťou nahrávania fotiek.',
      tags: ['Svadobná stránka', 'Informácie pre hostí', 'Zdieľanie fotografií'],
      projectUrl: 'https://mirkaadavid.kromka.it/',
      githubUrl: 'https://github.com/xkromkad/mirkaadavid',
      image: '/images/svadba.png',
    },
    {
      title: 'Toxipred – tímová stránka',
      type: 'Web',
      description: 'Tímová stránka do súťaže TP CUP na FIIT STU. Cieľom projektu bolo vytvoriť predikčný model na odhaľovanie genotoxicity látok.',
      tags: ['Školský projekt', 'Reprezentatívna stránka tímu', 'Umelá inteligencia'],
      projectUrl: 'https://toxipred.kromka.it',
      githubUrl: 'https://github.com/xkromkad/Toxipred',
      image: '/images/toxipred_team.png',
    },
    {
      title: 'Toxipred – predikcia genotoxicity',
      type: 'Web',
      description: 'Voľne dostupné nástroje na predikciu fototoxicity a genotoxicity látok pomocou strojového učenia.',
      tags: ['Školský projekt', 'Predikcia genotoxicity', 'Umelá inteligencia'],
      projectUrl: 'https://mltox.fiit.stuba.sk',
      image: '/images/toxipred.png',
    },
  ],
  en: [
    {
      title: 'Track My Bunny',
      type: 'Web',
      description: 'A health management app for pet rabbits. Daily logs, weight trend monitoring, medication scheduling, and vet visit records with PDF export.',
      tags: ['Pet Health', 'Tracking', 'Next.js'],
      projectUrl: 'https://trackmybunny.kromka.it/',
    },
    {
      title: 'Predškoláčik',
      type: 'Web',
      description: 'Educational application for preschool-aged children.',
      tags: ['Education', 'Artificial Intelligence', 'Learning Through Play'],
      projectUrl: 'https://predskolacik.app/',
      image: '/images/predskolacik.png',
    },
    {
      title: 'Pexesolab',
      type: 'Web',
      description: 'Memory card game generator from your own images.',
      tags: ['Education', 'Artificial Intelligence', 'Learning Through Play'],
      projectUrl: 'https://pexeso.predskolacik.app/',
      image: '/images/pexesolab.jpg',
    },
    {
      title: 'SQL Injection Lab',
      type: 'Web',
      description: 'A safe and legal laboratory for practising SQL Injection attack techniques.',
      tags: ['SQL Injection', 'Information Security', 'Education'],
      projectUrl: 'https://sqlinjectionlab.kromka.it/',
      githubUrl: 'https://github.com/xkromkad/SQLInjectionLab',
      image: '/images/sqlinjection.png',
    },
    {
      title: 'Mirka & David',
      type: 'Web',
      description: 'Wedding website with guest information and photo uploading.',
      tags: ['Wedding Website', 'Guest Information', 'Photo Sharing'],
      projectUrl: 'https://mirkaadavid.kromka.it/',
      githubUrl: 'https://github.com/xkromkad/mirkaadavid',
      image: '/images/svadba.png',
    },
    {
      title: 'Toxipred – Team Page',
      type: 'Web',
      description: 'Team page for the TP CUP competition at FIIT STU. The project goal was to build a genotoxicity prediction model.',
      tags: ['University Project', 'Team Page', 'Artificial Intelligence'],
      projectUrl: 'https://toxipred.kromka.it',
      githubUrl: 'https://github.com/xkromkad/Toxipred',
      image: '/images/toxipred_team.png',
    },
    {
      title: 'Toxipred – Genotoxicity Prediction',
      type: 'Web',
      description: 'Freely available tools for predicting phototoxicity and genotoxicity of substances using machine learning.',
      tags: ['University Project', 'Genotoxicity Prediction', 'Artificial Intelligence'],
      projectUrl: 'https://mltox.fiit.stuba.sk',
      image: '/images/toxipred.png',
    },
  ],
};

export const techCategories: Record<Locale, TechCategory[]> = {
  sk: [
    {
      label: 'Backend',
      color: 'bg-timeline text-white',
      items: ['ASP.NET Core', 'Blazor', 'WinUI 3', '.NET', 'Python', 'Node.js'],
    },
    {
      label: 'Databáza',
      color: 'bg-emerald-700 text-white',
      items: ['MS SQL Server', 'T-SQL', 'PostgreSQL'],
    },
    {
      label: 'Frontend',
      color: 'bg-brand text-dark',
      items: ['Vue.js', 'React', 'Quasar', 'TypeScript', 'JavaScript', 'HTML', 'CSS / SCSS'],
    },
    {
      label: 'Nástroje & Ostatné',
      color: 'bg-gray-600 text-white',
      items: ['Bootstrap', 'DevExpress', 'jQuery', 'Git', 'Docker', 'Claude Code', 'WCAG Accessibility'],
    },
  ],
  en: [
    {
      label: 'Backend',
      color: 'bg-timeline text-white',
      items: ['ASP.NET Core', 'Blazor', 'WinUI 3', '.NET', 'Python', 'Node.js'],
    },
    {
      label: 'Database',
      color: 'bg-emerald-700 text-white',
      items: ['MS SQL Server', 'T-SQL', 'PostgreSQL'],
    },
    {
      label: 'Frontend',
      color: 'bg-brand text-dark',
      items: ['Vue.js', 'React', 'Quasar', 'TypeScript', 'JavaScript', 'HTML', 'CSS / SCSS'],
    },
    {
      label: 'Tools & Other',
      color: 'bg-gray-600 text-white',
      items: ['Bootstrap', 'DevExpress', 'jQuery', 'Git', 'Docker', 'Claude Code', 'WCAG Accessibility'],
    },
  ],
};
