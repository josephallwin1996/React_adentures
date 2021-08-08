import React,{useState, useEffect} from "react";

function ShopDetail({ match }){

    useEffect(() =>{
        fetchItems();
    },[]);

    const [items , setItem] = useState([]);

    const fetchItems = async () => { 
        const data = await fetch('https://fortnite-api.com/v2/news');
        const itemJson = await data.json();

        const items = itemJson.data.br.motds
        setItem(items);
    }
    return (
        <div>
        {
         items.filter(item => item.id === match.params.id).map(filteredId => (
             <div>
                 <h2>{filteredId.title}</h2>
                 <p>{filteredId.body}</p> 
                 <img src={filteredId.image} alt="image" width="50%"/>
            </div>
          ))   
        }
        </div>
      );
}
export default ShopDetail; 