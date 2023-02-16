import React from 'react';

const TitleMain = () => {
const textBarre = (e) => {
  e.target.classList.toggle('texteBarré');
}

  return (
    <div className='container-main'>
    <h2 className='main-title'>Mémo :</h2>
    <h2 className='title-list'>Liste de courses</h2>
    <ul>
        <li ><button onClick={(e)=> textBarre(e)}>farine</button></li>
        <li ><button onClick={(e)=> textBarre(e)}>lait</button></li>
        <li ><button onClick={(e)=> textBarre(e)}>oeuf</button></li>
      </ul>
    </div>
    
  );
};

export default TitleMain;
