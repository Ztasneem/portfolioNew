import React from "react";
import { useState, createContext } from "react";

export const ProjectsContext = createContext();

export const ProjectsProvider = (props) => {
  const [projects] = useState([
    {
      id: "portfolio",
      name: "Web Dev portfolio",
      image: "https://ik.imagekit.io/pvsizywre9b/portfolio_pTvyhDfV-vH.jpg?updatedAt=1628833087391",
      imageURL:
        "https://ik.imagekit.io/pvsizywre9b/portfolio_nk90suD0X.PNG?updatedAt=1628833087589",
      description:
        "Web Dev portfolio to showcase your projects.",
      techstack: ["React", "SCSS", "Bootstrap"],
      deploy: true,
      deployment: "https://devgirl.netlify.app/",
      code:"https://github.com/Ztasneem/portfolio"
    },
    {
      id: "iPICS",
      name: "iPICS",
      image: "https://ik.imagekit.io/pvsizywre9b/ipicswebcover_Yorf_zPnj.png?updatedAt=1683468883646",
      imageURL:
        "https://ik.imagekit.io/pvsizywre9b/ipicswebcover_Yorf_zPnj.png?updatedAt=1683468883646",
      description:
        "iPICS is the interactive Prostate Cancer Information, Communication, and Support program (iPICS), designed to improve communication, treatment-decision making, and quality of life for patients with newly diagnosed, localized prostate cancer and their families.",
      techstack: ["Nuxt.js", "Vue.js", "Vuetify"],
      deploy: true,
      deployment: "https://stg.ipics.life/",
      code:"https://stg.ipics.life/"
    },
    {
      id: "Blumer-WebApp",
      name: "Blumer-WebApp",
      image: "https://ik.imagekit.io/pvsizywre9b/blumercoverweb__1___W--ZJPy3.png?updatedAt=1683468506212",
      imageURL:
        "https://ik.imagekit.io/pvsizywre9b/blumercoverweb__1___W--ZJPy3.png?updatedAt=1683468506212",
      description:
        "BLUMER project, a searchable database with a web-based simple and advanced search interface. The website will aid the students, researchers, supervisors to search for their desired research topic. Thousands of research projects can be searched through in multiple disciplines, that can provide all the necessary information related to the projects.",
      techstack: ["Svelte.js", "TailwindCSS"],
      deploy: true,
      deployment: "https://inneed.cloud/",
      code:"https://inneed.cloud/"
    },
    {
      id: "TRMIS",
      name: "TRMIS-Tuberculosis Training Management System",
      image: "https://ik.imagekit.io/pvsizywre9b/trmiswebappcover_IFcDgPsEZ.png?updatedAt=1683469393750",
      imageURL:
        "https://ik.imagekit.io/pvsizywre9b/trmiswebappcover_IFcDgPsEZ.png?updatedAt=1683469393750",
      description:
        "A system, which can provide a centralized platform for managing training programs, scheduling sessions, tracking progress, and providing feedback and assessment to healthcare workers.",
      techstack: ["Svelte.js","Sveltekit", "TailwindCSS","Carbon components"],
      deploy: true,
      deployment: "https://inneed.cloud/",
      code:"https://inneed.cloud/"
    },
    {
      id: "chatapp",
      name: "Web Chat App",
      image: "https://ik.imagekit.io/pvsizywre9b/chatapp_GAQ10tLDz8q.jpeg?updatedAt=1628406852842",
      imageURL:
        "https://ik.imagekit.io/pvsizywre9b/chatapp_702zJ4cIP.png?updatedAt=1628406938713",
      description:
        "For a hobby project I tried recreating WhatsApp web using socket.io. It has got features like multiple chat rooms, emoji enabled input box (and emoji pop up keyboard) and no sign up requirements. Also secure :).",
      techstack: ["React", "NodeJS", "Socket.io", "Bootstrap"],
      deploy: true,
      deployment: "https://chatappwithreact.netlify.app/",
      code:"https://github.com/tasPanda/ChatApp"
    },
    {
      id: "missionextreme",
      name: "Mission Extreme",
      image:
        "https://ik.imagekit.io/pvsizywre9b/missionExtreme_scu4FC_KhV9.jpg?updatedAt=1628347925867",
      imageURL:
        "https://ik.imagekit.io/pvsizywre9b/missionExtreme_aTHJ6DRRZ.PNG?updatedAt=1628324703747",
      description:
        "A project for Cop Creation Bangladesh for there most wanted movie Mission Extreme.",
      techstack: ["WordPress", "Bootstrap"],
      deploy: true,
      deployment: "http://www.missionextreme.net/"
    },
    {
      id: "environmenttalkbd",
      name: "Environmenttalk BD",
      image:
        "https://ik.imagekit.io/pvsizywre9b/environmenttalkbd_K86UHB-0x3j.jpg?updatedAt=1628373236872",
      imageURL:
        "https://ik.imagekit.io/pvsizywre9b/environmentTalkbd_fCyUGcay_.PNG?updatedAt=1628324344146",
      description:
        "For a client I created this blogging website based on WordPress.",
      techstack: ["WordPress", "Bootstrap"],
      deploy: true,
      deployment: "http://environmenttalkbd.com/"
    },
    {
      id: "fenidoctors",
      name: "Feni Doctor'S",
      image:
        "https://ik.imagekit.io/pvsizywre9b/fenidoctor_s_mFcc-x3iWUd.jpg?updatedAt=1628373628124",
      imageURL:
        "https://ik.imagekit.io/pvsizywre9b/feniDoctors_57cBbhKnL.PNG?updatedAt=1628324527167",
      description:
        "This is an amazing website with features like adding doctor's information in the database,searching option on specific categories etc. ",
      techstack: ["HTML", "Bootstrap","PHP"],
      deploy: true,
      deployment: "http://fenidoctors.info/"
    },

    {
      id: "codetreebd",
      name: "CodeTree Bangladesh",
      image:
        "https://ik.imagekit.io/pvsizywre9b/codetreebd_UnTRK1RnApt.jpg?updatedAt=1628374347935",
      imageURL:
        "https://ik.imagekit.io/pvsizywre9b/codetreebd_XceSwgbByS.PNG?updatedAt=1628326145104",
      description:
        "A portfolio project for a software Company based in Dhaka.",
      techstack: ["HTML","CSS", "Bootstrap"],
      deploy: true,
      deployment: "https://codetreebd.com/"
    },
    {
      id: "Woocommerce",
      name: "Woo-commerce",
      image:
        "https://ik.imagekit.io/pvsizywre9b/ekhaneikini_PnjkdEWKbSm.jpg?updatedAt=1628373144682",
      imageURL:
        "https://ik.imagekit.io/pvsizywre9b/ekhaneikini_uEV0EOJA4.PNG?updatedAt=1628323457201",
      description:
        "This is an ecommerce website based on WordPress.A complete multivendor online store.",
      techstack: ["WordPress", "PHP", "Bootstrap"],
      deploy: true,
      deployment: "https://ekhaneikini.com/"
    },
     {
      id: "FoodParcel",
      name: "Food Parcel App",
      image:
        "https://ik.imagekit.io/pvsizywre9b/foodParcel_F_sAjnESa.jpg?updatedAt=1628437492101",
      imageURL:
        "https://ik.imagekit.io/pvsizywre9b/foodParcel_vF8Qi76hdfJ.PNG?updatedAt=1628437222114",
      description:
        "This is a food parcel app based on MERN stack.A complete solution for your food service business.",
      techstack: ["React", "Firebase"],
      deploy: true,
      deployment: "https://github.com/Ztasneem"
    },
    {
      id: "recipeFinder",
      name: "Recipe Finder App",
      image:
        "https://ik.imagekit.io/pvsizywre9b/recipeFinder_dHEtc8VDqGq.jpg?updatedAt=1628664298446",
      imageURL:
        "https://ik.imagekit.io/pvsizywre9b/recipeFinder_y7HocMkuh.PNG?updatedAt=1628664298857",
      description:
        "A recipe finder app to help you with your daily cooking needs.",
      techstack: ["React", "Firebase"],
      deploy: true,
      deployment: "https://recipe-stack.netlify.app/"
    }
   
  ]);

  return (
    <ProjectsContext.Provider value={projects}>
      {props.children}
    </ProjectsContext.Provider>
  );
};
