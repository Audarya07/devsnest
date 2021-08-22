import './App.css';
import {updateName, updateEmail} from './actions';
import { useDispatch, useSelector} from 'react-redux'; 

function App() {
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>FORM DATA REDUX APP</h1>
      <div className="main">
        <h1>Input</h1>
        <input type="text" name="username" placeholder="Enter Name" onChange={(e)=>{
          dispatch(updateName(e.target.value));
        }}/>
        <br/>
        <input type="text" name="email" placeholder="Enter Email" onChange={(e)=>{
          dispatch(updateEmail(e.target.value));
        }} />
        <h1>Data</h1>
        <h4>Username: {form.name}</h4>
        <h4>Email: {form.email}</h4>
      </div>
    </div>
  );
}

export default App;
