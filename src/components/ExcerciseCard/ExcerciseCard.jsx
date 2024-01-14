import React from "react";
import { Link } from "react-router-dom";

const ExcerciseCard = ({ exercises }) => {
  // Check if gifUrl is available before rendering the image
  console.log(exercises);
  const gifUrl = exercises?.gifUrl;

  return (
    <Link to={`/exercises:${exercises.id}`}>
      {gifUrl && (
        <img src={exercises.gifUrl} alt={exercises.name} loading="lazy" />
      )}
    </Link>
  );
};

export default ExcerciseCard;
