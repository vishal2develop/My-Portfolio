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
    "A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1uv4ZQQr0U5zjyDJEgL0sA5HHWmIZKlil/view?usp=sharing",
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
    "Passionate FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Scalable Backend development and RESTful API Development."),
    emoji("⚡ Integration of third party services such as Firebase/ OAuth"),
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
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "expressjs",
      fontAwesomeClassname: "fas fa-rocket",
    },
    {
      skillName: "REST API",
      fontAwesomeClassname: "fa fa-bolt",
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java",
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
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
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
      Stack: "MERN", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "MySQL", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "REST API", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Material UI", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Java", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud Functions", //Insert stack or technology you have experience in
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
      role: "System Engineer",
      company: "Infosys Ltd.",
      companylogo: require("./assets/images/infy-crop.png"),
      date: "January 2019 – Present",
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
console.log("key: ", process.env.REACT_APP_GITHUB_TOKEN);
const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "vishal2develop", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

console.log({ openSource });

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Amazon Clone",
  projects: [
    {
      image: require("./assets/images/amazon-crop.png"),
      projectName: "Amazon Clone",
      projectDesc:
        "An amazon clone built with love using ReactJs,NodeJs and Firebase integrated with payment functionality",
      footerLink: [
        {
          name: "View Repo",
          url: "https://github.com/vishal2develop/React-Amazon-Clone",
        },
        {
          name: "Visit Website",
          url: "https://clone-cb68e.web.app/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/secret-crop.png"),
      projectName: "Secrets",
      projectDesc:
        "A Secret Keeper App built with love using Node and Mongo with OAuth integration",
      footerLink: [
        {
          name: "View Repo",
          url: "https://github.com/vishal2develop/Secrets",
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
