import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Experience / Internship</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="HiMedia Laboratories Pvt. Ltd - (2024 - PRESENT)"
            result="Mumbai"
            des="Currently working as a Software Engineer contributing to the development of internal tools and web applications that support labware and protocol management systems. My responsibilities include full-stack development using React, Node.js, PHP, MySQL, and SQL. I focus on building efficient, scalable solutions, handling large datasets, implementing role-based access controls, and optimizing system performance for seamless lab operations."
          />

          <ResumeCard
            title="DevOps & Cloud Engineering | Generative AI & Prompt Engineering"
            subTitle="HeroVired (Feb 2025 - PRESENT)"
            result="ONLINE"
            des="Currently pursuing an 8-month online certification program by HeroVired. The curriculum covers DevOps tools like Docker, Jenkins, Kubernetes, GitOps, and Terraform, along with AWS, Azure, and GCP cloud platforms. Key topics include CI/CD pipelines, serverless architecture, monitoring with Prometheus & Grafana, cloud automation, and infrastructure as code. Additionally exploring Generative AI principles and Prompt Engineering for building intelligent systems using LLMs. Program includes hands-on projects on 3-tier architectures, MERN stack deployment, and MLOps workflows."
          />

          <ResumeCard
            title="Frontend & Software Developer Intern"
            subTitle="Trify India Pvt Ltd - (May 2023 - Aug 2023)"
            result="Bengaluru"
            des="Electric vehicle installation of sensors and controlling actuators and worked on frontend projects using Angular JS, and React JS. Collaborated with the team on designing, developing, and integrating signal processing for charging stations and developed the dashboard. Proficient in performance analysis and charging Station control through UI design, and optimization techniques."
          />

          <ResumeCard
            title="Web Developer Trainee"
            subTitle="AccioJob - (2023 - 2024)"
            result="ONLINE"
            des="Acquired proficiency in Java programming language with a focus on core concepts such as OOP, inheritance, polymorphism, encapsulation, and abstraction. Experienced in full stack development, proficient in HTML, CSS, JavaScript, React.js for frontend, and Node.js, Express.js for backend. Skilled in MongoDB, and MySQL for database management. Utilizes Bootstrap, Sass, Webpack, and other tools for seamless integration, ensuring optimal performance across the development process."
          />

          <ResumeCard
            title="Web Developer Trainee"
            subTitle="Unified Mentor - (May 2023 - July 2023)"
            result="ONLINE"
            des="Interned as a Web Developer focusing on HTML, CSS, and JavaScript to build responsive and interactive web applications. Collaborated with a dynamic team to design, develop, and optimize web solutions. Gained hands-on experience in front-end and back-end development, including API integration and cross-browser compatibility."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
