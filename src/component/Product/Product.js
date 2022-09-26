import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { handlerAddToCart, product } = props
    const { img, name, price, seller, ratings } = product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <h3>{name}</h3>
                <h5>Price: ${price}</h5>
                <h5>Manufacturer: {seller}</h5>
                <h5>Ratings:{ratings}</h5>
            </div>
            <button onClick={() => handlerAddToCart(product)} className='button-cart'>
                <p className='add-cart'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;