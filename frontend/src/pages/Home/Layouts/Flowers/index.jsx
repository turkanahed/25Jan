import React, { useEffect, useState } from 'react'
import Card from '../../../../components/Card'
import { FlowersContainer } from './style'
import axios from "axios"
import { FiChevronDown } from "react-icons/fi";
import { TfiSearch } from "react-icons/tfi";

const Flowers = () => {
  const [data, setData] = useState(null);
  // const [filter, setFilter] = useState(false);
  // const [search, setSearch] = useState("")

  const getData = async (e) => {
    e?.preventDefault()
    const res = await axios.get("http://localhost:3010/flowers");
    setData(res.data);
    console.log(res);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3010/flowers/${id}`);
    getData();
  }

  // const handleFilter = () => {
  //   setData(
  //     []
  //       .concat(data)
  //       .sort(
  //         (a, b) =>
  //           parseInt(a.price) -
  //           parseInt(b.price)
  //       )
  //   );
  //   setFilter(!filter);
  // }
  return (
    <FlowersContainer>
      <h3>Devoted to wonderful beauty</h3>
      <h4>Flowers Pricing</h4>
      <div className="filter">Filter by Price <span><FiChevronDown /></span></div>
      <form>
        <input type="text" placeholder='Search..' />
        <span><TfiSearch /></span>
      </form>
      <div className="container d-flex">
        {data?.map((item) => (
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
  )
}

export default Flowers