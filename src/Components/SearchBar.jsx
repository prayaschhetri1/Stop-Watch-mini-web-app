import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const SearchBar = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = data.filter((item) => {
      return item.country === value;
    });

    setData(newData);
  }, [value]);

  useEffect(() => {
    searchData();
  }, [value]);
  const searchData = () => {
    axios(`http://localhost:8080/country`).then((res) => {
      setData(res.data);
    });
  };

  console.log(data);

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />

      <br />
      {data
        ?.filter((item) => {
          if (value === "") {
            return item;
          } else if (item.country.toLowerCase().includes(value.toLowerCase())) {
            return item;
          }
        })

        .map((item, index) => {
          return (
            <div className="items" key={index}>
              <p>{item.country}</p>
            </div>
          );
        })}
    </div>
  );
};

export default SearchBar;
