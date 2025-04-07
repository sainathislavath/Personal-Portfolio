import React from "react";
import { motion } from "framer-motion";

const SkillBar = ({ label, percentage }) => (
  <div className="overflow-x-hidden">
    <p className="text-sm uppercase font-medium">{label}</p>
    <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
      <motion.span
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
        style={{ width: percentage }}
      >
        <span className="absolute -top-7 right-0">{percentage}</span>
      </motion.span>
    </span>
  </div>
);

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Frameworks & Libraries */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Frameworks & Libraries
          </h2>
        </div>
        <div className="w-full flex flex-col gap-6">
          <SkillBar label="React" percentage="90%" />
          <SkillBar label="Redux" percentage="90%" />
          <SkillBar label="Node.js" percentage="85%" />
          <SkillBar label="Express.js" percentage="85%" />
          <SkillBar label="Bootstrap" percentage="85%" />
          <SkillBar label="Tailwind CSS" percentage="85%" />
          <SkillBar label="Material UI" percentage="85%" />
          <SkillBar label="Firebase" percentage="80%" />
          <SkillBar label="REST API Development" percentage="85%" />
          <SkillBar label="ExcelJS" percentage="80%" />
          <SkillBar label="Git / Version Control" percentage="90%" />
        </div>
      </div>

      {/* Languages & Databases */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Languages & Databases
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          <SkillBar label="HTML" percentage="95%" />
          <SkillBar label="CSS" percentage="90%" />
          <SkillBar label="JavaScript" percentage="90%" />
          <SkillBar label="MySQL" percentage="85%" />
          <SkillBar label="MongoDB" percentage="90%" />
          <SkillBar label="SQL" percentage="90%" />
          <SkillBar label="PHP" percentage="80%" />
          <SkillBar label="Java" percentage="80%" />
          <SkillBar label="Python" percentage="75%" />
          <SkillBar label="XML" percentage="85%" />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
