import './App.css';
import React, {useState} from 'react';

function Modal(props){
  return(
    <div className="detail">
      <h3>{props.title[props.listIndex]}</h3>
      <p>상세내용 : ...</p>
      <p>날짜 : {props.date}</p>
      {/* <button>글 수정</button> */}
    </div>
  );
}

function App() {
  let [listTitle, setListTitle]=useState(['Javascript란','ECMAscript란','React란']);
  let [like, setLike]=useState([0,0,0]);
  let [inputValue, setInputValue]=useState('');
  let [listId, setListId]=useState(0);
  let [modal, setModal]=useState(false);
  let [now, setNow]=useState([new Date(),new Date(),new Date()]);
  const p=document.querySelector('.nowDate');
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Blog</h1>
      </header>
      <div className="write-box">
        <input type="text" value={inputValue} onChange={(e)=>{
          setInputValue(e.target.value);
        }} />
        <button onClick={()=>{
          if(inputValue!==''){
            /* let copyListTitle=[...listTitle];
            copyListTitle.unshift(inputValue);
            setListTitle(copyListTitle); */
            let copyListTitle=[inputValue,...listTitle];
            setListTitle(copyListTitle);
            setInputValue('');
            let newLikeList=[0,...like];
            setLike(newLikeList);
            let newNowList=[new Date(),...now];
            setNow(newNowList);
          }
        }}>리스트 등록</button>
      </div>
      {
        listTitle.map((data,idx)=>(
          <div className="list" key={idx}>
            <h3 onClick={(e)=>{
              if(!modal || (idx!==listId)){
                setModal(true);
                setListId(idx);
              } else{
                setModal(false);
              }
            }}>
              {data}&nbsp; {/* <==>listTitle[idx] */}
              <span onClick={(e)=>{
                e.stopPropagation();
                let copyLike=[...like];
                copyLike[idx]++;
                setLike(copyLike);
              }}>👍</span><span>{like[idx]}</span>
            </h3>
            <p className="nowDate">
              {`${now[idx].getFullYear()}년 `}{`${now[idx].getMonth()+1}월 `}{`${now[idx].getDate()}일 `}{`${now[idx].getHours()}시 `}{`${now[idx].getMinutes()}분 `}{`${now[idx].getSeconds()}초`}
            </p>
            <button onClick={()=>{
              let copyListTitle=[...listTitle];
              copyListTitle.splice(idx,1);
              setListTitle(copyListTitle);
            }}>리스트 삭제</button>
          </div>
        ))
      }
      {
        (modal===true)? <Modal title={listTitle} listIndex={listId} date={p.innerHTML} /> : null
      }
    </div>
  );
}
export default App;
