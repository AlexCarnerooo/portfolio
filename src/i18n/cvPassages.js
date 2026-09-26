// Fragmentos del CV que indexa "Pregúntale a mi CV", en cada idioma.
// `keywords` no se muestra: solo amplía el vocabulario para que preguntas
// formuladas de otra forma encuentren el fragmento.
export const cv = {
  en: {
    suggestions: [
      'Where do you work now?',
      'What did you study?',
      'Have you built agents with LLMs?',
      'What awards have you won?',
      'What languages do you speak?',
    ],
    stopwords: 'a about an and any are as at be been by can did do does for from had has have how in is it its me my of on or so than that the this to was were what when where which who why will with you your',
    passages: [
      // Education
      { section: 'Education', text: 'I graduated in Business and Technology from the University of Santiago de Compostela (2022–2026).', keywords: 'study studied studies degree university bachelor education graduated USC' },
      { section: 'Education', text: "I earned an Honours distinction in Machine Learning (9.7/10). My bachelor's thesis is on linear algebra applied to portfolio management.", keywords: 'grades thesis honours studies study' },
      { section: 'Education', text: 'My best grades: Big Data Technologies (10/10), Information Systems for Finance with R (10/10) and Machine Learning (9.7/10). Average in technical subjects: 8.5/10.', keywords: 'grades subjects marks gpa studies study' },
      { section: 'Education', text: 'From September 2025 to January 2026 I did an Erasmus exchange at IMC University of Applied Sciences in Krems (Austria), with courses in Startup Management and Computer Engineering.', keywords: 'study studies abroad international austria erasmus exchange' },

      // Experience
      { section: 'Experience', text: 'I currently work at Indra as a Cybersecurity & AI Analyst on the Inditex project, analysing security data across the whole company to assess its cybersecurity posture.', keywords: 'work job current company now working cybersecurity indra inditex' },
      { section: 'Experience', text: 'At Indra I use Python and Snowflake to build and maintain cybersecurity data pipelines, with Azure DevOps and CI/CD for development and deployment.', keywords: 'work job technologies data cybersecurity indra stack' },
      { section: 'Experience', text: 'From February to June 2026 I was an AI Engineer intern at Tesla Technologies, developing machine learning models for threat detection and risk analysis and contributing to LLM agents with LangGraph.', keywords: 'internship intern work threats agents built' },
      { section: 'Experience', text: 'As a B2B freelancer I built and sold a real estate scraping system with Python and Selenium for lead generation.', keywords: 'freelance clients projects scraping real estate business sold entrepreneur' },
      { section: 'Experience', text: "I've also built SaaS-style automation tools with LLMs and n8n for real estate agencies, investors and advisory firms.", keywords: 'automation n8n saas freelance clients projects' },
      { section: 'Experience', text: "I was a judo instructor from 2019 to 2025. I'm a 2nd Dan black belt and have coached national-level athletes.", keywords: 'sport judo hobbies coach leadership teacher' },

      // Awards
      { section: 'Awards', text: '1st prize at USC Lugo Emprende, an entrepreneurship competition at the University of Santiago de Compostela.', keywords: 'awards prizes won win competitions achievements entrepreneurship' },
      { section: 'Awards', text: '1st place at Hack Day USC-LOF with a sustainable festivals project.', keywords: 'hackathon hackathons awards won win achievements' },
      { section: 'Awards', text: '1st place (international) at Terra Creative Jam for rural opportunity innovation, and 2nd place (international) at the Rural Youth of Europe Creative Jam in Malta.', keywords: 'hackathon hackathons awards won win international achievements' },
      { section: 'Awards', text: "Local winner and national finalist at Santander X Explorer, and regional winner and national finalist in Grupo Hotusa's innovation programme.", keywords: 'awards won win entrepreneurship achievements' },
      { section: 'Awards', text: 'The European Commission selected me as an EU Ambassador for the ATLIC programme, where I also received the Blue Leader recognition.', keywords: 'europe awards leadership achievements' },

      // Skills
      { section: 'Skills', text: 'In AI I work with LLMs, advanced RAG, multi-agent systems with LangChain and LangGraph, embeddings and Hugging Face.', keywords: 'technologies skills stack artificial intelligence agents built build' },
      { section: 'Skills', text: 'For retrieval I use vector databases such as Qdrant, ChromaDB and Pinecone, and BGE-M3 for multi-stage retrieval and re-ranking.', keywords: 'rag vectors search technologies skills' },
      { section: 'Skills', text: 'In machine learning: supervised and unsupervised learning, feature engineering, model evaluation, PyTorch and TensorFlow.', keywords: 'technologies skills models' },
      { section: 'Skills', text: 'For data I work with Python, Pandas, NumPy, SQL (PostgreSQL), Snowflake and ETL/ELT processes.', keywords: 'technologies skills analysis' },
      { section: 'Skills', text: 'Tools: Git, GitHub, Linux, Docker, Azure DevOps, CI/CD and Grafana. Web: JavaScript, React, Next.js, HTML and CSS.', keywords: 'technologies skills development frontend' },

      // Other
      { section: 'Languages', text: 'I speak Spanish and Galician (native), English B2 (Oxford, preparing for C1), intermediate Portuguese and basic German.', keywords: 'languages speak spoken' },
      { section: 'International', text: "I've taken part in Erasmus+ projects in Italy (Green Olives Europe) and Croatia (Partnerships seminar), and led an international volunteering team in Germany.", keywords: 'volunteering international travel abroad' },
      { section: 'About me', text: "I'm from Ferrol, Galicia (Spain).", keywords: 'live location city based from' },
      { section: 'Contact', text: "I'm open to new opportunities. You can email me at alexandrecarnerop@gmail.com or use the contact form.", keywords: 'contact available email hire opportunities reach' },
    ],
  },

  es: {
    suggestions: [
      '¿Dónde trabajas ahora?',
      '¿Qué estudiaste?',
      '¿Has construido agentes con LLMs?',
      '¿Qué premios has ganado?',
      '¿Qué idiomas hablas?',
    ],
    stopwords: 'a al algo como con de del el en es esta este fue ha han has he la las le lo los me mi mis mas o para pero por que se si sin sobre son su sus te tu tus un una uno unos y ya yo cual cuales donde quien',
    passages: [
      // Formación
      { section: 'Formación', text: 'Soy graduado en Empresa y Tecnología por la Universidad de Santiago de Compostela (2022–2026).', keywords: 'estudios estudiar carrera grado universidad titulación formación USC' },
      { section: 'Formación', text: 'Obtuve Matrícula de Honor en Machine Learning (9,7/10). Mi Trabajo de Fin de Grado trata sobre álgebra lineal aplicada a la gestión de carteras.', keywords: 'notas TFG tesis aprendizaje automático estudios matrícula' },
      { section: 'Formación', text: 'Mis mejores notas: Big Data Technologies (10/10), Sistemas de Información para Finanzas con R (10/10) y Machine Learning (9,7/10). Media en asignaturas técnicas: 8,5/10.', keywords: 'notas asignaturas expediente media estudios' },
      { section: 'Formación', text: 'De septiembre de 2025 a enero de 2026 hice un Erasmus en la IMC University of Applied Sciences de Krems (Austria), con asignaturas de Startup Management y Computer Engineering.', keywords: 'estudios extranjero internacional austria erasmus' },

      // Experiencia
      { section: 'Experiencia', text: 'Actualmente trabajo en Indra como Cybersecurity & AI Analyst en el proyecto de Inditex, analizando los datos de seguridad de toda la compañía para evaluar su postura de ciberseguridad.', keywords: 'trabajo actual empresa ahora trabajas ciberseguridad indra inditex' },
      { section: 'Experiencia', text: 'En Indra uso Python y Snowflake para construir y mantener pipelines de datos de ciberseguridad, con Azure DevOps y CI/CD para el desarrollo y despliegue.', keywords: 'trabajo tecnologías datos ciberseguridad indra' },
      { section: 'Experiencia', text: 'De febrero a junio de 2026 hice prácticas como AI Engineer en Tesla Technologies, desarrollando modelos de machine learning de detección de amenazas y análisis de riesgos y contribuyendo a agentes LLM con LangGraph.', keywords: 'prácticas becario trabajo amenazas agentes' },
      { section: 'Experiencia', text: 'Como freelance B2B construí y vendí un sistema de scraping inmobiliario con Python y Selenium para generación de leads.', keywords: 'freelance clientes proyectos scraping inmobiliaria emprender vender' },
      { section: 'Experiencia', text: 'También he creado herramientas de automatización tipo SaaS con LLMs y n8n para inmobiliarias, inversores y asesorías.', keywords: 'automatización n8n saas freelance clientes proyectos' },
      { section: 'Experiencia', text: 'Fui instructor de judo de 2019 a 2025. Soy cinturón negro 2º Dan y he entrenado a deportistas de nivel nacional.', keywords: 'deporte judo hobbies aficiones entrenador liderazgo profesor' },

      // Premios
      { section: 'Premios', text: '1er premio en USC Lugo Emprende, una competición de emprendimiento de la Universidad de Santiago de Compostela.', keywords: 'premios ganado ganaste competiciones logros emprendimiento' },
      { section: 'Premios', text: '1er puesto en el Hack Day USC-LOF con un proyecto de festivales sostenibles.', keywords: 'hackathon premios ganado ganaste logros' },
      { section: 'Premios', text: '1er puesto internacional en Terra Creative Jam por innovación en oportunidades rurales, y 2º puesto internacional en la Creative Jam de Rural Youth of Europe en Malta.', keywords: 'hackathon premios ganado ganaste internacional logros' },
      { section: 'Premios', text: 'Ganador local y finalista nacional en Santander X Explorer, y ganador regional y finalista nacional en el programa de innovación de Grupo Hotusa.', keywords: 'premios ganado ganaste emprendimiento logros' },
      { section: 'Premios', text: 'La Comisión Europea me seleccionó como EU Ambassador del programa ATLIC, donde también recibí el reconocimiento Blue Leader.', keywords: 'europa premios liderazgo logros' },

      // Habilidades
      { section: 'Habilidades', text: 'En IA trabajo con LLMs, RAG avanzado, sistemas multi-agente con LangChain y LangGraph, embeddings y Hugging Face.', keywords: 'tecnologías habilidades stack inteligencia artificial agentes' },
      { section: 'Habilidades', text: 'Para retrieval uso bases de datos vectoriales como Qdrant, ChromaDB y Pinecone, y BGE-M3 para recuperación multi-etapa y re-ranking.', keywords: 'rag vectores búsqueda tecnologías habilidades' },
      { section: 'Habilidades', text: 'En machine learning: aprendizaje supervisado y no supervisado, feature engineering, evaluación de modelos, PyTorch y TensorFlow.', keywords: 'tecnologías habilidades modelos' },
      { section: 'Habilidades', text: 'En datos trabajo con Python, Pandas, NumPy, SQL (PostgreSQL), Snowflake y procesos ETL/ELT.', keywords: 'tecnologías habilidades análisis' },
      { section: 'Habilidades', text: 'Herramientas: Git, GitHub, Linux, Docker, Azure DevOps, CI/CD y Grafana. En web: JavaScript, React, Next.js, HTML y CSS.', keywords: 'tecnologías habilidades desarrollo frontend' },

      // Otros
      { section: 'Idiomas', text: 'Hablo español y gallego (nativo), inglés B2 (Oxford, preparando el C1), portugués intermedio y alemán básico.', keywords: 'idiomas lenguas hablas' },
      { section: 'Internacional', text: 'He participado en Erasmus+ en Italia (Green Olives Europe) y Croacia (seminario Partnerships), y lideré un equipo internacional de voluntariado en Alemania.', keywords: 'voluntariado internacional viajes extranjero' },
      { section: 'Sobre mí', text: 'Soy de Ferrol, Galicia (España).', keywords: 'dónde vives ubicación ciudad eres' },
      { section: 'Contacto', text: 'Estoy abierto a nuevas oportunidades. Puedes escribirme a alexandrecarnerop@gmail.com o usar el formulario de contacto.', keywords: 'contacto disponible email correo oportunidades contratar' },
    ],
  },

  gl: {
    suggestions: [
      'Onde traballas agora?',
      'Que estudaches?',
      'Construíches axentes con LLMs?',
      'Que premios gañaches?',
      'Que idiomas falas?',
    ],
    stopwords: 'a ao aos as cal cales co coa con cun cunha da das de do dos e é en esta este eu foi hai me meu meus miña miñas mais na nas no nos o onde os ou para pero por que quen se sen sobre son súa seu seus teu túa tes un unha uns unhas xa',
    passages: [
      // Formación
      { section: 'Formación', text: 'Son graduado en Empresa e Tecnoloxía pola Universidade de Santiago de Compostela (2022–2026).', keywords: 'estudos estudar estudaches carreira grao universidade titulación formación USC' },
      { section: 'Formación', text: 'Obtiven Matrícula de Honra en Machine Learning (9,7/10). O meu Traballo de Fin de Grao trata sobre álxebra linear aplicada á xestión de carteiras.', keywords: 'notas TFG tese aprendizaxe automática estudos matrícula' },
      { section: 'Formación', text: 'As miñas mellores notas: Big Data Technologies (10/10), Sistemas de Información para Finanzas con R (10/10) e Machine Learning (9,7/10). Media nas materias técnicas: 8,5/10.', keywords: 'notas materias expediente media estudos' },
      { section: 'Formación', text: 'De setembro de 2025 a xaneiro de 2026 fixen un Erasmus na IMC University of Applied Sciences de Krems (Austria), con materias de Startup Management e Computer Engineering.', keywords: 'estudos estranxeiro internacional austria erasmus' },

      // Experiencia
      { section: 'Experiencia', text: 'Actualmente traballo en Indra como Cybersecurity & AI Analyst no proxecto de Inditex, analizando os datos de seguridade de toda a compañía para avaliar a súa postura de ciberseguridade.', keywords: 'traballo traballas actual empresa agora ciberseguridade indra inditex' },
      { section: 'Experiencia', text: 'En Indra uso Python e Snowflake para construír e manter pipelines de datos de ciberseguridade, con Azure DevOps e CI/CD para o desenvolvemento e o despregamento.', keywords: 'traballo tecnoloxías datos ciberseguridade indra' },
      { section: 'Experiencia', text: 'De febreiro a xuño de 2026 fixen prácticas como AI Engineer en Tesla Technologies, desenvolvendo modelos de machine learning de detección de ameazas e análise de riscos e contribuíndo a axentes LLM con LangGraph.', keywords: 'prácticas bolseiro traballo ameazas axentes' },
      { section: 'Experiencia', text: 'Como freelance B2B construín e vendín un sistema de scraping inmobiliario con Python e Selenium para xeración de leads.', keywords: 'freelance clientes proxectos scraping inmobiliaria emprender vender' },
      { section: 'Experiencia', text: 'Tamén creei ferramentas de automatización tipo SaaS con LLMs e n8n para inmobiliarias, investidores e asesorías.', keywords: 'automatización n8n saas freelance clientes proxectos' },
      { section: 'Experiencia', text: 'Fun instrutor de judo de 2019 a 2025. Son cinto negro 2º Dan e adestrei deportistas de nivel nacional.', keywords: 'deporte judo afeccións adestrador liderado profesor' },

      // Premios
      { section: 'Premios', text: '1º premio en USC Lugo Emprende, unha competición de emprendemento da Universidade de Santiago de Compostela.', keywords: 'premios gañado gañaches competicións logros emprendemento' },
      { section: 'Premios', text: '1º posto no Hack Day USC-LOF cun proxecto de festivais sustentables.', keywords: 'hackathon premios gañado gañaches logros' },
      { section: 'Premios', text: '1º posto internacional en Terra Creative Jam por innovación en oportunidades rurais, e 2º posto internacional na Creative Jam de Rural Youth of Europe en Malta.', keywords: 'hackathon premios gañado gañaches internacional logros' },
      { section: 'Premios', text: 'Gañador local e finalista nacional en Santander X Explorer, e gañador rexional e finalista nacional no programa de innovación de Grupo Hotusa.', keywords: 'premios gañado gañaches emprendemento logros' },
      { section: 'Premios', text: 'A Comisión Europea seleccionoume como EU Ambassador do programa ATLIC, onde tamén recibín o recoñecemento Blue Leader.', keywords: 'europa premios liderado logros' },

      // Habilidades
      { section: 'Habilidades', text: 'En IA traballo con LLMs, RAG avanzado, sistemas multiaxente con LangChain e LangGraph, embeddings e Hugging Face.', keywords: 'tecnoloxías habilidades stack intelixencia artificial axentes construír construíches' },
      { section: 'Habilidades', text: 'Para retrieval uso bases de datos vectoriais como Qdrant, ChromaDB e Pinecone, e BGE-M3 para recuperación en varias etapas e re-ranking.', keywords: 'rag vectores busca tecnoloxías habilidades' },
      { section: 'Habilidades', text: 'En machine learning: aprendizaxe supervisada e non supervisada, feature engineering, avaliación de modelos, PyTorch e TensorFlow.', keywords: 'tecnoloxías habilidades modelos' },
      { section: 'Habilidades', text: 'En datos traballo con Python, Pandas, NumPy, SQL (PostgreSQL), Snowflake e procesos ETL/ELT.', keywords: 'tecnoloxías habilidades análise' },
      { section: 'Habilidades', text: 'Ferramentas: Git, GitHub, Linux, Docker, Azure DevOps, CI/CD e Grafana. En web: JavaScript, React, Next.js, HTML e CSS.', keywords: 'tecnoloxías habilidades desenvolvemento frontend' },

      // Outros
      { section: 'Idiomas', text: 'Falo español e galego (nativo), inglés B2 (Oxford, preparando o C1), portugués intermedio e alemán básico.', keywords: 'idiomas linguas falas' },
      { section: 'Internacional', text: 'Participei en Erasmus+ en Italia (Green Olives Europe) e Croacia (seminario Partnerships), e liderei un equipo internacional de voluntariado en Alemaña.', keywords: 'voluntariado internacional viaxes estranxeiro' },
      { section: 'Sobre min', text: 'Son de Ferrol, Galicia (España).', keywords: 'vives localización cidade es' },
      { section: 'Contacto', text: 'Estou aberto a novas oportunidades. Podes escribirme a alexandrecarnerop@gmail.com ou usar o formulario de contacto.', keywords: 'contacto dispoñible email correo oportunidades contratar' },
    ],
  },
}
