import React from "react";
import ExcerciseCard from "./ExcerciseCard/ExcerciseCard";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const Exercises = ({ exercises, setExercises, setbodyPart }) => {
  console.log(exercises);
  return (
    <div>
      {exercises.map((exercises, idx) => {
        <ExcerciseCard key={idx} excercise={excercise} />;
      })}
    </div>
  );
};

export default Exercises;
