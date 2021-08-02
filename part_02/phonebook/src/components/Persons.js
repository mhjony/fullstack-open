import React from "react";

const Persons = ({ persons, filterValue }) => {
  return (
    <div>
      {persons
        .filter((per) => {
          return per.name.toLowerCase().includes(filterValue);
        })
        .map((person) => (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        ))}
    </div>
  );
};

export default Persons;
