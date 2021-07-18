import React from 'react';
import "./CalorieCard.css"

const CalorieCard = (props) => {
    const {food, calorie, id, calorieList, setCalorieList} = props;
    
    const deleteCard = (id) => {
        const newList = calorieList.filter((item, idx) => idx !== id);
        setCalorieList(newList);
    }

    return (
        <div className="card">
            <div className="header">
                <h1>{food}</h1>
                <button onClick={() => deleteCard(id)}>Delete</button>
            </div>
            <h2>You have consumed {calorie} cals today</h2>
        </div>
    );
}

export default CalorieCard;