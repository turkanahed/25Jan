import React from 'react'
import { CardContainer } from './style'

const Card = ({name,price,img,flower, handleDelete}) => {
    return (
        <CardContainer>
            <div className="MyCard">
                <div className="card-img">
                    <img src={img} alt="" />
                </div>
                <div className="card-desc">
                    <h2>{name}</h2>
                    <p>{price}</p>
                </div>
                <button onClick={(id)=>handleDelete(id)}>Delete</button>
            </div>
        </CardContainer>
    )
}

export default Card