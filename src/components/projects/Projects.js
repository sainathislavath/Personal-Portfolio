import React, { useRef, useState } from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projectsRef = useRef(null);

  const projectsData = [
    {
      title: "CHAT APP (MERN)",
      des: " ChatApp is a full-stack web application that allows users to chat with each other in real-time. It provides a user-friendly interface for registration, login, and messaging.",
      src: "https://img.freepik.com/premium-vector/chat-app-logo-design-template-can-be-used-icon-chat-application-logo_605910-1724.jpg",
      githubLink: "https://github.com/sainath161/ChatApp",
      demoLink: "https://chat-app-wp-ykcy.onrender.com/",
      skills: "SKILLS",
      skillUsed:
        "React, Tailwind CSS, Daisy UI, Zustand, NodeJS, Express JS, Mongo DB, socket.io, JWT",
    },
    {
      title: "CHAT APP (FIREBASE)",
      des: " This project is a chat application that allows users to send text messages, images, videos, and voice recordings to each other in real-time.",
      src: "https://cdn5.vectorstock.com/i/1000x1000/58/04/chat-messaging-app-logo-design-vector-21795804.jpg",
      githubLink: "https://github.com/sainath161/chat-App",
      demoLink: "https://chatappsample.netlify.app/",
      skills: "SKILLS",
      skillUsed: "React, Firebase, Emoji Picker",
    },
    {
      title: "TO DO APP",
      des: " To-Do App is a web application built using Node.js, Express.js, MongoDB, and Axios. It allows users to manage their to-do lists with features such as adding, editing, and deleting items.",
      src: "https://i.pinimg.com/564x/19/c1/9c/19c19c00ddde609bf93c2a1cf1929dee.jpg",
      githubLink: "https://github.com/sainath161/Todo",
      demoLink: "https://todo-app-t8k9.onrender.com/",
      skills: "SKILLS",
      skillUsed:
        "HTML, CSS, JavaScript, ejs, Bootstrap, Axios, Node.js, Express.js, MongoDB, Session-based authentication, Rate limiting",
    },
    {
      title: "PODCAST",
      des: " The Podcast Management System project is to provide a platform for users to create, manage, discover and listen the podcasts.",
      src: "https://media.istockphoto.com/id/1283532997/vector/podcast-concept-thin-line-icon-abstract-icon-abstract-gradient-background-modern-sound-wave.jpg?s=612x612&w=0&k=20&c=YLg7rHeSuYqeIuGRAcvf2a7J8X8Sx-IkmqYHXIJGPYQ=",
      githubLink: "https://github.com/sainath161/podcast",
      demoLink: "https://podcastreact.netlify.app/",
      skills: "SKILLS",
      skillUsed: "React, Firebase, Ant Design, Axios, Redux",
    },
    {
      title: "FINANCELY",
      des: " Financely is a personal finance management application designed to help users track their income, expenses, and overall financial health.",
      src: "https://logowik.com/content/uploads/images/financely630.logowik.com.webp",
      githubLink: "https://github.com/sainath161/financely",
      demoLink: "https://financelyreact.netlify.app/",
      skills: "SKILLS",
      skillUsed: "React, Firebase, Ant Design, Axios, Redux",
    },

    {
      title: "WEATHER",
      des: " The Weather Application is a web-based tool that allows users to fetch real-time weather data based on their current location.",
      src: "https://english.makalukhabar.com/wp-content/uploads/2022/09/1600x960_1306284-weather-update.jpg",
      githubLink: "https://github.com/sainath161/WeatherAPI",
      demoLink: "https://sainath161.github.io/WeatherAPI/",
      skills: "SKILLS",
      skillUsed: "HTML, CSS, JavaScript, API",
    },
    {
      title: "YOUTUBE CLONE",
      des: " A similar app to youtube where users can access the video streaming content, watch, subscribe, and be a part of many other activities.",
      src: "https://i.ytimg.com/vi/SsMn8tT3ZBQ/maxresdefault.jpg",
      githubLink: "https://github.com/sainath161/Youtube-Clone",
      demoLink: "https://sainath161.github.io/Youtube-Clone/",
      skills: "SKILLS",
      skillUsed: "HTML, CSS, JavaScript, API",
    },
    {
      title: "DEWALI",
      des: " Diwali celebration animation created using HTML, CSS, and JavaScript. It features fireworks animations and a greeting message for the festival of lights.",
      src: "https://img.freepik.com/premium-photo/happy-diwali-indian-festival-background-with-candles-diwali-day-happy-diwali-day_692702-2604.jpg",
      githubLink: "https://github.com/sainath161/Diwali",
      demoLink: "https://sainath161.github.io/Diwali/",
      skills: "SKILLS",
      skillUsed: "HTML, CSS, JavaScript",
    },
    {
      title: "POST OFFICE LOCATOR",
      des: " The Post Office Locator Application is a web-based tool that allows users to extract information about the nearest post offices based on their location.",
      src: "https://tnpds.org.in/wp-content/uploads/2022/06/Post-Office.jpg",
      githubLink: "https://github.com/sainath161/user-IP-address",
      demoLink: "https://sainath161.github.io/user-IP-address/",
      skills: "SKILLS",
      skillUsed: "HTML, CSS, JavaScript, API",
    },
    {
      title: "EXCALIDRAW",
      des: " Excalidraw is a whiteboard tool that lets you easily sketch diagrams that have a hand-drawn feel to them. It is very handy to dump your thoughts.",
      src: "https://miro.medium.com/v2/resize:fit:1358/0*2zlhkZLM8Fs_opIh",
      githubLink: "https://github.com/sainath161/Excalidraw",
      demoLink: "https://sainath161.github.io/Excalidraw/",
      skills: "SKILLS",
      skillUsed: "HTML, CSS, JavaScript",
    },
    {
      title: "AIRBNB CLONE",
      des: " Airbnb Clone is a pre-built software solution that lets businesses launch their own rental marketplace quickly similar to Airbnb.",
      src: "https://i.ytimg.com/vi/NuKTp7ERino/hqdefault.jpg",
      githubLink: "https://github.com/sainath161/AirBnb-Clone",
      demoLink: "https://sainath161.github.io/AirBnb-Clone/",
      skills: "SKILLS",
      skillUsed: "HTML, CSS, JavaScript, API",
    },
    {
      title: "GOOGLE SHEET CLONE",
      des: " Google Sheet clone, providing a basic functional grid-based spreadsheet application. It allows users to create, edit, and manage multiple sheets.",
      src: "https://images.unsplash.com/photo-1663124178632-488f399d5763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdvb2dsZSUyMG5ld3N8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      githubLink: "https://github.com/sainath161/Google-sheet-clone",
      demoLink: "https://sainath161.github.io/Google-sheet-clone/",
      skills: "SKILLS",
      skillUsed: "HTML, CSS, JavaScript",
    },
    {
      title: "SPOTIFY CLONE",
      des: " Spotify clone aiming to replicate the popular music streaming service's. The clone offers familiar interface for exploring music, enjoying their favorite songs.",
      src: "https://i.etsystatic.com/22792867/r/il/e8d325/3810008213/il_fullxfull.3810008213_7bn1.jpg",
      githubLink: "https://github.com/sainath161/Spotify-Clone",
      demoLink: "https://sainath161.github.io/Spotify-Clone/",
      skills: "SKILLS",
      skillUsed: "HTML, CSS, Bootstrap",
    },
    {
      title: "BLINKIT CLONE",
      des: " Blinkit is a web-based online grocery store. This project aims to offer a seamless shopping experience for users with a user-friendly interface.",
      src: "https://inc42.com/wp-content/uploads/2023/03/Weekly-NL-10-March-featured.jpg",
      githubLink: "https://github.com/sainath161/blinkit",
      demoLink: "https://sainath161.github.io/blinkit/",
      skills: "SKILLS",
      skillUsed: "HTML, CSS, Bootstrap",
    },
    {
      title: "COLOR BOARD",
      des: " Project has a grid of 800 squares in a container. Each square changes its background color on hover and returns to its original color after 1 second.",
      src: "https://img.freepik.com/free-vector/bright-vibrant-set-gradients-background_1017-14552.jpg?w=1380&t=st=1703662143~exp=1703662743~hmac=ea2907b6b4e4192dc546b17d128daf1fa03da64a91bf649106a14327e58e3f2e",
      githubLink: "https://github.com/sainath161/Color_Board",
      demoLink: "https://sainath161.github.io/Color_Board/",
      skills: "SKILLS",
      skillUsed: "HTML, CSS",
    },
    {
      title: "e-Commerce (Shopping Cart)",
      des: " The Shopping Cart allows users to browse a list of products, add items to their cart, and proceed to checkout.",
      src: "https://wallpapercave.com/wp/wp3537586.jpg",
      githubLink: "https://github.com/sainath161/Shopping-Cart",
      demoLink: "https://shopping-cart-green-seven.vercel.app/",
      skills: "SKILLS",
      skillUsed: "HTML, CSS, javaScript, React",
    },
    {
      title: "ROCK PAPER SCISSORS",
      des: " This is a basic implementation of the Rock, Paper, Scissors game. It allows users to play the classic game against the computer.",
      src: "https://a0.anyrgb.com/pngimg/1548/612/points-system-h-7-rockpaperscissors-rpa-rock-paper-scissors-steemit-scissors-digital-data-paper-icons.png",
      githubLink: "https://github.com/sainath161/Rock-Paper-Scissor",
      demoLink: "https://sainath161.github.io/Rock-Paper-Scissor/",
      skills: "SKILLS",
      skillUsed: "HTML, CSS, JavaScript",
    },
    {
      title: "SNAKE GAME",
      des: " This Snake game implementation features a grid-based canvas where players control a snake to eat food and grow, avoiding collisions with walls and itself.",
      src: "https://wallpaperaccess.com/full/8552472.jpg",
      githubLink: "https://github.com/sainath161/Snake-Game",
      demoLink: "https://sainath161.github.io/Snake-Game/",
      skills: "SKILLS",
      skillUsed: "HTML, CSS, JavaScript",
    },
  ];

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
    if (showAllProjects) {
      // Scroll to the top of the Projects section when loading more
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projectsData
          .slice(0, showAllProjects ? projectsData.length : 6)
          .map((project, index) => (
            <ProjectsCard
              key={index}
              title={project.title}
              skills={project.skills}
              skillUsed={project.skillUsed}
              des={project.des}
              src={project.src}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          ))}
      </div>
      <div className="flex justify-center mt-8">
        <button onClick={toggleShowAllProjects} className="download">
          {showAllProjects ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
