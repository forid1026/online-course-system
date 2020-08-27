import React from 'react';
import './Course.css';

const Course = (props) => {
    const { name, images, price, enrollment, instructor, join, info, date } = props.course;
    return (
        <div className= "card mb-3 mt-4 text-center text-light" style={{ width: '40rem' }}>
            <img class="card-img-top  m-auto" src={images}/>
            <div className="card-body text-light">
                <h2 className="card-title">{name}</h2>
                <p className="card-text">{info}</p>
                <h6>Instructor : {instructor}</h6>
                <h6 className="card-text"><small>{join} {enrollment}</small></h6>
                <h4>${price}</h4>
                <button onClick={ () => {props.handleAddOrder(props.course)}} className="btn btn-success">Enroll Now</button>
                <p>Last update {date}</p>
            </div>

        </div>

    );
};

export default Course;