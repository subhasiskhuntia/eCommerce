import React from 'react'
import { reducer } from './Context'
import {contextCart} from "./Context"

const UseStateForCart = () => {
    const cart=React.useContext(contextCart)
    // setting up new state for item and quantity to be saved 
    console.log("from new function");
    const [itemQuantity,setItemQuantity]=React.useState([])
    React.useEffect(()=>{
            const settingItemQuantityFunction=()=>{
                cart.map((item)=>{
                    const newItemQuantity={id:item,quantity:1}
                    setItemQuantity([...itemQuantity,newItemQuantity])
                })
            }
            settingItemQuantityFunction()
        },[reducer])
    console.log(itemQuantity,"heello")

    // setting up new state for item and quantity ends
    return [itemQuantity]
}

export default UseStateForCart
