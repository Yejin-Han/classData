import React from 'react';

function Header(props){
  return(
    <div className="header-top">
      <h1><a href='./' onClick={function(e){
        e.preventDefault();
        props.onCallBack();
      }}> {props.title} </a></h1>
    </div>
  );
}
export default Header;