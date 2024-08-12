import React from "react";
import { useParams, Navigate } from "react-router-dom";

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find((d) => d.name.toLowerCase() === name.toLowerCase());

  if (!dog) return <Navigate to="/dogs" />;

  return (
    <div>
      <h2>{dog.name}</h2>
      <img src={`/images/${dog.src}.jpg`} alt={dog.name} />
      <h3>Age: {dog.age}</h3>
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
