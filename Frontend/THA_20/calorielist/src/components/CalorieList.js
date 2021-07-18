import React, { useEffect, useState } from 'react';
import CalorieCard from './CalorieCard';
import "../App.css";

const CalorieList = () => {
    const [calorieList, setCalorieList] = useState([]);

    useEffect(() => {
        const data = [
            {
                food:"Pizza",
                calories: 200,
            },
            {
                food:"Pani Puri",
                calories: 56,
            },{
                food:"Burger",
                calories: 500,
            },{
                food:"Coffee",
                calories: 250,
            },{
                food:"Fried Rice",
                calories: 10,
            }
        ]

        setCalorieList(data);
    },[]);

    return(
        <div className="container">
            {
            calorieList.length > 0 ?
                calorieList.map((item, idx) => {
                    return(
                            <CalorieCard key={idx} food={item.food} calorie={item.calories} id={idx} calorieList={calorieList} setCalorieList={setCalorieList}  />
                    );
                }) :
                <h1>No items left</h1>
            }
        </div>
    );
}

export default CalorieList;