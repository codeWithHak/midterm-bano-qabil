import React, { useState, useEffect } from "react";
import "./Search.css";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import Horizontal from "../HorizontalScroller/Horizontal";

const SearchExercises = ({
  bodyPart,
  exercises,
  setbodyPart,
  setExercises,
}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSubmit = async () => {
    if (search) {
      const excerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = excerciseData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  useEffect(() => {
    // console.log(exercises);
  }, [exercises]);

  return (
    <div className="search-div">
      <h1>Awesome Exercise you should Know</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Exercise Now"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>

      <Horizontal
        data={bodyParts}
        setbodyPart={setbodyPart}
        bodyPart={bodyPart}
        setExercise={setExercises}
      />
    </div>
  );
};

export default SearchExercises;
