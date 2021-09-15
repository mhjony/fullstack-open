import React, { useState } from "react";

const Filter = () => {
  const [filterArr, setFilterArr] = useState("");
  return (
    <>
      <input value={filterArr} onChange={(e) => setFilterArr(e.target.value)} />
    </>
  );
};

export default Filter;
