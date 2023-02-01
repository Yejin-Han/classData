import React from 'react';
import { Link } from 'react-router-dom';

function Sp(){
  return(
    <div className="sp">
      <div className="title">
        <h2>스페셜관</h2>
      </div>
      <ul className="sp_wrap">
        <li><Link to="/"><img src="./img/special1.png" alt="" /></Link></li>
        <li><Link to="/"><img src="./img/special2.png" alt="" /></Link></li>
        <li><Link to="/"><img src="./img/special3.png" alt="" /></Link></li>
        <li><Link to="/"><img src="./img/special4.png" alt="" /></Link></li>
        <li><Link to="/"><img src="./img/special5.png" alt="" /></Link></li>
        <li><Link to="/"><img src="./img/special6.png" alt="" /></Link></li>
        <li><Link to="/"><img src="./img/special7.png" alt="" /></Link></li>
        <li><Link to="/"><img src="./img/special8.png" alt="" /></Link></li>
      </ul>
    </div>
  );
}

export default Sp;