import CalorieCard from './components/CalorieCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">  
        <CalorieCard food="Pizza" calorie="56" />
        <CalorieCard food="Burger" calorie="69" />
        <CalorieCard food="Coke" calorie="500" />
        <CalorieCard food="Brownie" calorie="180" />
        <CalorieCard food="Fried Rice" calorie="200" />
        <CalorieCard food="Pani Puri" calorie="20" />
      </div>
    </div>
  );
}

export default App;
