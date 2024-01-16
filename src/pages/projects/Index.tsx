import ProjectContainer from "./ProjectContainer";
import angularLogo from "../../assets/skillsIcons/angular.png";

const ProjectsIndex = () => {
  const project1 = {
    thumbnailSrc: angularLogo,
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    githubLink: "https://github.com/AndreCamposCacho",
  };

  const project2 = {
    thumbnailSrc: angularLogo,
    title: "Project 2",
    description: "Segundo exemplo de projecto bla bla bla",
    githubLink: "https://github.com/AndreCamposCacho",
  };

  const project3 = {
    thumbnailSrc: angularLogo,
    title: "Project 3",
    description: "Plim plom plum cada bola bata um",
    githubLink: "https://github.com/AndreCamposCacho",
  };

  const project4 = {
    thumbnailSrc: angularLogo,
    title: "Project 3",
    description: "Plim plom plum cada bola bata um",
    githubLink: "https://github.com/AndreCamposCacho",
  };

  const project5 = {
    thumbnailSrc: angularLogo,
    title: "Project 3",
    description: "Plim plom plum cada bola bata um",
    githubLink: "https://github.com/AndreCamposCacho",
  };

  const project6 = {
    thumbnailSrc: angularLogo,
    title: "Project 3",
    description: "Plim plom plum cada bola bata um",
    githubLink: "https://github.com/AndreCamposCacho",
  };

  const project7 = {
    thumbnailSrc: angularLogo,
    title: "Project 3",
    description: "Plim plom plum cada bola bata um",
    githubLink: "https://github.com/AndreCamposCacho",
  };

  const projectsList = [project1, project2, project3, project4, project5, project6];

  return (
    <div className="custom-one-screen-page">
      <div id="projectsContainer" className="h-full p-8 grid md:grid-flow-col grid-cols-3 gap-7">
        {projectsList.map((project, k) => {
          return (
            <ProjectContainer
              key={k}
              thumbnailSrc={project.thumbnailSrc}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsIndex;
