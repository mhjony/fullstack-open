import React, { useEffect, useState } from "react";
// import Filter from './components/Filter'
import axios from "axios";

const App = () => {
  const [country, setCountry] = useState([]);
  const [filterArr, setFilterArr] = useState("");
  let value;

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        console.log("Promise Fulfilled!!!");
        console.log("data:", response.data);
        setCountry(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [filterArr]);

  const HandleFilter = () => {
    const filteredElement = country.filter((p) =>
      p.name.toLowerCase().includes(filterArr.toLowerCase())
    );
    if (filteredElement.length < 10) {
      return filteredElement.map((p) => {
        <p>{p.name}</p>;
      });
    } else {
      return <p>Too many countries :(</p>;
    }
  };

  return (
    <div>
      find countries
      <input value={filterArr} onChange={(e) => setFilterArr(e.target.value)} />
      <button onClick={() => HandleFilter()}>Submit</button>
    </div>
  );
};

export default App;
