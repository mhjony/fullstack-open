import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const handlerAddName = (event) => {
    event.preventDefault();
    const found = persons.some((el) => el.name === newName);
    if (found) {
      alert(`${newName} is already added to phonebook `);
      setNewName("");
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
      setNewName("");
      setNewNumber("");
      console.log(`button clicked`);
    }
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Filter setFilterValue={setFilterValue} />

      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        handlerAddName={handlerAddName}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} filterValue={filterValue} />
    </>
  );
};
export default App;
