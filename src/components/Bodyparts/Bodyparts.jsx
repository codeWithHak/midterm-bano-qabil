import React from "react";
import logo from "/src/assets/icons/gym.png";
import "./Bodyparts.css";
const BodyParts = ({ item, excercise, bodyPart, setbodyPart }) => {
  return (
    <div
      className="bodypart-div"
      onClick={() => {
        setbodyPart(item);
        // window.scrollTo({ to: 100, left: 100 });
      }}>
      <img src={logo} alt="aa" />
      <h3>{item}</h3>
    </div>
  );
};
export default BodyParts;
