import './App.css';
import {useState} from 'react';

function Main(props){
  return(
    <div>
      <h2>안녕하세요. 저는 {props.name}({props.job})입니다.</h2>
    </div>
  );
}
function App() {
  const names=[['홍길동','회사원'],['김철수','학생'],['김영희','학생'],['고길동','퍼블리셔']];
  const nameList=names.map((nameData,idx)=>(
    <Main key={idx} name={nameData[0]} job={nameData[1]}/>
  ));
  const [inputValue, setInputValue]=useState('');
  const [personData, setPersonData]=useState([]);
  const inputChange=(e)=>{ setInputValue(e.target.value); }
  const addPerson=()=>{
    setPersonData([...personData,inputValue]);
  }
  console.log(names);
  return (
    <div className="App">
      <div className="name-card">{nameList}</div>
      <form>
        <input type="text" value={inputValue} onChange={inputChange}/>
        <button type="submit" onClick={addPerson}>추가</button>
      </form>
    </div>
  );
}

export default App;
