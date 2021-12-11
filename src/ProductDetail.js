import React,{useContext} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import "./ProductDetail.css"
import Loading from './Loading'
import {useContextFetch} from "./Context"
import {contextCart} from "./Context"

function ProductDetail() {

    const cart=useContext(contextCart)
    const {id}=useParams()
    const [products,setProducts]=React.useState([])
    const [loading ,setLoading]=React.useState(true)
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

    const dispatch=useContextFetch()
    const addingToCart=(id)=>{
        dispatch({type:"add",payload:id})

    // const Cart=useContext(contextCart)
    }
    
    const product=products.find((product)=>parseInt(id)===product.id)
    // console.log(typeof id)
    // console.log(product)
    return (
    <>
            {loading  && <Loading></Loading> }
        <div className="productContainer">
            {product&& <>
                <h2 style={{"display":"flex","justifyContent":"center","marginTop":"115px","width":"100vw"}}>{product.title}</h2>
                <div className="imageAndDescrptionContainer">
                    <div className="ProductImageInDetailPage">
                        <img src={product.image} alt="image" />
                    </div>
                    <div className="productInfo productInDetailPage">
                        <div className="productDescription" style={{"marginBottom":"25px" }}>
                            <h4 style={{"fontWeight":"500"}}>{product.description}</h4>
                        </div>
                        <div className="productPrice" style={{"marginBottom":"30px"}}>
                            <h2>${product.price}</h2>
                        </div>
                        
                        {cart.indexOf(product.id)===-1 ? <button style={{"width":"120px","height":"60px","borderRadius":"10px","border":"none","backgroundColor":"#ff3e6c"}}onClick={()=>addingToCart(product.id)}>Add to cart</button>:<button style={{"width":"120px","height":"60px","borderRadius":"10px","border":"none","backgroundColor":"#3e92ff"}}>Added to Cart</button>}
                    </div>
                </div>
            </>
            }
        </div>
    </>
    )
}

export default ProductDetail;