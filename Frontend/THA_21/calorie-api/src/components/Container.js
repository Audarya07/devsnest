import { useState } from "react";
import "./Container.css";

const Container = (props) => {
  const [isEdit, setIsEdit] = useState("");
  const { item, index, deleteItem, updateItem } = props;
  return (
    <div className="card">
      {
        isEdit ? (
          <input id="food-name" required
          name="foodName" 
          className="input" 
          value={item.foodName} 
          type="text" 
          placeholder="Food Name"
          onChange={e => updateItem(index, {...item, foodName: e.target.value})}></input>
        ) : (
          <div>
            <h5 className='card-title'>{item.foodName}</h5>
          </div>
        )
      }

      {
        isEdit ? (
          <input
            type='number'
            name='calorie'
            id='calorie'
            required
            value={item.calorie}
            onChange={(e) => updateItem(index, {...item, calorie: e.target.value })}
          />
        ) : (
          <p className="card-text"> You have consumed {item.calorie} calories </p>
        )
      }

      <button className='' onClick={() => deleteItem(index)}>
        Delete
      </button>

      <button className='' onClick={() => {setIsEdit(!isEdit)}}>
        {isEdit ? "Done" : "Edit Here"}
      </button>
    </div>
  );
}

export default Container;