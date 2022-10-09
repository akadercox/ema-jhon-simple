import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h3>Order Summary</h3>
               <p>Selected item: {cart.length} </p>
               <p>Total Price:</p>
               <p>Total Shipping Charge:</p>
               <p>Tax:</p>
               <h3>Grand Total: </h3>
        </div>
    );
};

export default Cart;