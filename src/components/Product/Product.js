import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="shoe" />
            <div className='product-info'>
                <h5>{name}</h5>
                <h5>Price: ${price} </h5>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} </p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn'>Add to Cart
                <span>  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span>
            </button>

        </div>
    );
};

export default Product;