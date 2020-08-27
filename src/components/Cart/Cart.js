import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart,'cart');
    let total = 0;
    for (let i = 0; i <cart.length; i++) {
        const course = cart[i];
        total = total + course.price;
    }
    return (
        <div className="order">
            <h2>Order Summary</h2>
            <h4>Course Enroll: {cart.length}</h4>
            <h3>Total Course Price: ${total}</h3>

        </div>
    );
};

export default Cart;