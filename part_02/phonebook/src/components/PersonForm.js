import React from "react";

const PersonForm = (props) => {
  const { newName, newNumber, setNewName, setNewNumber, handlerAddName } =
    props;
  return (
    <>
      <form>
        <div>
          name:{" "}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
          <br />
          number:{" "}
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" onClick={handlerAddName}>
            add
          </button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
