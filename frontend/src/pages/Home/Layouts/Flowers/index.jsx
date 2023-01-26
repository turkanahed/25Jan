import React, { useEffect, useState } from "react";
import Card from "../../../../components/Card";
import { FlowersContainer } from "./style";
import axios from "axios";
import { FiChevronDown } from "react-icons/fi";
import { TfiSearch } from "react-icons/tfi";

const Flowers = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [sorted, setSorted] = useState({
    sorted: "price",
    reversed: false,
  });
  

  //! Get
  const getData = async () => {
    const res = await axios.get("http://localhost:3010/flowers");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3010/flowers/${id}`);
    getData();
  };

  //! Search
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  //!Sort
  const sortData = () => {
    setSorted({ sorted: "price", reversed: !sorted.reversed });

    data.sort((a, b) => {
      if (sorted.reversed) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setData(data);
  };

  return (
    <FlowersContainer>
      <h3>Devoted to wonderful beauty</h3>
      <h4>Flowers Pricing</h4>
      <div onClick={sortData} className="filter">
        Filter by Price{" "}
        <span>
          <FiChevronDown />
        </span>
      </div>
      <form>
        <input onChange={handleChange} type="text" placeholder="Search.." />
        <span>
          <TfiSearch />
        </span>
      </form>
      <div className="container d-flex">
        {data &&
          data
            ?.filter((data) => {
              return value.trim().toLowerCase() === ""
                ? data
                : data.name.toLowerCase().includes(value.toLowerCase());
            })
            .map((item) => (
              <Card
                key={item._id}
                name={item.name}
                price={item.price}
                img={item.url}
                id={item._id}
                handleDelete={handleDelete}
              />
            ))}
      </div>
    </FlowersContainer>
  );
};

export default Flowers;
