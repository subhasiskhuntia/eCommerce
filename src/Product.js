import React from 'react'
import "./Product.css"
import {Link} from "react-router-dom"
import {useEffect,useReducer,useContext} from "react"
import {contextCart,contextFetch, useContextFetch} from "./Context"

function Product({id,title,image,description,price}) {
    const rating=5
    const dispatch=useContextFetch()
    const cart=useContext(contextCart)

    
    const addingToCart=(id)=>{
        dispatch({type:"add",payload:id})

    // const Cart=useContext(contextCart)
    }
    return (
        <div className="container">
            <div className="product" id="product">
                <Link to={`/product/${id}`} className="productImage" className="LinkImage">                
                <img src={image} alt="image" className="productImage"/>
                </Link>
                <div className="productInfo">
                <Link  style={{"textDecoration":"none","color":"black"}} to={`/product/${id}`}>
                <h4>{title}</h4>
                </Link>
                </div>
                {/* <div>
                    {Array(rating).fill().map((_)=> <span className="star">&#x2B50;</span> )}
                    {Array(5-rating).fill().map((_)=> <span style={{"font-size":"25px"}} className="darkstar">&#9733;</span> )}</div> */}
                <h3>💲{price}</h3>
                {cart.indexOf(id)===-1 ? <button className="buyNow" onClick={()=>addingToCart(id)}>Add to Cart</button>:<button className='buyNow' style={{"backgroundColor":"#3e92ff"}}>Added to cart</button>}

            </div>
        </div>
    )
}

export default Product
