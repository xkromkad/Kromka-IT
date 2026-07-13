export type Locale = 'sk' | 'en';

export interface Service {
  icon: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}

export const services: Service[] = [
  {
    icon: 'web',
    title: {
      sk: 'Vývoj webových aplikácií',
      en: 'Web Application Development',
    },
    description: {
      sk: 'Návrh a vývoj moderných webových aplikácií na mieru – od prvého konceptu cez implementáciu až po nasadenie.',
      en: 'Designing and building modern, custom web applications – from the first concept through implementation to deployment.',
    },
  },
  {
    icon: 'fullstack',
    title: {
      sk: 'Full-stack riešenia',
      en: 'Full-stack Solutions',
    },
    description: {
      sk: 'Kompletný frontend aj backend v ASP.NET Core, Blazor, Vue.js či Next.js. Jeden partner pre celý projekt.',
      en: 'Complete frontend and backend in ASP.NET Core, Blazor, Vue.js or Next.js. One partner for the whole project.',
    },
  },
  {
    icon: 'ai',
    title: {
      sk: 'Integrácia umelej inteligencie',
      en: 'AI Integration',
    },
    description: {
      sk: 'Prepojenie aplikácií s jazykovými modelmi a AI nástrojmi – inteligentné generovanie obsahu, asistenti a automatizácia.',
      en: 'Connecting applications with language models and AI tools – smart content generation, assistants and automation.',
    },
  },
  {
    icon: 'database',
    title: {
      sk: 'Databázy a dáta',
      en: 'Databases & Data',
    },
    description: {
      sk: 'Návrh, optimalizácia a programovanie databáz v MS SQL Server, T-SQL a PostgreSQL pre výkonné a spoľahlivé aplikácie.',
      en: 'Designing, optimising and programming databases in MS SQL Server, T-SQL and PostgreSQL for fast, reliable applications.',
    },
  },
  {
    icon: 'accessibility',
    title: {
      sk: 'Webová prístupnosť (WCAG)',
      en: 'Web Accessibility (WCAG)',
    },
    description: {
      sk: 'Testovanie a úprava webových sídiel a mobilných aplikácií podľa noriem WCAG, aby boli prístupné pre všetkých.',
      en: 'Testing and adapting websites and mobile applications to WCAG standards so they are accessible to everyone.',
    },
  },
  {
    icon: 'teaching',
    title: {
      sk: 'Školenia a konzultácie',
      en: 'Training & Consulting',
    },
    description: {
      sk: 'Výuka programovania a technické konzultácie – od základov po pokročilé témy, prispôsobené tempu a cieľom.',
      en: 'Programming lessons and technical consulting – from basics to advanced topics, tailored to your pace and goals.',
    },
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
