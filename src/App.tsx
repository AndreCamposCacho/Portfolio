import React, { useRef } from "react";
import Sidebar from "./components/Sidebar";
import ContactsIndex from "./pages/contacts/Index.tsx";
import IntroIndex from "./pages/intro/Index.tsx";
import ProjectsIndex from "./pages/projects/Index";
import SkillsIndex from "./pages/skills/Index.tsx";
import Fakebar from "./components/Fakebar.tsx";

function App() {
  const introRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  const scrollToComponent = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex bg-gradient-to-br from-orange-100 to-indigo-200">
      <div id="sidebarContainer" className="fixed w-36">
        <Sidebar
          scrollToIntro={() => scrollToComponent(introRef)}
          scrollToSkills={() => scrollToComponent(skillsRef)}
          scrollToProjects={() => scrollToComponent(projectsRef)}
          scrollToContacts={() => scrollToComponent(contactsRef)}
        />
      </div>
      <div id="fakebarbarContainer">
        <Fakebar/>
      </div>
      <div id="pagesContainer">
        <div id="introContainer" ref={introRef}>
          <IntroIndex/>
        </div>
        <div id="skillsContainer" ref={skillsRef}>
          <SkillsIndex/>
        </div>
        <div id="projectsContainer" ref={projectsRef}>
          <ProjectsIndex/>
        </div>
        <div id="contactsContainer" ref={contactsRef}>
          <ContactsIndex/>
        </div>
      </div>
    </div>
  )
}

export default App
