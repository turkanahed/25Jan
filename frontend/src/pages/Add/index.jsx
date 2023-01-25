import React, { useState } from 'react'
// import { loginformSchema } from '../../schema/formSchema'
import { AddContainer } from './style'
// import { yupResolver } from "@hookform/resolvers/yup"
// import { useForm } from "react-hook-form"
import axios from "axios"
const Add = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({ resolver: yupResolver(loginformSchema) });

  // const formSubmit = (data) => {
  //   console.log(data);
  // }

  const [state, setState] = useState({
    img: "",
    name: "",
    price: "",
  })

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const addData = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3050/flowers", state);
    setState("");
  }
  return (
    <AddContainer>
      <h1>Add Flowers</h1>
      <form>
        <input type="text" name='img' id='image' placeholder='image url..' onChange={handleChange} /> <br />
        {/* {errors?.img ? (
          <span style={{ color: "red" }}>{errors.img.message}</span>
        ) : (
          <></>
        )} */}
        <input type="text" name='name' id='name' placeholder='name..' onChange={handleChange} /> <br />
        {/* {errors?.name ? (
          <span style={{ color: "red" }}>{errors.name.message}</span>
        ) : (
          <></>
        )} */}
        <input type="number" name='price' id='price' placeholder='price..' onChange={handleChange} /> <br />
        {/* {errors?.price ? (
          <span style={{ color: "red" }}>{errors.price.message}</span>
        ) : (
          <></>
        )} */}
        <button onClick={addData}>Add</button>
      </form>
    </AddContainer>
  )
}

export default Add