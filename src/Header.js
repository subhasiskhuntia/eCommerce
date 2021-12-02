import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
function Header() {
    return (
        <nav className="header">
            <div className="under"></div>

            {/* logo */}

            <Link to="./" className="logoLink">
                <img src="https://t4.ftcdn.net/jpg/02/77/63/61/360_F_277636112_e0Y1EO4DFFENxjrtYfZbIPUBRv8t9VBd.jpg"
                alt="logo" 
                className="logo" />
            </Link>

            {/* Search box */}

            <input type="text" className="header__searchInput" />
            <img src="https://icons-for-free.com/iconfiles/png/512/look+magnifying+glass+search+icon-1320196720531471752.png" 
            alt="search"
            className="searchIcon" />
            
            {/* all linkes */}
            <div className="navigationLink">
                {/* sign IN and sign out */}
                <Link to="/login" className="loginLink">
                    <div className="loginStatus">
                        <span className="upper">Hello user  </span>
                        <span className="lower"> Sign in  </span>
                    </div>
                </Link>
                {/* Order and return  */}
                <Link to="/order" className="orderLink">
                    <div className="order">
                        <span className="upper"> Return</span>
                        <span className="lower">Order</span>
                    </div>
                </Link>
                <Link to="/cart" className="cartLink">
                    <div className="cart">
                        {/* add  number of item in cart */}
                        <span>
                            <img src="https://cdn1.vectorstock.com/i/1000x1000/39/05/shopping-basket-icon-digital-green-vector-20923905.jpg"
                            alt="basket"
                            className= "cartIcon" />
                        </span>
                        <span className="itemNumber">0</span>
                    </div>
                </Link>
            </div>

        </nav>
    )
}

export default Header
