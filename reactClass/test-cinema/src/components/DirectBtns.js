import React from 'react';
import { Link } from 'react-router-dom';

function DirectBtns(){
  return(
    <div className="direct_btns">
			<Link to="/"><img src="./img/mid-item1.png" alt="" /></Link>
			<Link to="/"><img src="./img/mid-item2.png" alt="" /></Link>
			<Link to="/"><img src="./img/mid-item3.png" alt="" /></Link>
			<Link to="/"><img src="./img/mid-item4.png" alt="" /></Link>
			<Link to="/"><img src="./img/mid-item5.png" alt="" /></Link>
		</div>
  );
}

export default DirectBtns;