import React, { useState } from 'react'
import { loginformSchema } from '../../schema/formSchema'
import { AddContainer } from './style'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import axios from 'axios'

const Add = () => {
  const [state, setState] = useState({
    img: "",
    name: "",
    price: null,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginformSchema) });

  const formSubmit = (data) => {
    console.log(data);
    addData();
  }

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const addData = () => {
    // e.preventDefault();
    if (!state.img || !state.name || !state.price) return;
    axios.post("http://localhost:3010/flowers", state);
    setState({
      img: "",
      name: "",
      price: null,
    });
  }
  return (
    <AddContainer>
      <h1>Add Flowers</h1>
      <form onSubmit={handleSubmit(formSubmit)}> 
        <input {...register("img")} value={state.img} type="text" name='img' id='image' placeholder='image url..' onChange={(e)=>handleChange(e)} /> <br />
        {errors.img ? (
          <span style={{ color: "red" }}>{errors.img.message}</span>
        ) : (
          <></>
        )} <br />
        <input  {...register("name")} value={state.name}  type="text" name='name' id='name' placeholder='name..' onChange={(e)=>handleChange(e)} /> <br />
        {errors.name ? (
          <span style={{ color: "red" }}>{errors.name.message}</span>
        ) : (
          <></>
        )} <br />
        <input  {...register("price")} value={state.price} type="number" name='price' id='price' placeholder='price..' onChange={(e)=>handleChange(e)} /> <br />
        {errors.price ? (
          <span style={{ color: "red" }}>{errors.price.message}</span>
        ) : (
          <></>
        )} <br />
      </form>
      <button onClick={addData}>Add</button>
    </AddContainer>
  )
}

export default Add