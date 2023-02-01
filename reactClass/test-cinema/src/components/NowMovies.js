import React from 'react';
import { Link } from 'react-router-dom';

function NowMovies(){
  return(
    <div className="now_movies">
      <ul className="movies_wrap">
        <li><Link to="/"><img src="./img/movie1.jpg" alt="" /></Link></li>
        <li><Link to="/"><img src="./img/movie2.jpg" alt="" /></Link></li>
        <li><Link to="/"><img src="./img/movie3.jpg" alt="" /></Link></li>
        <li><Link to="/"><img src="./img/movie4.jpg" alt="" /></Link></li>
        <li><Link to="/"><img src="./img/movie5.jpg" alt="" /></Link></li>
      </ul>
    </div>
  );
}

export default NowMovies;