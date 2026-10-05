export const translations = {
  en: {
    intro: {
      eyebrow: "A PERSONAL PORTFOLIO",
      titleStart: "A little ",
      titleAccent: "about me.",
      description:
        "The journey that shaped my curiosity and creativity.",
      explore: "Explore my story",
    },
    bio: {
      name: "Vilius",
      role: "Full-stack developer · Always learning",
      location: "Based in Norway",
      text: "Hi, I'm Vilius. I love exploring new ideas, solving meaningful problems, and turning concepts into real, working products. This portfolio is a small corner of the internet where I share my journey as a developer and the things I've been creating.",
      label: "THE PERSON BEHIND THE PAGE",
      availability: "Open to new opportunities",
      imageAlt: "Pixel-art portrait of Vilius",
    },
    journey: {
      eyebrow: "MY JOURNEY",
      title: "The things that",
      titleAccent: "make me, me.",
      description:
        "Pick a bubble to explore a chapter. Click the active one again to see what came next.",
      next: "Next chapter",
      previous: "Previous",
      itemOf: "of",
      categories: [
        {
          id: "work",
          name: "Work experience",
          shortName: "Work",
          icon: "✳",
          entries: [
            {
              date: "SEPTEMBER 2025 — MAY 2026",
              title: "IT Development Apprentice",
              organization: "Brødrene Midthaug AS · Norway",
              description:
                "Built frontend and backend web applications for the company, including a production tool to reduce material waste and a web-based system replacing Excel production tracking.",
              tags: [
                "C#",
                ".NET 10",
                "Entity Framework",
                "Blazor",
                "Bootstrap",
                "SQL Server",
                "Azure DevOps",
              ],
            },
            {
              date: "2021 — 2023",
              title: "Work Placement",
              organization: "Ulstein Ulshav · Norway",
              description:
                "Handled varied practical tasks, including packing fruit and delivering packages and firewood. Also gained first programming experience contributing to an internal company project.",
              tags: ["Django", "Python", "JavaScript", "Git"],
            },
            {
              date: "2019 — 2021",
              title: "Various IT Work Placements",
              organization:
                "Furene Volda, Ulstein Vidaregåande Skule & Klevel Verft AS · Norway",
              description:
                "Provided IT support across several placements: prepared computers for new employees, registered user accounts, and troubleshot printers and other technical issues.",
              tags: [
                "IT Support",
                "Computer Setup",
                "User Administration",
                "Troubleshooting",
              ],
            },
          ],
        },
        {
          id: "education",
          name: "Education",
          shortName: "Education",
          icon: "⌂",
          entries: [
            {
              date: "MAY 2026",
              title: "IT Developer — Trade Examination",
              organization: "Romsdal Videregående Skole · Norway",
              description:
                "Passed the IT developer trade examination as a private candidate, demonstrating strong practical skills and self-directed learning.",
              tags: [
                "IT Development",
                "Practical Skills",
                "Self-directed Learning",
              ],
            },
            {
              date: "2018 — 2019",
              title: "ICT Service Subjects (Upper Secondary)",
              organization: "Ulstein Videregående Skole · Norway",
              description:
                "Completed training in IT operations, troubleshooting, user support and data security, with hands-on experience in networks, hardware, software and digital services.",
              tags: [
                "IT Operations",
                "Networking",
                "Hardware & Software",
                "User Support",
                "Data Security",
              ],
            },
            {
              date: "2016 — 2018",
              title: "Building and Construction (Upper Secondary)",
              organization: "Herøy Videregående Skole · Norway",
              description:
                "Developed practical craftsmanship and safe tool-handling skills, worked with wood and concrete, read technical drawings and followed structured safety practices.",
              tags: [
                "Craftsmanship",
                "Wood & Concrete",
                "Technical Drawings",
                "Health & Safety",
              ],
            },
          ],
        },
        {
          id: "courses",
          name: "Courses",
          shortName: "Courses",
          icon: "✳",
          entries: [
            {
              date: "SEPTEMBER 2024 — SEPTEMBER 2025",
              title: "Kodehode Course — IT Development",
              organization: "Jobloop AS",
              description:
                "Completed a full-stack development program covering HTML, CSS, JavaScript, React with Vite, Node.js, Express, MS SQL, Git and Figma. Additional modules included cybersecurity, ethics, employee engagement, time management, Design Thinking, GDPR and project management.",
              tags: [
                "HTML & CSS",
                "JavaScript",
                "React & Vite",
                "Node.js & Express",
                "MS SQL",
                "Git",
                "Figma",
                "Cybersecurity",
                "GDPR",
                "Project Management",
              ],
            },
            {
              date: "SEPTEMBER 2025 — DECEMBER 2025",
              title: "Professional Development Courses",
              organization: "iamtimcorey.com",
              description:
                "Completed targeted courses to strengthen backend and full-stack skills, including Dapper, Microsoft SQL, Bootstrap 5, Navigating AI, Blazor, C# MasterCourse and Database DevOps.",
              tags: [
                "Dapper",
                "Microsoft SQL",
                "Bootstrap 5",
                "Blazor",
                "C#",
                "Database DevOps",
                "AI",
              ],
            },
            {
              date: "JANUARY 2026 — APRIL 2026",
              title: "Exploration of Languages & Technologies",
              organization: "Boot.dev",
              description:
                "Expanded my technical knowledge through beginner-to-intermediate courses in Python, SQL, Git, TypeScript and Go.",
              tags: [
                "Python",
                "SQL",
                "Git",
                "TypeScript",
                "Go",
                "Self-directed Learning",
              ],
            },
          ],
        },
        {
          id: "projects",
          name: "Projects",
          shortName: "Projects",
          icon: "↗",
          entries: [
            {
              date: "JANUARY 2026 — MAY 2026",
              title: "Lakkplan",
              organization: "IT Development Apprentice Project",
              description:
                "Developed a web application to replace the company’s Excel-based production tracking with a modern solution, improving workflow structure and making production progress easier to monitor.",
              tags: [
                "Entity Framework",
                ".NET 10",
                "Blazor",
                "SQL Server",
                "Production Tracking",
              ],
            },
            {
              date: "SEPTEMBER 2025 — JANUARY 2026",
              title: "Sjekkliste",
              organization: "IT Development Apprentice Project",
              description:
                "Built a digital checklist application to help reduce wasted materials during production. Retrieved data from cloud services through API calls to support a more reliable and structured workflow.",
              tags: [
                "C#",
                "Blazor",
                "Entity Framework",
                "SQL Server",
                "Azure DevOps",
                "Bootstrap",
                "API Integration",
              ],
            },
            {
              date: "SEPTEMBER 2024 — SEPTEMBER 2025",
              title: "Kodehode Course Projects",
              organization: "Full-stack Development Program",
              description:
                "Built several practical projects: a weather app displaying location-based forecasts through API calls, a Christmas calendar with daily jokes and opened-day states, and a cinema ticket-ordering interface for selecting films and ticket quantities.",
              tags: [
                "JavaScript",
                "HTML",
                "CSS",
                "React",
                "Node.js",
                "Express",
                "Git",
                "Figma",
                "API Integration",
              ],
            },
            {
              date: "DECEMBER 2024",
              title: "Quiz Game",
              organization: "Personal Project · Built during Kodehode",
              description:
                "Created a browser-based quiz game for two competing teams. Each game randomly selects five themes from a set of 20, with five questions per theme worth 100 to 500 points, plus playful features to make repeated games more engaging.",
              tags: [
                "Browser Game",
                "Two-Team Gameplay",
                "Randomized Themes",
                "Scoring System",
              ],
            },
          ],
        },
        {
          id: "hobbies",
          name: "Hobbies",
          shortName: "Hobbies",
          icon: "♡",
          entries: [
            {
              date: "ALWAYS EXPLORING",
              title: "AI Technologies",
              organization: "Curiosity about what comes next",
              description:
                "I’m fascinated by how AI is becoming part of everyday life. I enjoy following new breakthroughs and imagining where the field could go next—including the possibility of AGI one day.",
              tags: ["Artificial Intelligence", "Emerging Tech", "AGI"],
            },
            {
              date: "ALWAYS BUILDING",
              title: "Programming",
              organization: "A passion sparked at Kodehode",
              description:
                "I discovered my passion for programming during the Kodehode course and have practised ever since. I enjoy learning different languages for their individual strengths, especially C# and React, which I’ve used extensively in real projects.",
              tags: ["C#", "React", "Continuous Learning"],
            },
            {
              date: "BUILDING SAFELY",
              title: "Cybersecurity",
              organization: "Security in real-world applications",
              description:
                "Working on real applications has made me more interested in cybersecurity. Building safe and reliable systems matters to me, and I’m considering formal cybersecurity studies in the future.",
              tags: ["Application Security", "Secure Systems", "Future Studies"],
            },
            {
              date: "CREATIVE CODE",
              title: "Game Development",
              organization: "Where challenge meets creativity",
              description:
                "Game development combines the challenge of programming with creative problem-solving. I’ve built several small game-related projects and am currently working on a larger one. It’s the most fun and rewarding area of programming for me.",
              tags: ["Game Development", "Creative Coding", "Personal Projects"],
            },
            {
              date: "TIME TO PLAY",
              title: "Gaming",
              organization: "Strategy and survival",
              description:
                "Gaming has been a favourite hobby for years. I’m drawn more to strategy and survival games, where creativity and planning matter more than speed, than to competitive titles.",
              tags: ["Strategy Games", "Survival Games", "Creative Thinking"],
            },
            {
              date: "A LIFELONG INTEREST",
              title: "Basketball",
              organization: "Following the NBA",
              description:
                "I’ve been interested in basketball since childhood and still enjoy following the NBA from time to time. It’s the sport I feel most connected to.",
              tags: ["Basketball", "NBA", "Sports"],
            },
            {
              date: "ALWAYS LEARNING",
              title: "History & Geography",
              organization: "Cultures, places and world events",
              description:
                "History and geography were my favourite school subjects and still are. I enjoy historical documentaries, learning about different cultures and keeping up with events around the world.",
              tags: ["History", "Geography", "Documentaries"],
            },
            {
              date: "A SOUNDTRACK FOR EVERYTHING",
              title: "Music",
              organization: "Different genres for different moments",
              description:
                "I listen to a wide range of music. Instrumental music and lo-fi hip-hop are favourites while programming; for exercise, I switch to more energetic rock, electronic and house.",
              tags: ["Lo-fi Hip-hop", "Rock", "Electronic & House"],
            },
            {
              date: "LOOKING AHEAD",
              title: "Technology",
              organization: "Robotics, AI and space exploration",
              description:
                "I love following emerging technology, from robotics and AI to space exploration. The possibility of humans one day colonizing Mars especially excites me.",
              tags: ["Robotics", "Artificial Intelligence", "Space"],
            },
            {
              date: "MOVIE NIGHT",
              title: "Movies",
              organization: "Documentaries, comedies and fantasy",
              description:
                "I enjoy films across many genres, especially documentaries and comedies. I tend to skip horror, and my favourites include the Harry Potter films and Game of Thrones.",
              tags: ["Documentaries", "Comedy", "Fantasy"],
            },
          ],
        },
      ],
    },
    footer: "A little page about a person who’s still becoming.",
  },
  no: {
    intro: {
      eyebrow: "EN PERSONLIG PORTFØLJE",
      titleStart: "Min ",
      titleAccent: "utviklerprofil",
      description:
        "Reisen som formet nysgjerrigheten og kreativiteten min.",
      explore: "Utforsk historien min",
    },
    bio: {
      name: "Vilius",
      role: "Fullstackutvikler · Alltid lærende",
      location: "Holder til i Norge",
      text: "Hei, jeg heter Vilius. Jeg liker å utforske nye ideer, løse meningsfulle problemer og gjøre konsepter om til fungerende produkter. Denne porteføljen er et lite hjørne av internett der jeg deler reisen min som utvikler og det jeg har laget.",
      label: "PERSONEN BAK SIDEN",
      availability: "Åpen for nye muligheter",
      imageAlt: "Pikselkunstportrett av Vilius",
    },
    journey: {
      eyebrow: "MIN REISE",
      title: "Kompetanse og",
      titleAccent: "erfaring",
      description:
        "Velg en boble for å utforske et kapittel. Klikk på den aktive boblen igjen for å se hva som skjedde videre.",
      next: "Neste kapittel",
      previous: "Forrige",
      itemOf: "av",
      categories: [
        {
          id: "work",
          name: "Arbeidserfaring",
          shortName: "Jobb",
          icon: "✳",
          entries: [
            {
              date: "SEPTEMBER 2025 — MAI 2026",
              title: "IT-utviklerlærling",
              organization: "Brødrene Midthaug AS · Norge",
              description:
                "Utviklet frontend- og backend-applikasjoner for bedriften, blant annet et produksjonsverktøy som reduserte materialsvinn og et nettbasert system som erstattet Excel-basert produksjonssporing.",
              tags: [
                "C#",
                ".NET 10",
                "Entity Framework",
                "Blazor",
                "Bootstrap",
                "SQL Server",
                "Azure DevOps",
              ],
            },
            {
              date: "2021 — 2023",
              title: "Arbeidspraksis",
              organization: "Ulstein Ulshav · Norge",
              description:
                "Utførte varierte praktiske oppgaver, blant annet pakking av frukt og levering av pakker og ved. Fikk også min første erfaring med programmering gjennom et internt bedriftsprosjekt.",
              tags: ["Django", "Python", "JavaScript", "Git"],
            },
            {
              date: "2019 — 2021",
              title: "Ulike IT-praksisplasser",
              organization:
                "Furene Volda, Ulstein vidaregåande skule og Klevel Verft AS · Norge",
              description:
                "Bidro med IT-støtte på flere praksisplasser: klargjorde PC-er for nyansatte, registrerte brukerkontoer og feilsøkte skrivere og andre tekniske problemer.",
              tags: [
                "IT-støtte",
                "PC-klargjøring",
                "Brukeradministrasjon",
                "Feilsøking",
              ],
            },
          ],
        },
        {
          id: "education",
          name: "Utdanning",
          shortName: "Utdanning",
          icon: "⌂",
          entries: [
            {
              date: "MAI 2026",
              title: "IT-utvikler — fagprøve",
              organization: "Romsdal videregående skole · Norge",
              description:
                "Besto fagprøven i IT-utviklerfaget som praksiskandidat, og viste sterke praktiske ferdigheter og evne til selvstendig læring.",
              tags: [
                "IT-utvikling",
                "Praktiske ferdigheter",
                "Selvstendig læring",
              ],
            },
            {
              date: "2018 — 2019",
              title: "IKT-servicefag (VGS)",
              organization: "Ulstein vidaregåande skule · Norge",
              description:
                "Fullførte opplæring i IT-drift, feilsøking, brukerstøtte og datasikkerhet, med praktisk erfaring innen nettverk, maskinvare, programvare og digitale tjenester.",
              tags: [
                "IT-drift",
                "Nettverk",
                "Maskinvare og programvare",
                "Brukerstøtte",
                "Datasikkerhet",
              ],
            },
            {
              date: "2016 — 2018",
              title: "Byggteknikk (VGS)",
              organization: "Herøy vidaregåande skule · Norge",
              description:
                "Utviklet praktiske håndverksferdigheter og trygg verktøybruk, jobbet med tre og betong, leste tekniske tegninger og fulgte strukturerte HMS-rutiner.",
              tags: [
                "Håndverk",
                "Tre og betong",
                "Tekniske tegninger",
                "HMS",
              ],
            },
          ],
        },
        {
          id: "courses",
          name: "Kurs",
          shortName: "Kurs",
          icon: "✳",
          entries: [
            {
              date: "SEPTEMBER 2024 — SEPTEMBER 2025",
              title: "Kodehodekurs – IT-utvikling",
              organization: "Jobloop AS",
              description:
                "Fullførte et fullstack-program innen HTML, CSS, JavaScript, React med Vite, Node.js, Express, MS SQL, Git og Figma. Programmet dekket også cybersikkerhet, etikk, medarbeiderengasjement, tidsstyring, Design Thinking, GDPR og prosjektledelse.",
              tags: [
                "HTML & CSS",
                "JavaScript",
                "React & Vite",
                "Node.js & Express",
                "MS SQL",
                "Git",
                "Figma",
                "Cybersikkerhet",
                "GDPR",
                "Prosjektledelse",
              ],
            },
            {
              date: "SEPTEMBER 2025 — DESEMBER 2025",
              title: "Kurs i faglig utvikling",
              organization: "iamtimcorey.com",
              description:
                "Tok målrettede kurs for å styrke kompetansen innen backend- og fullstackutvikling, blant annet Dapper, Microsoft SQL, Bootstrap 5, Navigating AI, Blazor, C# MasterCourse og Database DevOps.",
              tags: [
                "Dapper",
                "Microsoft SQL",
                "Bootstrap 5",
                "Blazor",
                "C#",
                "Database DevOps",
                "AI",
              ],
            },
            {
              date: "JANUAR 2026 — APRIL 2026",
              title: "Utforsking av språk og teknologier",
              organization: "Boot.dev",
              description:
                "Utvidet teknologikompetansen gjennom kurs fra nybegynner- til mellomnivå innen Python, SQL, Git, TypeScript og Go.",
              tags: [
                "Python",
                "SQL",
                "Git",
                "TypeScript",
                "Go",
                "Selvstendig læring",
              ],
            },
          ],
        },
        {
          id: "projects",
          name: "Prosjekter",
          shortName: "Prosjekter",
          icon: "↗",
          entries: [
            {
              date: "JANUAR 2026 — MAI 2026",
              title: "Lakkplan",
              organization: "Prosjekt som IT-utviklerlærling",
              description:
                "Utviklet en nettapplikasjon som erstattet bedriftens Excel-baserte produksjonssporing med en moderne løsning, forbedret arbeidsflyten og gjorde det enklere å følge produksjonsfremdriften.",
              tags: [
                "Entity Framework",
                ".NET 10",
                "Blazor",
                "SQL Server",
                "Produksjonssporing",
              ],
            },
            {
              date: "SEPTEMBER 2025 — JANUAR 2026",
              title: "Sjekkliste",
              organization: "Prosjekt som IT-utviklerlærling",
              description:
                "Utviklet en digital sjekklisteapplikasjon som bidro til å redusere materialsvinn i produksjonen. Hentet data fra skytjenester via API-kall for å støtte en mer pålitelig og strukturert arbeidsflyt.",
              tags: [
                "C#",
                "Blazor",
                "Entity Framework",
                "SQL Server",
                "Azure DevOps",
                "Bootstrap",
                "API-integrasjon",
              ],
            },
            {
              date: "SEPTEMBER 2024 — SEPTEMBER 2025",
              title: "Kodehodeprosjekter",
              organization: "Fullstackutviklingsprogram",
              description:
                "Utviklet flere praktiske prosjekter: en værapp som viste stedsbaserte værdata via API-kall, en julekalender med daglige vitser og åpne-status, og et kinobestillingsgrensesnitt der brukere kunne velge film og antall billetter.",
              tags: [
                "JavaScript",
                "HTML",
                "CSS",
                "React",
                "Node.js",
                "Express",
                "Git",
                "Figma",
                "API-integrasjon",
              ],
            },
            {
              date: "DESEMBER 2024",
              title: "Quiz Game",
              organization: "Eget prosjekt · Laget under Kodehode",
              description:
                "Lagde et nettleserbasert quizspill for to konkurrerende lag. Hvert spill velger tilfeldig fem temaer blant 20, med fem spørsmål per tema og poengverdier fra 100 til 500. Flere morsomme funksjoner gjorde det gøy å spille flere ganger.",
              tags: [
                "Nettleserspill",
                "To lag",
                "Tilfeldige temaer",
                "Poengsystem",
              ],
            },
          ],
        },
        {
          id: "hobbies",
          name: "Fritid",
          shortName: "Fritid",
          icon: "♡",
          entries: [
            {
              date: "ALLTID UTFORSKENDE",
              title: "AI-teknologi",
              organization: "Nysgjerrig på hva som kommer",
              description:
                "Jeg er fascinert av hvordan kunstig intelligens blir en naturlig del av hverdagen. Jeg liker å følge med på nye gjennombrudd og forestille meg hvor feltet kan ta oss, kanskje helt frem til AGI.",
              tags: ["Kunstig intelligens", "Ny teknologi", "AGI"],
            },
            {
              date: "ALLTID SKAPENDE",
              title: "Programmering",
              organization: "En interesse som startet på Kodehode",
              description:
                "Jeg oppdaget lidenskapen for programmering på Kodehode og har øvd og lært siden. Jeg liker å lære ulike språk og hva de er gode til, spesielt C# og React, som jeg har brukt mye i reelle prosjekter.",
              tags: ["C#", "React", "Kontinuerlig læring"],
            },
            {
              date: "TRYGG UTVIKLING",
              title: "Cybersikkerhet",
              organization: "Sikkerhet i reelle applikasjoner",
              description:
                "Arbeid med reelle applikasjoner har gjort meg mer interessert i cybersikkerhet. Det er viktig for meg å bygge trygge og pålitelige systemer, og jeg vurderer formell utdanning innen cybersikkerhet i fremtiden.",
              tags: ["Applikasjonssikkerhet", "Sikre systemer", "Videreutdanning"],
            },
            {
              date: "KREATIV KODE",
              title: "Spillutvikling",
              organization: "Der utfordring møter kreativitet",
              description:
                "Spillutvikling kombinerer programmeringsutfordringer med kreativ problemløsing. Jeg har laget flere små spillrelaterte prosjekter og jobber nå med et større. Dette er den morsomste og mest givende delen av programmering for meg.",
              tags: ["Spillutvikling", "Kreativ koding", "Egne prosjekter"],
            },
            {
              date: "TID FOR SPILL",
              title: "Gaming",
              organization: "Strategi og overlevelse",
              description:
                "Gaming har vært en favoritthobby i mange år. Jeg foretrekker strategi- og overlevelsesspill, der kreativitet og planlegging betyr mer enn fart, fremfor konkurransespill.",
              tags: ["Strategispill", "Overlevelsesspill", "Kreativ tenkning"],
            },
            {
              date: "EN LANGVARIG INTERESSE",
              title: "Basketball",
              organization: "Følger NBA",
              description:
                "Jeg har vært interessert i basketball siden barndommen og følger fortsatt NBA innimellom. Det er sporten jeg føler sterkest tilknytning til.",
              tags: ["Basketball", "NBA", "Sport"],
            },
            {
              date: "ALLTID LÆRENDE",
              title: "Historie og geografi",
              organization: "Kulturer, steder og verdenshendelser",
              description:
                "Historie og geografi var favorittfagene mine på skolen, og det er de fortsatt. Jeg liker historiske dokumentarer, å lære om ulike kulturer og å følge med på det som skjer i verden.",
              tags: ["Historie", "Geografi", "Dokumentarer"],
            },
            {
              date: "ET LYDSPOR FOR ALT",
              title: "Musikk",
              organization: "Ulike sjangre til ulike øyeblikk",
              description:
                "Jeg lytter til mange forskjellige sjangre. Instrumental musikk og lo-fi hiphop passer best når jeg programmerer; under trening velger jeg mer energisk rock, elektronisk musikk eller house.",
              tags: ["Lo-fi hiphop", "Rock", "Elektronisk og house"],
            },
            {
              date: "BLIKK MOT FREMTIDEN",
              title: "Teknologi",
              organization: "Robotikk, KI og romfart",
              description:
                "Jeg liker å følge med på ny teknologi, fra robotikk og KI til romfart. Tanken på at mennesker en dag kan bosette seg på Mars gjør meg spesielt begeistret.",
              tags: ["Robotikk", "Kunstig intelligens", "Romfart"],
            },
            {
              date: "FILMKVELD",
              title: "Filmer",
              organization: "Dokumentarer, komedier og fantasy",
              description:
                "Jeg liker filmer i mange sjangre, spesielt dokumentarer og komedier. Jeg er ikke så glad i skrekkfilmer, og Harry Potter-filmene og Game of Thrones er blant favorittene mine.",
              tags: ["Dokumentarer", "Komedie", "Fantasy"],
            },
          ],
        },
      ],
    },
    footer: "En liten side om et menneske som fortsatt vokser.",
  },
};
