import React, { useContext } from "react";
import BodyParts from "../Bodyparts/Bodyparts";
import "./Horizontal.css";
// import { Typography } from "@mui/material";
// import RightArrowIcon from "/src/assets/icons/right-arrow.png";
// import LeftArrowIcon from "/src/assets/icons/left-arrow.png";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
const Horizontal = ({ data, exercises, bodyPart, setbodyPart }) => {
  //   console.log(data);
  // const LeftArrow = () => {
  //   const { scrollPrev } = useContext(VisibilityContext);

  //   return (
  //     <Typography onClick={() => scrollPrev()} className="right-arrow">
  //       <img src={LeftArrowIcon} alt="right-arrow" />
  //     </Typography>
  //   );
  // };
  // const RightArrow = () => {
  //   const { scrollNext } = useContext(VisibilityContext);

  //   return (
  //     <Typography onClick={() => scrollNext()} className="left-arrow">
  //       <img src={RightArrowIcon} alt="right-arrow" />
  //     </Typography>
  //   );
  // };
  return (
    <ScrollMenu>
      {data.map((item) => (
        <div key={item} itemID={item.id} itemtitle={item.id}>
          <BodyParts
            exercises={exercises}
            item={item}
            bodyPart={bodyPart}
            setbodyPart={setbodyPart}
          />
        </div>
      ))}
    </ScrollMenu>
  );
};

export default Horizontal;
