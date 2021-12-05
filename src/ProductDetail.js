import React from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import "./ProductDetail.css"
import Loading from './Loading'
function ProductDetail() {

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
    
    const product=products.find((product)=>parseInt(id)===product.id)
    console.log(typeof id)
    console.log(product)
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
                        <button style={{"width":"120px","height":"60px","borderRadius":"10px","border":"none","backgroundColor":"#ff3e6c","fontFamily":"font-family: Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif"}}>Buy Now</button>
                    </div>
                </div>
            </>
            }
        </div>
    </>
    )
}

export default ProductDetail;