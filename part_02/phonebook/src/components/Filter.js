import React from "react";

const Filter = (props) => {
  return (
    <>
      filter shown with{" "}
      <input onChange={(e) => props.setFilterValue(e.target.value)} />
    </>
  );
};

export default Filter;
