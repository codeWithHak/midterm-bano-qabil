import React from "react";
import { useState } from "react";

import Exercises from "../components/Exercises";

import HeroBanner from "../components/HeroBanner";

import ExcerciseCard from "../components/ExcerciseCard";
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

      <ExcerciseCard exercises={exercises} />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </>
  );
};

export default Home;
