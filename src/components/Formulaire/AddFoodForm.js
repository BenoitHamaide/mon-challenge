

import React, { useState } from "react";

const AddFoodForm = () => {
  const [listItems, setListItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = e.target.item.value;

    setListItems([...listItems, newItem]);

    e.target.item.value = '';
  };

  return (
    <div className="form">
      <ul>
        
        {listItems.map((item) => (
          <li key={item}>{item}</li> //ajout du li suite au submit 
        ))}
      </ul> <form onSubmit={handleSubmit}>
        <button type="submit">Ajoute un aliment</button>
        <input type="text" name="item" />     
      </form>
    </div>
  );  
};
export default 
AddFoodForm
;
