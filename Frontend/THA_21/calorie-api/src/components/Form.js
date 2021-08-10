import { useState } from "react";
import "./Form.css";

const Form = (props) => {
    const { addItem } = props;
    const [foodName, setFoodName] = useState("");
    const [calorie, setCalorie] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({ foodName, calorie });
        setFoodName("");
        setCalorie("");
    }
    
    return(
        <form id="my-form">
            <input id="food-name" required 
            className="input" 
            value={foodName} 
            type="text" 
            placeholder="Food Name"
            onChange={e => setFoodName(e.target.value)}></input>

            <input id="calories" required 
            className="calories" 
            value={calorie} 
            placeholder="Calorie Value"
            type="number" 
            onChange={e => setCalorie(e.target.value)}></input>

            <button onClick={handleSubmit}>Add Item</button>
        </form>
    );
}

export default Form;