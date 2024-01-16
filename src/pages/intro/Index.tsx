import ProfilePic from "../../assets/profilePics/ProfilePic-removedBg.png";

const IntroIndex = () => {
  return (
    <div className="custom-one-screen-page">
      <div id="header" className="flex">
        <div id="profilePic" className="w-60 rounded-md">
          <img src={ProfilePic} alt="profile_pic" />
        </div>
        <div>Intro</div>
      </div>
      <div>Description</div>
    </div>
  );
};

export default IntroIndex;
