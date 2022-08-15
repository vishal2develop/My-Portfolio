/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Vishal Borana",
  title: "Hi all, I'm Vishal",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 experienced in designing and building products that scale. I enjoy discussing ideas and helping out others with my knowledge"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1cdb2wozNMYLCoa3R1Lbg1EhkKDV754S-/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vishal2develop",
  linkedin: "https://www.linkedin.com/in/vishal-borana/",
  gmail: "vish98950@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  medium: "https://medium.com/@vish98950",
  //stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  //instagram: 'https://www.instagram.com/davidrakosi/',
  //twitter: 'https://twitter.com/davidrakosi_',
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Passionate Full Stack Developer who enjoys problem solving and brainstorming",
  skills: [
    emoji(
      "⚡ Develop highly interactive Frontend / User Interfaces for your web applications"
    ),
    emoji("⚡ Scalable Backend development and RESTful API Development."),
    emoji("⚡ Integration of third party services such as Firebase/ OAuth"),
    emoji("⚡ Cloud Driven Applications"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular",
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fa fa-mobile",
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "Expressjs",
      fontAwesomeClassname: "fas fa-rocket",
    },
    {
      skillName: "REST API",
      fontAwesomeClassname: "fa fa-bolt",
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "Djnago",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-square",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fab fa-google",
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc:
        "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "React", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Angular", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "NodeJs", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "ExpressJs", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },

    {
      Stack: "Flutter", //Insert stack or technology you have experience in
      progressPercentage: "65%", //Insert relative proficiency in percentage
    },
    {
      Stack: "REST API", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Django", //Insert stack or technology you have experience in
      progressPercentage: "75%", //Insert relative proficiency in percentage
    },
    {
      Stack: "FastAPI", //Insert stack or technology you have experience in
      progressPercentage: "85%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Docker", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Firebase", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "MySQL", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "MongoDb", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "GCP", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "AWS", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Quantiphi Analytics",
      companylogo: require("./assets/images/quantiphi_logo.png"),
      date: "June 2021 – Present",
      desc: "Building distributed AI Driven products at scale.",
      descBullets: [
        "Full Stack Development",
        "Scalable applications",
        "Cloud Driven",
        "Research adnd Development",
      ],
    },
    {
      role: "System Engineer",
      company: "Infosys Ltd.",
      companylogo: require("./assets/images/infy-crop.png"),
      date: "January 2019 – June 2021",
      desc: "Building scalable and design efficient Web applications.",
      descBullets: [
        "Custom building applications",
        "Full Stack Development",
        "E-Banking",
        "Banking Applications",
      ],
    },
    {
      role: "Intern (Data Science)",
      company: "Nuclei Technologies",
      companylogo: require("./assets/images/nuclei-crop.png"),
      date: "July 2019 – September 2020",
      desc:
        "I build accurate models that translate data points into business insights.",
      descBullets: [
        "Created and deployed models in R and Python.",
        "Performed Data Analysis using standard statistical methods",
        "Created Meaningful visualizations using tableau",
      ],
    },

    // {
    //   role: "Intern",
    //   company: "HP",
    //   companylogo: require("./assets/images/vodafoneLogo.png"),
    //   date: "November 2018 – July 2019",
    //   desc:
    //     "I've conducted internal audit making sure the organization is compliant with the GDPR.",
    // },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
// console.log("key: ", process.env.REACT_APP_GITHUB_TOKEN);
const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "vishal2develop", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// console.log({ openSource });

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Work & Personal",
  projects: [
    {
      image: require("./assets/images/dociphi.png"),
      projectName: "Document Classification App",
      projectDesc:
        "An ML driven product developed to classify and perform entity extraction on documents for the mortgage and insurance industry, to minimize manual work and human errors that occurs in processing physical forms.",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "https://clone-cb68e.web.app/",
        // },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/eazyQ.png"),
      projectName: "Cloud Access Portal",
      projectDesc:
        "A webapp where one could create cloud projects, enable APIs, get access to cloud resources and a lot, on any of the three major cloud platforms - GCP, AWS,Azure.",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "",
        // },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/qassure_logo.png"),
      projectName: "Project Management Portal ",
      projectDesc:
        "A project management tool where all the client project details are captured and onboarding of client is done.",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "",
        // },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/crwn.png"),
      projectName: "Ecommerce Marketplace",
      projectDesc:
        "An Ecommerce Marketplace built with love using ReactJs, Redux, Redux thunk and Firebase.Upcoming - Payment Functionality",
      footerLink: [
        {
          name: "View Repo",
          url: "https://github.com/vishal2develop/CRWN",
        },
        {
          name: "Visit Website",
          url: "https://crwn-clothy.netlify.app/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/bootcamp_yoga.png"),
      projectName: "Bootcamp Yoga",
      projectDesc:
        "A complete backend for serving bootcamp details powered by MERN Stack with API Rate Limiting and Pagination implemented.",
      footerLink: [
        {
          name: "View Repo",
          url: "https://github.com/vishal2develop/BootcampYoga-API",
        },
        {
          name: "Visit Website",
          url: "https://fierce-ocean-02840.herokuapp.com/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/memkoz.png"),
      projectName: "Memkoz",
      projectDesc: "A Memory sharing social media web app",
      footerLink: [
        {
          name: "View Repo",
          url: "https://github.com/vishal2develop/Secrets",
        },
        {
          name: "View Website",
          url: "https://memkoz.netlify.app/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/crypto-crop.png"),
      projectName: "Crypto Tracker",
      projectDesc:
        "A Crypto Currency Tracker built using Node,Express,ReactJs and coingecko api.",
      footerLink: [
        {
          name: "View Repo",
          url: "https://github.com/vishal2develop/react-crypto-tracker",
        },
        {
          name: "Visit Website",
          url: "https://crypto-tracko.netlify.app/",
        },
      ],
    },
    {
      image: require("./assets/images/dev_talk.png"),
      projectName: "Dev Talk",
      projectDesc:
        "A platform where you can connect with your peers or other developers via Videocall",
      footerLink: [
        // {
        //   name: "View Repo",
        //   url: "https://github.com/vishal2develop/react-crypto-tracker",
        // },
        {
          name: "Visit Website",
          url: "https://dev-dev-tok.netlify.app/",
        },
      ],
    },
    {
      image: require("./assets/images/breaking_bad.png"),
      projectName: "Breaking Bad Castings",
      projectDesc:
        "A fun app to list all the characters of my favorite show Breaking Bad",
      footerLink: [
        {
          name: "View Repo",
          url: "https://github.com/vishal2develop/react-breaking-bad",
        },
        {
          name: "Visit Website",
          url: "https://breaking-bad-castings.netlify.app/",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "",
        },
        {
          name: "Award Letter",
          url: "",
        },
        {
          name: "Google Code-in Blog",
          url: "",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://medium.com/analytics-vidhya/bigmart-dataset-sales-prediction-c1f1cdca9af1",
      title: "Build a sales predictions model from scratch.",
      description:
        "My approach on Analytics Vidhya’s Bigmart Sales Prediction problem using Python.",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "(91) 768 0674",
  email_address: "vish98950@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
