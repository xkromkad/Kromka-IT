export type Locale = 'sk' | 'en';

export interface Service {
  slug: string;
  icon: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  longDescription: Record<Locale, string>;
  meaning: Record<Locale, string>;
  benefits: Record<Locale, string[]>;
  relatedTech?: string[];
}

export const services: Service[] = [
  {
    slug: 'web-development',
    icon: 'web',
    title: {
      sk: 'Vývoj webových aplikácií',
      en: 'Web Application Development',
    },
    description: {
      sk: 'Návrh a vývoj moderných webových aplikácií na mieru – od prvého konceptu cez implementáciu až po nasadenie.',
      en: 'Designing and building modern, custom web applications – from the first concept through implementation to deployment.',
    },
    longDescription: {
      sk: 'Navrhujem a vyvíjam moderné webové aplikácie na mieru – od prvého konceptu cez dizajn a implementáciu až po nasadenie do produkcie. Zameriavam sa na rýchle, bezpečné a dobre udržiavateľné riešenia postavené na technológiách ako Next.js, React a ASP.NET Core.\n\nOd úvodnej analýzy potrieb až po odovzdanie hotového produktu ste v kontakte s jedným človekom, ktorý rozumie celému projektu. Aplikáciu vyladím na výkon, prehľadnosť a jednoduché používanie na počítači aj mobile.',
      en: 'I design and build modern, custom web applications – from the first concept through design and implementation to production deployment. I focus on fast, secure and maintainable solutions built on technologies such as Next.js, React and ASP.NET Core.\n\nFrom the initial needs analysis to handing over the finished product, you deal with one person who understands the whole project. I tune the application for performance, clarity and ease of use on both desktop and mobile.',
    },
    meaning: {
      sk: 'V praxi to znamená, že namiesto šablóny dostanete riešenie postavené presne na vaše procesy a ciele. Webová aplikácia je interaktívny nástroj (napríklad rezervačný systém, portál či interná aplikácia), nie len statická stránka – rieši konkrétnu úlohu vášho podnikania.',
      en: 'In practice this means that instead of a template, you get a solution built exactly around your processes and goals. A web application is an interactive tool (a booking system, a portal, an internal app) rather than a static page – it solves a concrete business task.',
    },
    benefits: {
      sk: [
        'Riešenie na mieru vašim procesom, nie generická šablóna',
        'Rýchle načítanie a spoľahlivý chod aj pri raste návštevnosti',
        'Jeden partner pre celý projekt – od návrhu po nasadenie',
        'Bezproblémové fungovanie na mobile aj počítači',
      ],
      en: [
        'A solution tailored to your processes, not a generic template',
        'Fast loading and reliable operation even as traffic grows',
        'One partner for the whole project – from design to deployment',
        'Seamless experience on mobile and desktop',
      ],
    },
    relatedTech: ['Next.js', 'React', 'ASP.NET Core', 'TypeScript', 'Tailwind CSS'],
  },
  {
    slug: 'full-stack',
    icon: 'fullstack',
    title: {
      sk: 'Full-stack riešenia',
      en: 'Full-stack Solutions',
    },
    description: {
      sk: 'Kompletný frontend aj backend v ASP.NET Core, Blazor, Vue.js či Next.js. Jeden partner pre celý projekt.',
      en: 'Complete frontend and backend in ASP.NET Core, Blazor, Vue.js or Next.js. One partner for the whole project.',
    },
    longDescription: {
      sk: 'Pokryjem celý projekt – používateľské rozhranie (frontend) aj serverovú logiku a dátovú vrstvu (backend). Pracujem s ASP.NET Core, Blazor, Vue.js aj Next.js, takže viem zvoliť technológiu, ktorá sa najviac hodí pre vaše zadanie.\n\nKeďže mám prehľad o celom systéme, jednotlivé časti do seba zapadajú bez zbytočných kompromisov a komunikácia je jednoduchá – všetko rieši jeden človek.',
      en: 'I cover the whole project – both the user interface (frontend) and the server logic and data layer (backend). I work with ASP.NET Core, Blazor, Vue.js and Next.js, so I can pick the technology that best fits your requirements.\n\nBecause I have an overview of the entire system, the individual parts fit together without unnecessary compromises and communication is simple – one person handles everything.',
    },
    meaning: {
      sk: '„Full-stack" znamená, že sa nemusíte spoliehať na viacero dodávateľov pre návrh, frontend a backend. Dostanete kompletné, prepojené riešenie z jedného miesta – od tlačidla, ktoré používateľ vidí, až po databázu, ktorá beží na pozadí.',
      en: '“Full-stack” means you don’t have to rely on several vendors for design, frontend and backend. You get a complete, connected solution from one place – from the button the user sees to the database running in the background.',
    },
    benefits: {
      sk: [
        'Celé riešenie z jedného miesta – menej koordinácie pre vás',
        'Frontend aj backend navrhnuté tak, aby spolu bezchybne fungovali',
        'Voľba technológie podľa potrieb projektu, nie naopak',
        'Rýchlejší vývoj a jasná zodpovednosť za výsledok',
      ],
      en: [
        'The whole solution from one place – less coordination for you',
        'Frontend and backend designed to work flawlessly together',
        'Technology chosen to fit the project, not the other way round',
        'Faster delivery and clear accountability for the result',
      ],
    },
    relatedTech: ['ASP.NET Core', 'Blazor', 'Vue.js', 'Next.js', '.NET', 'Node.js'],
  },
  {
    slug: 'ai-integration',
    icon: 'ai',
    title: {
      sk: 'Integrácia umelej inteligencie',
      en: 'AI Integration',
    },
    description: {
      sk: 'Prepojenie aplikácií s jazykovými modelmi a AI nástrojmi – inteligentné generovanie obsahu, asistenti a automatizácia.',
      en: 'Connecting applications with language models and AI tools – smart content generation, assistants and automation.',
    },
    longDescription: {
      sk: 'Prepojím vašu aplikáciu s modernými jazykovými modelmi a AI nástrojmi. Viem doplniť inteligentné generovanie obsahu, virtuálnych asistentov, spracovanie dokumentov či automatizáciu opakujúcich sa úloh.\n\nMám praktické skúsenosti s tvorbou AI produktov (napríklad vzdelávacie aplikácie Predškoláčik a Pexesolab) a viem posúdiť, kde AI reálne prináša hodnotu a kde je len zbytočným nákladom.',
      en: 'I connect your application with modern language models and AI tools. I can add smart content generation, virtual assistants, document processing or automation of repetitive tasks.\n\nI have hands-on experience building AI products (for example the educational apps Predškoláčik and Pexesolab) and can judge where AI genuinely adds value and where it is just an unnecessary cost.',
    },
    meaning: {
      sk: 'Integrácia AI neznamená „nahradiť ľudí robotom". Znamená to pridať do vašej aplikácie funkcie, ktoré šetria čas – automaticky pripravia text, odpovedia na časté otázky alebo spracujú dáta, ktoré by inak niekto robil ručne.',
      en: 'AI integration does not mean “replacing people with robots”. It means adding features to your application that save time – automatically drafting text, answering frequent questions, or processing data someone would otherwise handle manually.',
    },
    benefits: {
      sk: [
        'Automatizácia opakujúcich sa úloh a úspora času',
        'Inteligentné generovanie obsahu a odpovedí',
        'Reálne skúsenosti z nasadených AI produktov',
        'Odborné posúdenie, kde má AI zmysel a kde nie',
      ],
      en: [
        'Automation of repetitive tasks and time savings',
        'Smart generation of content and responses',
        'Real experience from shipped AI products',
        'Honest assessment of where AI makes sense and where it doesn’t',
      ],
    },
    relatedTech: ['OpenAI / LLM', 'Next.js', 'Python', '.NET', 'REST API'],
  },
  {
    slug: 'databases',
    icon: 'database',
    title: {
      sk: 'Databázy a dáta',
      en: 'Databases & Data',
    },
    description: {
      sk: 'Návrh, optimalizácia a programovanie databáz v MS SQL Server, T-SQL a PostgreSQL pre výkonné a spoľahlivé aplikácie.',
      en: 'Designing, optimising and programming databases in MS SQL Server, T-SQL and PostgreSQL for fast, reliable applications.',
    },
    longDescription: {
      sk: 'Navrhujem, optimalizujem a programujem databázy v MS SQL Server, T-SQL a PostgreSQL. Postarám sa o správnu štruktúru dát, rýchle dotazy, indexy a spoľahlivé ukladanie, na ktorom stojí každá seriózna aplikácia.\n\nAk je vaša aplikácia pomalá alebo dáta narástli, viem existujúcu databázu preveriť, nájsť úzke miesta a zrýchliť ju bez toho, aby ste museli všetko prepisovať.',
      en: 'I design, optimise and program databases in MS SQL Server, T-SQL and PostgreSQL. I take care of the right data structure, fast queries, indexes and reliable storage that every serious application depends on.\n\nIf your application is slow or your data has grown, I can review the existing database, find the bottlenecks and speed it up without you having to rewrite everything.',
    },
    meaning: {
      sk: 'Databáza je základ, na ktorom stojí celá aplikácia – tu sa ukladajú a vyhľadávajú všetky vaše dáta. Dobre navrhnutá databáza znamená rýchlu aplikáciu a dáta, ktorým môžete dôverovať; zle navrhnutá skôr či neskôr spôsobí pomalé načítanie a chyby.',
      en: 'The database is the foundation the whole application stands on – it is where all your data is stored and retrieved. A well-designed database means a fast application and data you can trust; a poorly designed one sooner or later causes slow loading and errors.',
    },
    benefits: {
      sk: [
        'Rýchlejšie dotazy a odozva aplikácie',
        'Spoľahlivé a bezpečné ukladanie dát',
        'Optimalizácia existujúcich databáz bez prepisu celej aplikácie',
        'Dátová štruktúra pripravená na budúci rast',
      ],
      en: [
        'Faster queries and application response times',
        'Reliable and secure data storage',
        'Optimisation of existing databases without rewriting the whole app',
        'A data structure ready for future growth',
      ],
    },
    relatedTech: ['MS SQL Server', 'T-SQL', 'PostgreSQL'],
  },
  {
    slug: 'web-accessibility',
    icon: 'accessibility',
    title: {
      sk: 'Webová prístupnosť (WCAG)',
      en: 'Web Accessibility (WCAG)',
    },
    description: {
      sk: 'Testovanie a úprava webových sídiel a mobilných aplikácií podľa noriem WCAG, aby boli prístupné pre všetkých.',
      en: 'Testing and adapting websites and mobile applications to WCAG standards so they are accessible to everyone.',
    },
    longDescription: {
      sk: 'Testujem a upravujem webové sídla a mobilné aplikácie podľa noriem WCAG tak, aby ich mohli pohodlne používať aj ľudia so zdravotným znevýhodnením. Prístupnosť som testoval aj na Ministerstve investícií, regionálneho rozvoja a informatizácie SR.\n\nPripravím audit prístupnosti s konkrétnym zoznamom nedostatkov a odporúčaní, prípadne rovno vykonám potrebné úpravy v kóde.',
      en: 'I test and adapt websites and mobile applications to WCAG standards so that people with disabilities can use them comfortably too. I have also tested accessibility at the Ministry of Investments, Regional Development and Informatisation of the Slovak Republic.\n\nI prepare an accessibility audit with a concrete list of issues and recommendations, or I can carry out the necessary code changes directly.',
    },
    meaning: {
      sk: 'Prístupnosť (WCAG) znamená, že váš web dokáže používať naozaj každý – vrátane ľudí, ktorí zle vidia, nepočujú alebo ovládajú počítač len klávesnicou. Pre verejný sektor je to zákonná povinnosť, pre firmy zas väčší dosah a lepší obraz značky.',
      en: 'Accessibility (WCAG) means your website can genuinely be used by everyone – including people who have low vision, are deaf, or control the computer with the keyboard only. For the public sector it is a legal obligation; for businesses it means wider reach and a stronger brand image.',
    },
    benefits: {
      sk: [
        'Súlad so zákonnými požiadavkami na prístupnosť',
        'Väčší dosah – web použiteľný pre všetkých návštevníkov',
        'Konkrétny audit s jasným zoznamom krokov',
        'Skúsenosti z testovania pre štátnu správu',
      ],
      en: [
        'Compliance with legal accessibility requirements',
        'Wider reach – a site usable by all visitors',
        'A concrete audit with a clear list of steps',
        'Experience from testing for public administration',
      ],
    },
    relatedTech: ['WCAG 2.1', 'ARIA', 'HTML', 'CSS'],
  },
  {
    slug: 'training',
    icon: 'teaching',
    title: {
      sk: 'Školenia a konzultácie',
      en: 'Training & Consulting',
    },
    description: {
      sk: 'Výuka programovania a technické konzultácie – od základov po pokročilé témy, prispôsobené tempu a cieľom.',
      en: 'Programming lessons and technical consulting – from basics to advanced topics, tailored to your pace and goals.',
    },
    longDescription: {
      sk: 'Učím programovanie a poskytujem technické konzultácie – od úplných základov až po pokročilé témy. Obsah aj tempo prispôsobím vašim cieľom, či už ide o jednotlivca, tím alebo firmu.\n\nMám skúsenosti s výukou v medzinárodnej škole programovania (Python, Scratch) aj s prípravou vzdelávacích materiálov. Poradím aj pri výbere technológií či architektúry pre váš projekt.',
      en: 'I teach programming and provide technical consulting – from the very basics to advanced topics. I adapt both the content and the pace to your goals, whether you are an individual, a team or a company.\n\nI have experience teaching at an international coding school (Python, Scratch) and preparing educational materials. I can also advise on choosing technologies or architecture for your project.',
    },
    meaning: {
      sk: 'Konzultácia znamená, že sa nemusíte rozhodovať sami – prejdeme vaše zadanie, možnosti a riziká zrozumným jazykom bez zbytočného žargónu. Školenie zas znamená, že vy alebo váš tím získate zručnosti, ktoré ostanú vo firme.',
      en: 'Consulting means you don’t have to decide alone – we go through your task, options and risks in plain language without unnecessary jargon. Training means you or your team gain skills that stay in the company.',
    },
    benefits: {
      sk: [
        'Obsah a tempo prispôsobené vašim cieľom',
        'Zrozumiteľné vysvetlenie bez zbytočného žargónu',
        'Nezávislé poradenstvo pri výbere technológií',
        'Skúsenosti z medzinárodnej školy programovania',
      ],
      en: [
        'Content and pace tailored to your goals',
        'Clear explanations without unnecessary jargon',
        'Independent advice on choosing technologies',
        'Experience from an international coding school',
      ],
    },
    relatedTech: ['Python', 'JavaScript', 'Scratch', '.NET'],
  },
];

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

export interface Screenshot {
  src: string;
  alt: string;
}

export interface PortfolioItem {
  slug: string;
  title: string;
  type: string;
  description: string;
  longDescription?: string;
  features?: string[];
  techStack?: string[];
  role?: string;
  year?: string;
  tags: string[];
  projectUrl?: string;
  githubUrl?: string;
  image?: string;
  imageAlt?: string;
  screenshots?: Screenshot[];
}

export interface TechCategory {
  label: string;
  color: string;
  items: string[];
}

export const educationData: Record<Locale, EducationYear[]> = {
  sk: [
    {
      year: '2025',
      entries: [
        {
          label: 'FIIT STU',
          description: 'Ukončenie inžinierskeho stupňa štúdia na',
          url: 'https://www.fiit.stuba.sk',
          urlLabel: 'Fakulte informatiky a informačných technológií',
          urlSuffix: 'STU v Bratislave',
        },
      ],
    },
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
      year: '2025',
      entries: [
        {
          label: 'FIIT STU',
          description: "Completed Master's degree at the",
          url: 'https://www.fiit.stuba.sk',
          urlLabel: 'Faculty of Informatics and Information Technologies',
          urlSuffix: 'of STU in Bratislava',
        },
      ],
    },
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
      slug: 'track-my-bunny',
      title: 'Track My Bunny',
      type: 'Web',
      description: 'Aplikácia na sledovanie zdravia a pohody domácich králikov. Denné záznamy, monitorovanie hmotnosti, plánovanie liekov a vedenie veterinárnych návštev s exportom do PDF.',
      longDescription:
        'Track My Bunny je webová aplikácia, ktorá pomáha majiteľom domácich králikov mať prehľad o zdraví a každodennej pohode svojich zvierat. Umožňuje viesť denné záznamy o kŕmení a správaní, sledovať vývoj hmotnosti v čase, plánovať podávanie liekov a evidovať veterinárne návštevy. Všetky údaje je možné exportovať do PDF a zdieľať ich s veterinárom.\n\nDôraz som kládol na prehľadné a jednoduché používateľské rozhranie, ktoré zvládne aj menej technicky zdatný používateľ, a na spoľahlivé ukladanie dlhodobých zdravotných záznamov.',
      features: [
        'Denné záznamy o kŕmení, správaní a pohode',
        'Monitorovanie vývoja hmotnosti pomocou grafov',
        'Plánovanie a pripomienky podávania liekov',
        'Evidencia veterinárnych návštev s exportom do PDF',
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
      role: 'Samostatný vývojár',
      year: '2025',
      tags: ['Zdravie zvierat', 'Sledovanie', 'Next.js'],
      projectUrl: 'https://trackmybunny.kromka.it/',
      image: '/images/trackmybunny.jpg',
      imageAlt: 'Screenshot aplikácie Track My Bunny – sledovanie zdravia a hmotnosti domácich králikov',
      screenshots: [
        {
          src: '/images/trackmybunny.jpg',
          alt: 'Prehľad aplikácie Track My Bunny so zdravotnými záznamami a grafom hmotnosti',
        },
      ],
    },
    {
      slug: 'predskolacik',
      title: 'Predškoláčik',
      type: 'Web',
      description: 'Vzdelávacia aplikácia pre deti v predškolskom veku, ktorá využíva umelú inteligenciu na generovanie interaktívnych úloh. Rozvíja predčitateľskú gramotnosť, počítanie a logické myslenie formou hry prispôsobenej tempu každého dieťaťa.',
      longDescription:
        'Predškoláčik je vzdelávacia webová aplikácia pre deti v predškolskom veku, ktorá pomocou umelej inteligencie generuje interaktívne úlohy prispôsobené tempu a schopnostiam každého dieťaťa. Rozvíja predčitateľskú gramotnosť, počítanie a logické myslenie zábavnou hravou formou.\n\nÚlohy sa dynamicky vytvárajú tak, aby dieťa neustále napredovalo a nenudilo sa. Aplikácia je navrhnutá s ohľadom na jednoduché ovládanie deťmi a prehľad pre rodičov.',
      features: [
        'Interaktívne úlohy generované umelou inteligenciou',
        'Rozvoj predčitateľskej gramotnosti, počítania a logiky',
        'Obtiažnosť prispôsobená tempu každého dieťaťa',
        'Hravé a farebné rozhranie vhodné pre predškolákov',
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'Umelá inteligencia (LLM)', 'Tailwind CSS'],
      role: 'Samostatný vývojár',
      year: '2025',
      tags: ['Vzdelávanie', 'Umelá inteligencia', 'Učenie hrou'],
      projectUrl: 'https://predskolacik.app/',
      image: '/images/predskolacik.jpg',
      imageAlt: 'Screenshot aplikácie Predškoláčik – interaktívne vzdelávacie úlohy pre predškolské deti',
      screenshots: [
        {
          src: '/images/predskolacik.jpg',
          alt: 'Interaktívna vzdelávacia úloha v aplikácii Predškoláčik',
        },
      ],
    },
    {
      slug: 'pexesolab',
      title: 'Pexesolab',
      type: 'Web',
      description: 'Generátor pexesa z vlastných obrázkov. Nahrajte ľubovoľné fotografie a aplikácia s pomocou umelej inteligencie automaticky vytvorí pamäťovú hru – ideálne pre učiteľov, rodičov a deti.',
      longDescription:
        'Pexesolab je nástroj, ktorý z vlastných fotografií automaticky vytvorí hru pexeso. Používateľ jednoducho nahrá ľubovoľné obrázky a aplikácia s pomocou umelej inteligencie vygeneruje hraciu sadu kariet pripravenú na hranie.\n\nProjekt je určený najmä pre učiteľov, rodičov a deti, ktorí chcú rýchlo vytvoriť personalizovanú pamäťovú hru na vzdelávacie alebo zábavné účely.',
      features: [
        'Generovanie pexesa z vlastných nahraných fotografií',
        'Automatické spracovanie obrázkov pomocou umelej inteligencie',
        'Okamžite hrateľná pamäťová hra v prehliadači',
        'Vhodné pre učiteľov, rodičov aj deti',
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'Umelá inteligencia', 'Tailwind CSS'],
      role: 'Samostatný vývojár',
      year: '2025',
      tags: ['Vzdelávanie', 'Umelá inteligencia', 'Učenie hrou'],
      projectUrl: 'https://pexeso.predskolacik.app/',
      image: '/images/pexesolab.jpg',
      imageAlt: 'Screenshot generátora Pexesolab – tvorba pamäťovej hry z vlastných fotografií',
      screenshots: [
        {
          src: '/images/pexesolab.jpg',
          alt: 'Vygenerovaná pamäťová hra pexeso v aplikácii Pexesolab',
        },
      ],
    },
    {
      slug: 'sql-injection-lab',
      title: 'SQL Injection Lab',
      type: 'Web',
      description: 'Laboratórium na bezpečné a legálne trénovanie útočných techník SQL Injection. Obsahuje sériu úrovní s realistickými scenármi, vysvetleniami zraniteľností a radami na obranu – vhodné pre študentov aj profesionálov.',
      longDescription:
        'SQL Injection Lab je vzdelávacie prostredie, ktoré umožňuje bezpečne a legálne trénovať útočné techniky SQL Injection. Obsahuje sériu úrovní s realistickými scenármi, pri ktorých si používateľ prakticky vyskúša rôzne typy zraniteľností.\n\nKu každej úrovni patrí vysvetlenie danej zraniteľnosti a rady, ako sa proti nej brániť. Lab je vhodný pre študentov informačnej bezpečnosti aj pre profesionálov, ktorí si chcú prehĺbiť znalosti v bezpečnom prostredí.',
      features: [
        'Séria úrovní s realistickými scenármi SQL Injection',
        'Vysvetlenie každej zraniteľnosti a spôsobov obrany',
        'Bezpečné a legálne cvičné prostredie',
        'Vhodné pre študentov aj profesionálov',
      ],
      techStack: ['Next.js', 'TypeScript', 'Node.js', 'SQL', 'Docker'],
      role: 'Samostatný vývojár',
      year: '2024',
      tags: ['SQL Injection', 'Informačná bezpečnosť', 'Vzdelávanie'],
      projectUrl: 'https://sqlinjectionlab.kromka.it/',
      githubUrl: 'https://github.com/xkromkad/SQLInjectionLab',
      image: '/images/sqlinjection.png',
      imageAlt: 'Screenshot SQL Injection Lab – cvičné prostredie na trénovanie bezpečnostných zručností',
      screenshots: [
        {
          src: '/images/sqlinjection.png',
          alt: 'Cvičná úroveň v prostredí SQL Injection Lab',
        },
      ],
    },
    {
      slug: 'mirka-a-david',
      title: 'Mirka a Dávid',
      type: 'Web',
      description: 'Svadobná stránka s informáciami pre hostí, harmonogramom dňa a možnosťou nahrávania a zdieľania fotografií. Vytvorená na mieru ako darček pre novomanželov.',
      longDescription:
        'Svadobná stránka Mirka a Dávid bola vytvorená na mieru ako darček pre novomanželov. Hosťom prináša všetky dôležité informácie o svadobnom dni na jednom mieste – harmonogram, miesto konania aj praktické detaily.\n\nSúčasťou je aj možnosť nahrávať a zdieľať fotografie, vďaka čomu si hostia môžu spoločne vymieňať zábery z celého dňa a uchovať spomienky na jednom mieste.',
      features: [
        'Prehľadné informácie a harmonogram svadobného dňa',
        'Nahrávanie a zdieľanie fotografií medzi hosťami',
        'Dizajn na mieru pre novomanželov',
        'Responzívne rozhranie pre mobil aj počítač',
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      role: 'Samostatný vývojár',
      year: '2024',
      tags: ['Svadobná stránka', 'Informácie pre hostí', 'Zdieľanie fotografií'],
      projectUrl: 'https://mirkaadavid.kromka.it/',
      githubUrl: 'https://github.com/xkromkad/mirkaadavid',
      image: '/images/svadba.png',
      imageAlt: 'Screenshot svadobnej stránky Mirka a Dávid – informácie pre hostí a galéria fotografií',
      screenshots: [
        {
          src: '/images/svadba.png',
          alt: 'Úvodná stránka svadobného webu Mirka a Dávid',
        },
      ],
    },
    {
      slug: 'toxipred-team',
      title: 'Toxipred – tímová stránka',
      type: 'Web',
      description: 'Tímová stránka do súťaže TP CUP na FIIT STU. Cieľom projektu bolo vytvoriť predikčný model na odhaľovanie genotoxicity látok pomocou strojového učenia.',
      longDescription:
        'Toxipred – tímová stránka bola reprezentatívnou stránkou nášho tímu v súťaži TP CUP na FIIT STU. Predstavuje členov tímu, cieľ projektu a jeho priebeh.\n\nCieľom projektu bolo vytvoriť predikčný model na odhaľovanie genotoxicity látok pomocou strojového učenia. Stránka slúžila na prezentáciu tímu a informovanie o postupe práce počas súťaže.',
      features: [
        'Predstavenie tímu a cieľov projektu',
        'Prehľad postupu práce počas súťaže TP CUP',
        'Reprezentatívny dizajn pre akademickú súťaž',
        'Responzívne rozhranie',
      ],
      techStack: ['Vue.js', 'Quasar', 'TypeScript', 'SCSS'],
      role: 'Člen tímu – webový vývoj',
      year: '2023',
      tags: ['Školský projekt', 'Reprezentatívna stránka tímu', 'Umelá inteligencia'],
      projectUrl: 'https://toxipred.kromka.it',
      githubUrl: 'https://github.com/xkromkad/Toxipred',
      image: '/images/toxipred_team.png',
      imageAlt: 'Screenshot tímovej stránky Toxipred pre súťaž TP CUP na FIIT STU v Bratislave',
      screenshots: [
        {
          src: '/images/toxipred_team.png',
          alt: 'Tímová stránka projektu Toxipred pre súťaž TP CUP',
        },
      ],
    },
    {
      slug: 'toxipred-prediction',
      title: 'Toxipred – predikcia genotoxicity',
      type: 'Web',
      description: 'Voľne dostupné nástroje na predikciu fototoxicity a genotoxicity látok pomocou strojového učenia. Vyvinuté v rámci výskumného projektu na FIIT STU v spolupráci s výskumným tímom.',
      longDescription:
        'Toxipred je sada voľne dostupných nástrojov na predikciu fototoxicity a genotoxicity chemických látok pomocou strojového učenia. Vznikol v rámci výskumného projektu na FIIT STU v spolupráci s výskumným tímom.\n\nNástroje umožňujú výskumníkom rýchlo odhadnúť toxikologické vlastnosti látok bez nutnosti okamžitého laboratórneho testovania a sú verejne dostupné na fakultnej doméne.',
      features: [
        'Predikcia fototoxicity a genotoxicity látok',
        'Modely postavené na strojovom učení',
        'Voľne dostupné výskumné nástroje',
        'Výsledok spolupráce s výskumným tímom FIIT STU',
      ],
      techStack: ['Python', 'Machine Learning', 'scikit-learn', 'Flask'],
      role: 'Člen výskumného tímu',
      year: '2023',
      tags: ['Školský projekt', 'Predikcia genotoxicity', 'Umelá inteligencia'],
      projectUrl: 'https://mltox.fiit.stuba.sk',
      image: '/images/toxipred.png',
      imageAlt: 'Screenshot nástroja Toxipred na predikciu genotoxicity látok pomocou strojového učenia',
      screenshots: [
        {
          src: '/images/toxipred.png',
          alt: 'Nástroj Toxipred na predikciu genotoxicity látok',
        },
      ],
    },
  ],
  en: [
    {
      slug: 'track-my-bunny',
      title: 'Track My Bunny',
      type: 'Web',
      description: 'A health management app for pet rabbits. Daily logs, weight trend monitoring, medication scheduling, and vet visit records with PDF export.',
      longDescription:
        'Track My Bunny is a web application that helps pet rabbit owners stay on top of their animals’ health and daily well-being. It lets owners keep daily logs of feeding and behaviour, track weight trends over time, schedule medication, and record vet visits. All data can be exported to PDF and shared with a veterinarian.\n\nI focused on a clear, simple user interface that even less technical users can handle, and on reliable storage of long-term health records.',
      features: [
        'Daily logs of feeding, behaviour and well-being',
        'Weight trend monitoring with charts',
        'Medication scheduling and reminders',
        'Vet visit records with PDF export',
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
      role: 'Solo developer',
      year: '2025',
      tags: ['Pet Health', 'Tracking', 'Next.js'],
      projectUrl: 'https://trackmybunny.kromka.it/',
      image: '/images/trackmybunny.jpg',
      imageAlt: 'Screenshot of Track My Bunny app – pet rabbit health and weight tracking dashboard',
      screenshots: [
        {
          src: '/images/trackmybunny.jpg',
          alt: 'Track My Bunny dashboard showing health records and a weight chart',
        },
      ],
    },
    {
      slug: 'predskolacik',
      title: 'Predškoláčik',
      type: 'Web',
      description: 'Educational application for preschool-aged children that uses AI to generate interactive exercises. It develops early literacy, counting and logical thinking through play, adapting to each child\'s own pace.',
      longDescription:
        'Predškoláčik is an educational web application for preschool-aged children that uses artificial intelligence to generate interactive exercises tailored to each child’s pace and abilities. It develops early literacy, counting and logical thinking in a fun, playful way.\n\nExercises are generated dynamically so that children keep progressing and stay engaged. The app is designed to be easy for children to control while giving parents a clear overview.',
      features: [
        'Interactive exercises generated by artificial intelligence',
        'Builds early literacy, counting and logical thinking',
        'Difficulty adapted to each child’s pace',
        'Playful, colourful interface suited to preschoolers',
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'AI (LLM)', 'Tailwind CSS'],
      role: 'Solo developer',
      year: '2025',
      tags: ['Education', 'Artificial Intelligence', 'Learning Through Play'],
      projectUrl: 'https://predskolacik.app/',
      image: '/images/predskolacik.jpg',
      imageAlt: 'Screenshot of Predškoláčik – AI-powered interactive learning exercises for preschool children',
      screenshots: [
        {
          src: '/images/predskolacik.jpg',
          alt: 'An interactive learning exercise in the Predškoláčik app',
        },
      ],
    },
    {
      slug: 'pexesolab',
      title: 'Pexesolab',
      type: 'Web',
      description: 'Memory card game generator from your own images. Upload any photos and the app automatically creates a custom memory game using AI – ideal for teachers, parents and children.',
      longDescription:
        'Pexesolab is a tool that automatically turns your own photos into a memory card game. Users simply upload any images and the app uses artificial intelligence to generate a ready-to-play set of cards.\n\nThe project is aimed mainly at teachers, parents and children who want to quickly create a personalised memory game for educational or fun purposes.',
      features: [
        'Generates memory games from your own uploaded photos',
        'Automatic image processing powered by AI',
        'Instantly playable memory game in the browser',
        'Great for teachers, parents and children',
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'AI', 'Tailwind CSS'],
      role: 'Solo developer',
      year: '2025',
      tags: ['Education', 'Artificial Intelligence', 'Learning Through Play'],
      projectUrl: 'https://pexeso.predskolacik.app/',
      image: '/images/pexesolab.jpg',
      imageAlt: 'Screenshot of Pexesolab – custom memory card game generator from uploaded images',
      screenshots: [
        {
          src: '/images/pexesolab.jpg',
          alt: 'A generated memory card game in the Pexesolab app',
        },
      ],
    },
    {
      slug: 'sql-injection-lab',
      title: 'SQL Injection Lab',
      type: 'Web',
      description: 'A safe and legal laboratory for practising SQL Injection attack techniques. Features multiple levels with realistic scenarios, vulnerability explanations and defence tips – suitable for students and professionals alike.',
      longDescription:
        'SQL Injection Lab is an educational environment for safely and legally practising SQL Injection attack techniques. It features a series of levels with realistic scenarios in which users get hands-on experience with different types of vulnerabilities.\n\nEach level comes with an explanation of the vulnerability and tips on how to defend against it. The lab is suitable both for information-security students and for professionals who want to deepen their knowledge in a safe environment.',
      features: [
        'A series of levels with realistic SQL Injection scenarios',
        'Explanation of each vulnerability and how to defend against it',
        'Safe and legal practice environment',
        'Suitable for students and professionals alike',
      ],
      techStack: ['Next.js', 'TypeScript', 'Node.js', 'SQL', 'Docker'],
      role: 'Solo developer',
      year: '2024',
      tags: ['SQL Injection', 'Information Security', 'Education'],
      projectUrl: 'https://sqlinjectionlab.kromka.it/',
      githubUrl: 'https://github.com/xkromkad/SQLInjectionLab',
      image: '/images/sqlinjection.png',
      imageAlt: 'Screenshot of SQL Injection Lab – safe practice environment for web security skills',
      screenshots: [
        {
          src: '/images/sqlinjection.png',
          alt: 'A practice level in the SQL Injection Lab environment',
        },
      ],
    },
    {
      slug: 'mirka-a-david',
      title: 'Mirka & David',
      type: 'Web',
      description: 'Wedding website with guest information, day schedule, and photo uploading and sharing. Built as a custom gift for the newlyweds.',
      longDescription:
        'The Mirka & David wedding website was built as a custom gift for the newlyweds. It gives guests all the important information about the wedding day in one place – the schedule, venue and practical details.\n\nIt also lets guests upload and share photos, so everyone can exchange shots from the whole day and keep the memories in a single place.',
      features: [
        'Clear information and schedule for the wedding day',
        'Photo uploading and sharing between guests',
        'Custom design for the newlyweds',
        'Responsive interface for mobile and desktop',
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      role: 'Solo developer',
      year: '2024',
      tags: ['Wedding Website', 'Guest Information', 'Photo Sharing'],
      projectUrl: 'https://mirkaadavid.kromka.it/',
      githubUrl: 'https://github.com/xkromkad/mirkaadavid',
      image: '/images/svadba.png',
      imageAlt: 'Screenshot of Mirka & David wedding website – guest information and photo gallery',
      screenshots: [
        {
          src: '/images/svadba.png',
          alt: 'Landing page of the Mirka & David wedding website',
        },
      ],
    },
    {
      slug: 'toxipred-team',
      title: 'Toxipred – Team Page',
      type: 'Web',
      description: 'Team page for the TP CUP competition at FIIT STU. The project goal was to build a machine learning model for detecting genotoxicity of chemical substances.',
      longDescription:
        'Toxipred – Team Page was the representative website for our team in the TP CUP competition at FIIT STU. It introduces the team members, the project goal and its progress.\n\nThe goal of the project was to build a machine learning model for detecting the genotoxicity of chemical substances. The page was used to present the team and communicate progress throughout the competition.',
      features: [
        'Introduces the team and project goals',
        'Overview of progress during the TP CUP competition',
        'Representative design for an academic competition',
        'Responsive interface',
      ],
      techStack: ['Vue.js', 'Quasar', 'TypeScript', 'SCSS'],
      role: 'Team member – web development',
      year: '2023',
      tags: ['University Project', 'Team Page', 'Artificial Intelligence'],
      projectUrl: 'https://toxipred.kromka.it',
      githubUrl: 'https://github.com/xkromkad/Toxipred',
      image: '/images/toxipred_team.png',
      imageAlt: 'Screenshot of Toxipred team page for the TP CUP competition at FIIT STU Bratislava',
      screenshots: [
        {
          src: '/images/toxipred_team.png',
          alt: 'Toxipred team page for the TP CUP competition',
        },
      ],
    },
    {
      slug: 'toxipred-prediction',
      title: 'Toxipred – Genotoxicity Prediction',
      type: 'Web',
      description: 'Freely available tools for predicting phototoxicity and genotoxicity of chemical substances using machine learning. Developed as part of a research project at FIIT STU in collaboration with the research team.',
      longDescription:
        'Toxipred is a set of freely available tools for predicting the phototoxicity and genotoxicity of chemical substances using machine learning. It was created as part of a research project at FIIT STU in collaboration with the research team.\n\nThe tools let researchers quickly estimate the toxicological properties of substances without immediate laboratory testing, and are publicly available on the faculty domain.',
      features: [
        'Prediction of phototoxicity and genotoxicity of substances',
        'Models built on machine learning',
        'Freely available research tools',
        'Result of collaboration with the FIIT STU research team',
      ],
      techStack: ['Python', 'Machine Learning', 'scikit-learn', 'Flask'],
      role: 'Research team member',
      year: '2023',
      tags: ['University Project', 'Genotoxicity Prediction', 'Artificial Intelligence'],
      projectUrl: 'https://mltox.fiit.stuba.sk',
      image: '/images/toxipred.png',
      imageAlt: 'Screenshot of Toxipred genotoxicity prediction tool powered by machine learning',
      screenshots: [
        {
          src: '/images/toxipred.png',
          alt: 'Toxipred genotoxicity prediction tool',
        },
      ],
    },
  ],
};

/** Locale-agnostic list of project slugs (Slovak array is the canonical source). */
export function getProjectSlugs(): string[] {
  return portfolioData.sk.map((p) => p.slug);
}

/** Look up a single project by slug within a locale. */
export function getProjectBySlug(locale: Locale, slug: string): PortfolioItem | undefined {
  return portfolioData[locale].find((p) => p.slug === slug);
}

export interface FaqItem {
  question: Record<Locale, string>;
  answer: Record<Locale, string>;
}

export const faqItems: FaqItem[] = [
  {
    question: {
      sk: 'Aké služby ponúkate?',
      en: 'What services do you offer?',
    },
    answer: {
      sk: 'Venujem sa vývoju webových aplikácií na mieru, full-stack riešeniam (frontend aj backend), integrácii umelej inteligencie, návrhu a optimalizácii databáz, webovej prístupnosti podľa noriem WCAG a technickým konzultáciám a školeniam. Podrobnosti nájdete na stránke Služby.',
      en: 'I focus on custom web application development, full-stack solutions (frontend and backend), AI integration, database design and optimisation, web accessibility to WCAG standards, and technical consulting and training. You can find the details on the Services page.',
    },
  },
  {
    question: {
      sk: 'Koľko stojí web alebo webová aplikácia?',
      en: 'How much does a website or web application cost?',
    },
    answer: {
      sk: 'Cena vždy závisí od rozsahu a zložitosti projektu – jednoduchá prezentačná stránka je iná investícia než rozsiahla aplikácia s prihlasovaním, databázou a integráciami. Napíšte mi, o čo máte záujem, a po krátkej konzultácii vám pripravím nezáväznú cenovú ponuku.',
      en: 'The price always depends on the scope and complexity of the project – a simple presentation site is a different investment than a large application with logins, a database and integrations. Tell me what you have in mind and, after a short consultation, I will prepare a non-binding quote.',
    },
  },
  {
    question: {
      sk: 'Ako dlho trvá realizácia projektu?',
      en: 'How long does a project take?',
    },
    answer: {
      sk: 'Menšie stránky bývajú hotové v priebehu niekoľkých týždňov, väčšie aplikácie trvajú dlhšie podľa rozsahu. Po úvodnej analýze vašich požiadaviek vám viem dať konkrétny odhad termínu.',
      en: 'Smaller sites are usually finished within a few weeks; larger applications take longer depending on scope. After an initial analysis of your requirements I can give you a concrete timeline estimate.',
    },
  },
  {
    question: {
      sk: 'Pracujete na diaľku alebo len v Poprade?',
      en: 'Do you work remotely or only in Poprad?',
    },
    answer: {
      sk: 'Sídlim v Poprade, no pracujem pre klientov z celého Slovenska aj zo zahraničia. Väčšina spolupráce prebieha pohodlne na diaľku, osobné stretnutie v regióne Poprad je však tiež možné.',
      en: 'I am based in Poprad, but I work with clients from all over Slovakia and abroad. Most collaboration runs comfortably online, though an in-person meeting in the Poprad region is also possible.',
    },
  },
  {
    question: {
      sk: 'Aké technológie používate?',
      en: 'What technologies do you use?',
    },
    answer: {
      sk: 'Na backende pracujem najmä s ASP.NET Core, Blazor a .NET, na frontende s Next.js, React a Vue.js. K tomu databázy MS SQL Server, T-SQL a PostgreSQL. Technológiu vždy volím podľa toho, čo sa najlepšie hodí pre váš projekt.',
      en: 'On the backend I mainly use ASP.NET Core, Blazor and .NET; on the frontend Next.js, React and Vue.js. Alongside that, MS SQL Server, T-SQL and PostgreSQL databases. I always choose the technology that best fits your project.',
    },
  },
  {
    question: {
      sk: 'Poskytujete údržbu a podporu po spustení?',
      en: 'Do you provide maintenance and support after launch?',
    },
    answer: {
      sk: 'Áno. Po spustení sa viem postarať o údržbu, aktualizácie, opravy chýb aj ďalší rozvoj aplikácie. Podmienky podpory dohodneme podľa vašich potrieb.',
      en: 'Yes. After launch I can take care of maintenance, updates, bug fixes and further development of the application. We agree on the support terms according to your needs.',
    },
  },
  {
    question: {
      sk: 'Viete prevziať alebo doplniť existujúci projekt?',
      en: 'Can you take over or extend an existing project?',
    },
    answer: {
      sk: 'Áno. Viem prevziať rozpracovaný projekt, preveriť existujúci kód a databázu, opraviť problémy alebo doplniť nové funkcie – bez toho, aby ste museli všetko prepisovať od začiatku.',
      en: 'Yes. I can take over an in-progress project, review the existing code and database, fix issues or add new features – without you having to rewrite everything from scratch.',
    },
  },
  {
    question: {
      sk: 'Robíte weby prístupné podľa noriem WCAG?',
      en: 'Do you make websites accessible to WCAG standards?',
    },
    answer: {
      sk: 'Áno. Prístupnosť som testoval aj pre štátnu správu (Ministerstvo investícií, regionálneho rozvoja a informatizácie SR). Viem pripraviť audit prístupnosti alebo rovno upraviť web tak, aby ho mohol používať naozaj každý.',
      en: 'Yes. I have tested accessibility for public administration too (the Ministry of Investments, Regional Development and Informatisation of the SR). I can prepare an accessibility audit or adapt the site directly so that it can genuinely be used by everyone.',
    },
  },
  {
    question: {
      sk: 'V akom jazyku môžeme komunikovať?',
      en: 'What languages can we communicate in?',
    },
    answer: {
      sk: 'Bežne komunikujem v slovenčine a angličtine. Anglicky som prekladal aj vzdelávacie materiály, takže medzinárodná spolupráca nie je problém.',
      en: 'I communicate regularly in Slovak and English. I have also translated educational materials into English, so international collaboration is no problem.',
    },
  },
];

/** Locale-agnostic list of service slugs. */
export function getServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

/** Look up a single service by slug (per-locale fields are indexed at render time). */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

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
