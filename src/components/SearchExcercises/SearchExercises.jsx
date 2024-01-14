import React, { useState } from "react";
import "./Search.css";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import { useEffect } from "react";
import Horizontal from "../HorizontalScroller/Horizontal";

const SearchExercises = ({
  bodyPart,
  exercises,
  setbodyPart,
  setExercises,
}) => {
  const [search, setSearch] = useState([]);

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

  const HandleSubmit = async () => {
    if (search) {
      const excerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const SerachExcersiced = excerciseData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(SerachExcersiced);
      console.log(setExercises);
    }
  };
  return (
    <div className="search-div">
      <h1>Awesome Excercise you should Know</h1>
      <div className="seacrh-bar">
        <input
          type="text"
          placeholder="serarch Excericse Now"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button onClick={HandleSubmit}>Seacrh</button>
      </div>
      <Horizontal
        data={bodyParts}
        setbodyPart={setbodyPart}
        bodyPart={bodyPart}
        setExcercise={setExercises}
        // excercise={excercise}
      />
    </div>
  );
};

export default SearchExercises;
