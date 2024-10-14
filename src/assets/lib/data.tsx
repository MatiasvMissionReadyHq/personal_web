import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
// import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
// import axiosicon from "../../assets/icons/axiosicon.svg";
// import spotifyicon from "../../assets/icons/spotifyicon.svg";
// import netlifyicon from "../../assets/icons/netlifyicon.svg";
// import rendericon from "../../assets/icons/rendericon.svg";
// import jwticon from "../../assets/icons/jwticon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
import turners from "../../assets/img/turners.webp";
import tradeMe from "../../assets/img/tradeMe.webp";
import zStation from "../../assets/img/zStation.webp";
import profilepicture from "../img/IMG_4018.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    es: "Hola Soy Matías",
    en: "Hi, I'm Matias",
  },
  subtitle: "Fullstack Developer ",
  description: {
    es: "Soy Matías, un desarrollador fullstack con el objetivo de avanzar en mi carrera y participar en proyectos inspiradores. Aquí presento mi trabajo y mi pasión por el desarrollo web. ¡Demos forma a soluciones digitales juntos y moldeemos el futuro!",
    en: "I'm Matias, a fullstack developer with the goal of advancing my career and participating in inspiring projects. Here I present my work and my passion for web development. Let's shape digital solutions together and shape the future!",
  },
  buttons: [
    {
      name: "Contact",
      link: "https://www.linkedin.com/in/matias-pereyra-0918b478/",
      label: {
        es: "Contáctame",
        en: "Contact me",
        
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      link: "https://github.com/MatiasvMissionReadyHq",
      label: {
        es: "Mis Proyectos",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Turner Car Insurance",
    description:
      "El proyecto de IA para seguros de automóviles utiliza IA generativa para actuar como un consultor de seguros, guiando a los usuarios a través de una serie de preguntas adaptativas para recomendar la mejor póliza de seguros adaptada a sus necesidades. Este proyecto se centra en proporcionar una interfaz fácil de usar para seleccionar entre el Seguro de Desgaste Mecánico, el Seguro de Automóvil Integral o el Seguro de Automóvil a Terceros.",
    description_EN:
      "The Car Insurance AI project utilizes generative AI to act as an insurance consultant, guiding users through a series of adaptive questions to recommend the best insurance policy tailored to their needs. This project focuses on providing a user-friendly interface for selecting between Mechanical Breakdown Insurance, Comprehensive Car Insurance, or Third Party Car Insurance.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Express", icon: expressiconwhite },
    ],
    image: turners,
    deploymenturl: "https://shiny-moonbeam-059582.netlify.app/",
    githuburl: "https://github.com/MatiasvMissionReadyHq/car_insurance_AI",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Z Energy Redesign",
    description:
      "El proyecto de Rediseño de Z Energy tiene como objetivo mejorar la experiencia del usuario en las páginas del localizador de estaciones y la información sobre precios de combustible en el sitio web de Z Energy. El rediseño aborda los desafíos que enfrentan los usuarios al localizar gasolineras según ofertas de servicio específicas y al comparar precios de combustible de manera efectiva.",
    description_EN:
      "The Z Energy Redesign project aims to enhance the user experience of the station locator and fuel price information pages on the Z Energy website. The redesign addresses the challenges faced by users in locating gas stations based on specific service offerings and comparing fuel prices effectively.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
    ],
    image: zStation,
    deploymenturl: "https://shiny-moonbeam-059582.netlify.app/",
    githuburl:
      "https://github.com/MatiasvMissionReadyHq/Mission5_ZStation",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Trademe",
    description:
      "El proyecto de Trade Me se centra en rediseñar la página de listado de productos y perfeccionar el proceso de pujas en la plataforma Trade Me para mejorar la experiencia del usuario, especialmente para estudiantes internacionales y nuevos usuarios. El proyecto tiene como objetivo simplificar el proceso de pujas, evitando pujas accidentales, mientras mejora el diseño general de las páginas de productos y la función de comparación para facilitar la evaluación de artículos.",
    description_EN:
      "The Trade Me Project focuses on redesigning the product listing page and refining the bidding process on the Trade Me platform to enhance user experience for international students and new users. The project aims to simplify the bidding process, preventing accidental bids, while improving the overall layout of product pages and the comparison feature for easier item evaluation.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
    ],
    image: tradeMe,
    deploymenturl: "https://shiny-moonbeam-059582.netlify.app/",
    githuburl: "https://github.com/MatiasvMissionReadyHq/trademe-project",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    de: "Mas proyectos en Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Vue.js",
        hash: "#Vue.js",
        icon: vuejsicon,
        color: "#4FC08D",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
      {
        title: "Webflow",
        hash: "#Webflow",
        icon: webflowicon,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { es: "Home", en: "Home", hash: "#home", icon: GoHome },
  { es: "habilidad", en: "Skills", hash: "#skills", icon: GoStack },
  { es: "Projectos", en: "Projects", hash: "#projects", icon: GoProject },
  { es: "Sobre mi", en: "About me", hash: "#about-me", icon: GoPerson },
  { es: "Contacto", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { es: "Imprimir", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { es: "Privacidad", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:matiasv@missionreadyh2.com",
  text: "matiasv@missionreadyh2.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/matias-pereyra-0918b478/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/MatiasvMissionReadyHq",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:matiasv@missionreadyh2.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    es: '"No es en absoluto importante hacerlo bien a la primera. Es vital hacerlo bien a la última."',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Andrew Hunt",
  },
  {
    es: '"El diseño no es solo cómo se ve y se siente. El diseño es cómo funciona."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "Sobre me",
  title_EN: "About me",
  description: "Algunos fragmentos de código sobre mí.",
  description_EN: "A few code snippets about me",
  paragraphs_ES: [
    {
      title: "Los Circuitos de mi Corazón",
      description:
        "Cuando no navego por el mundo digital, exploro el fascinante mundo de la tecnología y el hardware. Los circuitos y las soldaduras son como piezas de rompecabezas para mí en una emocionante aventura.",
      icon: hardwareicon,
    },
    {
      title: "En la Vía Rápida de la Vida",
      description:
        "Además de programar, me gusta estar en la vía rápida, en el verdadero sentido de la palabra. Los coches son mi pasión y disfruto de estar en caminos desconocidos con máquinas potentes.",
      icon: caricon,
    },
    {
      title: "La Alegría del Descubrimiento como motor de Vida",
      description:
        "Mi viaje como desarrollador web es solo una parte de mi camino de vida. Vivo bajo el lema de que la aventura solo comienza cuando dejas lo familiar atrás. Descubrir nuevos lugares y culturas es mi forma de inspiración creativa.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    es: "Contacto",
    en: "Contact",
  },
  description: {
    es: "Escríbeme un mensaje y me pondré en contacto contigo.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        es: "Tu Nombre",
        en: "Your Name",
      },
      type: "text",
      validation: {
        es: "por favor, completa tu nombre",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        es: "Tu correo electrónico",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        es: "por favor, completa tu correo electrónico",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        es: "Tu Asunto",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        es: "por favor, completa tu asunto",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      es: "Tu Mensaje",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      es: "Por favor, completa tu mensaje.",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      es: "Enviar",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      es: "Estoy de acuerdo en que Alpay puede utilizar mis datos personales (nombre y dirección de correo electrónico) para contactarme.",
      en: "I agree that Alpay may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      es: "Al enviar esta solicitud, reconoces que has leído la Política de Privacidad.",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    es: "🦄 La demostración en vivo se abrirá en breve. Iniciando servidores...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    es: "🦄 Gracias por tu correo electrónico. Te responderé lo antes posible.",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    es: "🦄 Desafortunadamente, el envío de tu correo electrónico no funcionó. Por favor, intenta nuevamente más tarde.",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    es: "Por favor, completa tu nombre.",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    es: "ES",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
