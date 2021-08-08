import React,{useState, useEffect} from "react";
import {Link, withRouter} from "react-router-dom";
function Shop(){

    useEffect(() =>{
        fetchItems();
    },[]);

    const [items , setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.com/v2/news');
        const items = await data.json();
        setItems(items.data.br.motds);
        console.log(items.data.br.motds);
    }
    return (
        <div>
        {
         items.map(item => (
             <h1 key={item.id}>
                <Link to={`shop/${item.id}`}>{item.title}</Link>
             </h1>
         ))
        }
        </div>
      );
}
export default Shop;