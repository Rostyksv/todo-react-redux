import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Todos from './components/Todos';
import { addTodo } from './actions';

function App() {
  const [text, setText] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!text) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000)
    }
    else{
      console.log(e);
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
      <div className='container mt-5 '>
          <div className={showAlert ? "alert alert-danger alert-show" : 'alert-hidden'} role="alert">
            <span>Error! Write something please :\</span>
            <button onClick={() => setShowAlert(false)} style={{background:'transparent', outline:'none', border:'none'}}>X</button>
          </div>
            <form className='input-group mb-3' onSubmit={(e) => handleSubmit(e)}>
              <input value={text} onChange={((e) => handleInput(e))} type="text" className="form-control" placeholder="Enter Todo" aria-label="Recipient's username" aria-describedby="button-addon2"/>
              <button type="submit" className="btn btn-outline-secondary" id="button-addon2">Add</button>
            </form>
        <Todos />
      </div>
  );
}
export default App;
