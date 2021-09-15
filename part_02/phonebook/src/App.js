import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  /*const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);*/
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/persons")
      .then((response) => {
        console.log(response.data);
        setPersons(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterArr, setFilterArr] = useState("");

  const handleEvent = (e) => {
    e.preventDefault();
    const ifFound = persons.find((p) => p.name === newName);

    if (ifFound) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterArr={filterArr} setFilterArr={setFilterArr} />
      <h2>add a new</h2>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        handleEvent={handleEvent}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filterArr={filterArr} />
    </div>
  );
};

export default App;
