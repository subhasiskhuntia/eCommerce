import React, {useContext} from 'react'
import {contextCart,useContextFetch} from './Context'
import axios from 'axios'
import Loading from './Loading'
import "./AddToCart.css"

const AddToCart = () => {
    const cart=useContext(contextCart)
    console.log(cart,"from add to cart")

    const [products,setProducts]=React.useState([])
    const [loading,setLoading]=React.useState(true)
    React.useEffect(()=>{
        const newfunc = async () => {
        try {
                const res = await axios.get("https://fakestoreapi.com/products");
                setProducts(res.data);
                setLoading(false)
            } catch (error) {
                console.log(error);
            }
        }
        newfunc();
    },[])

    var cartItemArray=[]

    const allCartItem=()=>{
        cart.map((cartedItem)=>{
            products.map((product)=>{
                if(product.id===cartedItem){
                    cartItemArray=[...cartItemArray,product]
                }
            })
        })
        return cartItemArray
    }
    allCartItem()
    const fetch=useContextFetch()
    
    const RemoveItem=(id)=>{
        console.log('inside RemoveItem')
        fetch({type:"remove",payload:id})
    }

    return (
        <>
        {loading && <Loading></Loading>}
        <div className="cartContainer">
                {cartItemArray.map((element)=>{
                    return(
                        <div className='singleCartElement'>
                            <div className='cartImageContainer'>
                                <img src={element.image} alt="" className='singleItemImage'/>
                            </div>
                            <div className='singleElementTitle'>
                                <h5>{element.title}</h5>
                            </div>
                            <div className='singleElementQuantity'>
                                <button className='increase'>-</button>
                                <h6>1</h6>
                                <button className='decrease'>+</button>
                            </div>
                            <div className='singleElementPrice'>
                                <h5>${element.price}</h5>
                            </div>
                            <div className='singleElementRemove'>
                                <button className='removeButton' onClick={()=>RemoveItem(element.id)}>remove</button>
                            </div>
                        </div>
                    )
                })
                }
                {cart.length===0 && <div style={{"height":"80vh","width":"100vw","display":"flex","justifyContent":"center","alignItems":"center"}}>empty cart</div> }
                {!loading && cart.length!==0 && <div className='totalCartValue'>
                    <h3>Total</h3>
                    <h5>$xxxx</h5>
                    <button className='buyNowFromCart'>Buy now</button>
                </div>}
            </div>
        </>
    )
}

export default AddToCart
