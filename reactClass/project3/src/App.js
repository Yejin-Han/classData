import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [inputValue, setInputValue]=useState('');
  const [todoList, setTodoList]=useState([]);
  const inputMemo=document.querySelector('#memo');
  // window.localStorage.clear();
  let localData=JSON.parse(localStorage.getItem('list'));
  let strArray='';
  if(localData!==null){
    strArray=Object.values(localData);
  } else{
    strArray=[];
  }
  const dataCall=()=>{ setTodoList(strArray); }
  useEffect(dataCall, []);
  const addList=()=>{
    if(inputValue!==''){
      let data=[...todoList,inputValue];
      setTodoList(data);
      setInputValue('');
      //로컬저장소에 저장(only string type)
      localStorage.setItem('list',JSON.stringify(data));
    }
  }
  const delList=(e)=>{
    let newList=[];
    newList=[...todoList];
    let indexNum=Number(e.target.id);
    newList.splice(indexNum,1);
    setTodoList(newList);
    const listData=JSON.parse(localStorage.getItem('list'));
    let strArr=Object.values(listData);
    strArr.splice(indexNum,1);
    localStorage.setItem('list',JSON.stringify(strArr));
  }
  return (
    <div className="App">
      <header>
        <input type='text' id='memo' value={inputValue} placeholder='할 일 작성하기'
        onChange={ (e)=>{setInputValue(e.target.value); }} />
        <button type='button' onClick={addList}>추가</button>
      </header>
      <section>
        <h1>Todo List</h1>
        <div className='Lists'>
          {
            todoList.map((data,idx)=>(
              //얘를 컴포넌트화하기, checkbox custom(label로)
              <div key={idx}>
                <input type='checkbox' id='finish' />
                <label htmlFor='finish'>{data}</label>
                <button type='button' className='delBtn' id={idx} onClick={delList}>삭제</button>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  );
}

export default App;
