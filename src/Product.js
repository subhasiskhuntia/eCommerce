import React from 'react'
import "./Product.css"
import {useEffect,useReducer} from "react"

function Product({id,title,image,description,price}) {
    console.log(typeof image)
    const rating=5
    // const [cart,setCart]=useEffect([])
    // const [state,dispath]=useReducer(reducer,defaultState)
    return (
        <div className="container">
            <div className="product">
                <img src={image} alt="image" className="productImage" />
                <div className="productInfo">
                <h4>{title}</h4>
                {/* <p>{description}</p> */}
                </div>
                {/* <div>
                    {Array(rating).fill().map((_)=> <span className="star">&#x2B50;</span> )}
                    {Array(5-rating).fill().map((_)=> <span style={{"font-size":"25px"}} className="darkstar">&#9733;</span> )}</div> */}
                <h3>💲{price}</h3>
                <button className="buyNow" >Add to Cart</button>
            </div>
        </div>
    )
}

export default Product
