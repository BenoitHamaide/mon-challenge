import React from 'react';
import AddFoodForm from '../Formulaire/AddFoodForm';

const TitleMain = () => {
const textBarre = (e) => {
  e.target.classList.toggle('texteBarré');
}

  return (
    <div className='container-main'>
    <h2 className='main-title'>Mémo :</h2>
    <h2 className='title-list'>Liste de courses</h2>
    <ul>
    {
  ["farine", "lait", "oeuf"].map((item) => (
    <li><button onClick={(e)=> textBarre(e)}>{item}</button></li>
  ))
}
      </ul>
      <AddFoodForm/>
    </div>
    
  );
};

export default TitleMain;
