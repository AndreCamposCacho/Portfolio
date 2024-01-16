import jsIcon from "../../assets/skillsIcons/js.png";
import cssIcon from "../../assets/skillsIcons/css.png";
import htmlIcon from "../../assets/skillsIcons/html.png";
import gitIcon from "../../assets/skillsIcons/git.png";

const WheelOfSkills = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-7">
      <div className="w-36">
        <img src={jsIcon} alt="jsIcon" className="rounded-xl"/>
      </div>
      <div className="w-36">
        <img src={htmlIcon} alt="htmlIcon" className="rounded-xl"/>
      </div>
      <div className="w-36">
        <img src={cssIcon} alt="cssIcon" className="rounded-xl"/>
      </div>
      <div className="w-36">
        <img src={gitIcon} alt="gitIcon" className="rounded-xl"/>
      </div>
    </div>
  );
};

export default WheelOfSkills;
