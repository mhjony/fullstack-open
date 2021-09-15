import React from "react";

const Persons = ({ persons, filterArr }) => {
  return (
    <div>
      {persons
        .filter((p) => p.name.toLowerCase().includes(filterArr.toLowerCase()))
        .map((p) => (
          <div key={p.name}>
            <div>
              {p.name} {p.number}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Persons;
