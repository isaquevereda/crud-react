import React, {useState, useEffect} from 'react'
import './App.css';
import Axios from "axios";
import Card from './components/cards/card';

function App() {
  const [values, setValues] = useState();
  const [listGames, setListGames] = useState();

  const handleChangeValues = value => {
    setValues(prevValue=>({
      ...prevValue, 
      [value.target.name]: value.target.value,
    }))
  }

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", values).then((response) =>{
      document.querySelector()
      console.log(response);
    })
  }

  useEffect(()=> {
    Axios.get("http://localhost:3001/list").then((response) => {
      setListGames(response.data)
    })
  },[listGames]);
  return (
    <div className="app--container">
      <div className='register--container'>
        <h1 className='register--title'>Scrim Shop</h1>
        <input type="text" name="name" placeholder='Nome' onChange={handleChangeValues} className='register--input form-control mb-3'/>
        <input type="text" name="cost" placeholder='Preço' onChange={handleChangeValues} className='register--input form-control mb-3'/>
        <input type="text" name="category" placeholder='Categoria' onChange={handleChangeValues} className='register--input form-control mb-3'/>
        <button className='register--button btn btn-primary' onClick={() => handleClickButton()}>Cadastrar</button>
      </div>
      { typeof listGames !== "undefined" && listGames.map((value) => {
        return <Card key={value.id} listCard={listGames} setListGames={setListGames} id={value.id} name={value.name} cost={value.cost} category={value.category}></Card>
      })}
    </div>

  );
}

export default App;
