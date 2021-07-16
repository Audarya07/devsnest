import React from 'react';
import "./CalorieCard.css"

const CalorieCard = (props) => {
    const {food, calorie} = props;
    return (
        <div className="card">
            <h1>{food}</h1>
            <h2>You have consumed {calorie} cals today</h2>
        </div>
    );
}

export default CalorieCard;