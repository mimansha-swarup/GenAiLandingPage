import React from "react";
import { AvatarGroup, Button } from "../../components";
import { FaArrowTrendDown } from "react-icons/fa6";
import { ProfileAvatar } from "../../assets";

const LearnFromBest = () => {
  return (
    <div>
      <AvatarGroup avatars={[ProfileAvatar, ProfileAvatar, ProfileAvatar]} />
      <h3 className="white-text" >Learn From Best</h3>
      <Button type="outlined">
        Start learning <FaArrowTrendDown />{" "}
      </Button>
    </div>
  );
};

export default LearnFromBest;
