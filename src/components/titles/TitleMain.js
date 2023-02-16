import React from 'react';

const TitleMain = () => {
const textBarre = ()=>{
  console.log("texte barré");
}

  return (
    <div className='container-main'>
    <h2 className='main-title'>Mémo :</h2>
    <h2 className='title-list'>Liste de courses</h2>
    <ul>
        <li ><button onClick={()=> textBarre()}>farine</button></li>
        <li ><button onClick={()=> textBarre()}>lait</button></li>
        <li ><button onClick={()=> textBarre()}>oeuf</button></li>
      </ul>
    </div>
    
  );
};

export default TitleMain;
