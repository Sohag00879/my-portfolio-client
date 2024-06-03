"use client";
import { HiCodeBracket } from "react-icons/hi2";
import { BsEye } from "react-icons/bs";
import Link from "next/link";
import ModalComponent from "@/UI/Modal";

const ProjectCard = ({
  imgUrl1,
  imgUrl2,
  title,
  description,
  github,
  postman,
  liveLink,
  frontendTech,
  backendTech,
  category,
}) => {
  return (
    <div className="bg-[#181818] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div
        className="h-52 md:h-72 relative group"
        style={{
          backgroundImage: `url(${imgUrl1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={github}
            target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <HiCodeBracket className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={liveLink}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <BsEye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white p-6">
        <div className="flex justify-between items-center mb-2">
          <h5 className="text-xl font-semibold">{title}</h5>
          <span className="text-sm bg-gray-700 px-2 py-1 rounded">
            {category}
          </span>
        </div>
        <div className="flex justify-center mt-5">
          <ModalComponent
            title={title}
            imgUrl2={imgUrl2}
            github={github}
            liveLink={liveLink}
            postman={postman}
            frontendTech={frontendTech}
            backendTech={backendTech}
            description={description}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
