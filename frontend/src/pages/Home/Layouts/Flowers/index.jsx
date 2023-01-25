import React, { useEffect, useState } from 'react'
import Card from '../../../../components/Card'
import { FlowersContainer } from './style'
import axios from "axios"

const Flowers = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:3050/flowers");
    setData(res.data);
    console.log(res);
  }

  useEffect(() => {
    getData()
  },[]);

  const handleDelete = (id)=>{
    axios.delete(`http://localhost:3050/flowers/${id}`);
    getData();
  }
  return (
    <FlowersContainer>
      <h3>Devoted to wonderful beauty</h3>
      <h4>Flowers Pricing</h4>
      <div className="container d-flex">
        {data?.map((flower) => (
          <Card
            key={flower.id}
            name={flower.name}
            price={flower.price}
            img={flower.url}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </FlowersContainer>
  )
}

export default Flowers