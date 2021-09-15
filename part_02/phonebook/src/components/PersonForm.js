import React from "react";

const PersonForm = (props) => {
  const { newName, setNewName, newNumber, setNewNumber, handleEvent } = props;
  return (
    <div>
      <form>
        <div>
          name:{" "}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number:{" "}
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleEvent} type="submit">
            add
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
