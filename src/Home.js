import React  from 'react'
import  "./Home.css"
import Product from './Product'
import axios from 'axios'
import {Link} from "react-router-dom"
import Loading from './Loading'

function Home() {
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
                {loading && <Loading></Loading>}
                {products.map((product)=>{
                    return(
                    <div>
                        <Product key={product.id} {...product}>
                        {/* <img src="https://i.ibb.co/jDNJzHC/y-FROa1638480320-1.jpg" 
            alt="banner"
            className="bannerImage" /> */}
                        </Product>
                    </div>
                )})}   
            </div>
        </div>
        </>
    )
}

export default Home
