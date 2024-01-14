import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import Exercises from "../components/Exercises";

import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExcercises/SearchExercises";

const Home = () => {
  const [bodyPart, setbodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setbodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </>
  );
};

export default Home;
