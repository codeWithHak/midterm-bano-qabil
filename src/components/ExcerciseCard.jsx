import React from "react";
import { Link } from "react-router-dom";

const ExcerciseCard = ({ exercises }) => {
  return (
    <>
      {exercises && exercises.length > 0 ? (
        exercises.map((exercise, index) => (
          <img
            key={index}
            src={exercise.gifUrl}
            alt={`Exercise Gif ${index + 1}`}
            width="300"
            height="200"
          />
        ))
      ) : (
        <p>No exercises found</p>
      )}
    </>
  );
};

export default ExcerciseCard;
