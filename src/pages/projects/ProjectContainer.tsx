import React from "react";

interface ProjectContainerProps {
  thumbnailSrc: string;
  title: string;
  description: string;
  githubLink: string;
}

const ProjectContainer = ({
  thumbnailSrc,
  title,
  description,
  githubLink,
}: ProjectContainerProps) => {
  return (
    <div className="md:w-56 w-36 h-fit p-3 flex flex-col border border-slate-400 bg-slate-300 rounded-xl hover:border-transparent hover:bg-slate-400 transition-all duration-700">
      <div id="tumbnail">
        <img src={thumbnailSrc} alt="project_thumbnail" />
      </div>
      <h2 id="projectTitle">{title}</h2>
      <p id="projectDescription" className="truncate">{description}</p>
      <a href={githubLink} target="_blank" id="githubRepo" className="hover:text-amber-900 hover:underline transition-all duration-300">GitHub</a>
    </div>
  );
};

export default ProjectContainer;
