import React from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import "./ProductDetail.css"
function ProductDetail() {

    const {id}=useParams()
    const [products,setProducts]=React.useState([])
    React.useEffect(()=>{
        const newfunc = async () => {
        try {
                const res = await axios.get("https://fakestoreapi.com/products");
                setProducts(res.data);
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
    <div className="productcontainer">
        <h2>{product.title}</h2>
        <div className="imageContainer">
            <img src={product.image} alt="image" />
        </div>
        {/* <div className="productDescription">{product.description}</div> */}
    </div>
    </>
    )
}

export default ProductDetail;