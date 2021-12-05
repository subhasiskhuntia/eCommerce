import React ,{useEffect,useState,useReducer} from 'react'

const addToCart = () => {
    const [cart,setCart]=useState([])
    const defaultState={
        id:null,
        image:"",
        amount:0,
        title:"",
    }
    const reducer=(state,action)=>{
        switch (action.type) {
            case "ADD_TO_CART":
                
        
            default:
                break;
        }
        
    }
    const [state,dispath]=useReducer(reducer,defaultState)
    return (
        <div>
            
        </div>
    )
}

export default addToCart
