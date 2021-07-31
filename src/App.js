import React, { useEffect, useState } from "react"
import './App.css';
import Users from "./Users";

function App() {
 
  const API_ID = "60ffe0b5cc447f5a0b6c7013";
  //const API_KEY = "c4b482240e0ff2991eabc1f64ab28ab0";
  //const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_keys=${API_KEY}`;
  var myHeaders = new Headers();
  myHeaders.append("app-id", "60ffe0b5cc447f5a0b6c7013");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    getUsers(); 
  }, []);

  const getUsers = async () =>{
    const response = await fetch("https://dummyapi.io/data/api/user", requestOptions);
    const data = response.json();
    console.log(data);
  }

  return (
    <div className="App">
      Hi this is from react
      <form className="searchForm">
        <input type="text" className="searchText" />
        <button type="submit" className="searc-button" >search</button>
        <h1 onClick = {() => setCounter(counter + 1)} >{counter}</h1>
      </form>
      <Users />
    </div>
    
  );
}

export default App;
