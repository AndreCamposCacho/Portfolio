import {
  UserCircleIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import '../custom-styles.css';

interface SidebarProps {
  scrollToIntro: () => void;
  scrollToSkills: () => void;
  scrollToProjects: () => void;
  scrollToContacts: () => void;
}

const sidebar = ({
  scrollToIntro,
  scrollToSkills,
  scrollToProjects,
  scrollToContacts,
}: SidebarProps) => {
  //Tailwind classNames
  const iconContainerClass = "pr-4";
  const iconClass = "w-7 text-stone-400";
  const titleClass = "pl-1 text-stone-500";

  return (
    <div
      id="sidebar"
      className="h-screen p-1 bg-gradient-to-r from-slate-300 from-85% -translate-x-20 hover:translate-x-0 transition-transform duration-500"
    >
      <div id="intro" onClick={scrollToIntro} className="custom-sidebar-button">
        <div id="title" className={titleClass}>Intro</div>
        <div id="iconContainer" className={iconContainerClass}>
          <UserCircleIcon className={iconClass} />
        </div>
      </div>
      <div id="skills" onClick={scrollToSkills} className="custom-sidebar-button">
        <div id="title" className={titleClass}>Skills</div>
        <div id="iconContainer" className={iconContainerClass}>
          <AcademicCapIcon className={iconClass} />
        </div>
      </div>
      <div id="projects" onClick={scrollToProjects} className="custom-sidebar-button">
        <div id="title" className={titleClass}>Projects</div>
        <div id="iconContainer" className={iconContainerClass}>
          <BriefcaseIcon className={iconClass} />
        </div>
      </div>
      <div id="contacts" onClick={scrollToContacts} className="custom-sidebar-button">
        <div id="title" className={titleClass}>Contacts</div>
        <div id="iconContainer" className={iconContainerClass}>
          <PhoneIcon className={iconClass} />
        </div>
      </div>
    </div>
  );
};

export default sidebar;
