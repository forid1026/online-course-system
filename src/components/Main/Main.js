import React from 'react';
import './Main.css';
import fakeData from '../../fakeData';
import { useState } from 'react';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';


const Main = () => {
   const first12 = fakeData.slice(0,12);
   const [courses, setCourses] = useState(first12); 

   const [cart, setCart] = useState([]);

    const  handleAddOrder = (course) =>{
        const newCart = [...cart, course];
        setCart(newCart);

    }


    return (
        <div className="d-flex">
            <div className="col-md-8">
                {
                    courses.map((course => <Course key={course.id} handleAddOrder = {handleAddOrder} course={course}></Course> ))
                }
    
            </div>
            <div className="cart-container col-md-4">
            <Cart cart = {cart}></Cart>
            </div>
           
        </div>
    );
};

export default Main;