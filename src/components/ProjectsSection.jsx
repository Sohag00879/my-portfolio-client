"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  useEffect(() => {
    fetch("https://portfolio-server-rho-gold.vercel.app/api/v1/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-5">
        My Projects
      </h2>
      <p className="text-center text-xl text-white mb-5">
        Explore some of my featured projects below
      </p>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projects?.data?.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project._id}
              title={project.name}
              description={project.description}
              imgUrl1={project.image1}
              imgUrl2={project.image2}
              github={project.githubLink}
              postman={project.postmanLink}
              liveLink={project.liveDemoLink}
              frontendTech={project.frontendTech}
              backendTech={project.backendTech}
              category={project.category}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
