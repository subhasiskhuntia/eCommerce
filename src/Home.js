import React  from 'react'
import  "./Home.css"
import Product from './Product'
import axios from 'axios'
import {Link} from "react-router-dom"

function Home() {
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
    return (
        <>
        {/* banner image
         */}
        <div className="Home">
            <div className="imageContainer">
            <img src="https://i.ibb.co/jDNJzHC/y-FROa1638480320-1.jpg" 
            alt="banner"
            className="bannerImage" />
            </div>
         {/* banner image ended */}

            {/* adding to the product  */}

            <div className="Products">
                {products.map((product)=>{
                    return(
                    <Link style={{"textDecoration":"none","color":"black"}} to={`/product/${product.id}`}>
                        <Product key={product.id} {...product}>
                        <img src="https://i.ibb.co/jDNJzHC/y-FROa1638480320-1.jpg" 
            alt="banner"
            className="bannerImage" />
                        </Product>
                    </Link>
                )})}   
            </div>
        </div>
        </>
    )
}

export default Home
