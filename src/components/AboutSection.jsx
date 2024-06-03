"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Html</li>
        <li>CSS</li>
        <li>Tailwind</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React</li>
        <li>Next.Js</li>
        <li>Redux</li>
        <li>Express</li>
        <li>Mongoose</li>
        <li>Mongodb</li>
        <li>TanStack Query</li>
        <li>Auth0</li>
        <li>Matrial UI</li>
        <li>Ant Design</li>
        <li>Next UI</li>
        <li>Framer Motion</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <h1 className="text-xl">
          Bachelor of Science in Computer Science & Engineering
        </h1>
        <li>Manarat International University,Dhaka</li>
        <li>Expected Graduation: January 2025</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Frontend Development, Programming Hero</li>
        <li>Full Stack Web Development, Programming Hero</li>
        <li>MERN Stack Development, Programming Hero</li>
      </ul>
    ),
  },
  {
    title: "Additional Training",
    id: "additional-training",
    content: (
      <ul className="list-disc pl-2">
        <li>Proficient in website-building platforms: Wordpress</li>
        <li>Proficient in website-building platforms: Wix</li>
        <li>Proficient in website-building platforms: Webflow</li>
        <li>Basic understanding of UI/UX design with Figma</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 items-center gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="https://st2.depositphotos.com/1032463/7811/i/450/depositphotos_78113092-stock-photo-programmer-profession-man-writing-programming.jpg"
          width={500}
          height={500}
          alt="about-me"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hello! I am Sohag Islam, a versatile frontend and full stack
            developer specializing in the MERN stack. My journey began with a
            curiosity about the web, evolving into a passion for creating
            visually appealing and functional applications. I excel in crafting
            user-friendly interfaces with HTML, CSS, and JavaScript, and
            building robust applications with MongoDB, Express.js, React, and
            Node.js. My work is defined by excellence, attention to detail, and
            a collaborative spirit. Always eager to learn new technologies, I
            thrive in team environments. Let us connect and bring your vision to
            life with exceptional web solutions!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("additional-training")}
              active={tab === "additional-training"}
            >
              {" "}
              Additional Training{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
