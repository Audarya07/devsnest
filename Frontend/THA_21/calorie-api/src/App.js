import './App.css';
import Form from './components/Form';
import Container from './components/Container';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };
  
  const updateItem = (index, newItem) => {
    setItems(
      items.map((item, idx) => (
        idx === index ? {...items, ...newItem} : item 
      ))
    );
  }

  const deleteItem = (index, item) => {
    setItems(
      items.filter((itm, idx) => idx !== index)
    );
  }

  return (
    <div className="App">
      <Form addItem={addItem}/>
      {
        items.map((item, index) => (
          <Container
            item={item}
            key={index}
            index={index}
            updateItem={updateItem}
            deleteItem={deleteItem}
          />
        ))
      }
    </div>
  );
}

export default App;
