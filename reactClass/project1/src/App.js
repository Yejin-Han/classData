import './App.css';
import {useState} from 'react';
import {PropTypes} from 'prop-types'; //props의 type 지정을 위해
import Header from './Header'; /* .js 생략 가능 */

/* import {Component} from 'react';
class App2 extends Component */

const Navbar=()=>{
  return <nav className='navbar'>
          <a href="#">Menu1</a> |
          <a href="#"> Menu2</a> |
          <a href="#"> Menu3</a>
        </nav>
}
function Subtitle(props){ //그냥 연습삼아 해보는거임!! 하나라 원래 이렇게 안 뺌
  return(
    <h2 style={ {color: props.color, fontSize: '30px'} }>{props.title}</h2>
  );
}
function Wrapper(){
  let [imgsrc,setImgSrc]=useState(['./images/cup-1.jpg','./images/cup-2.jpg','./images/cup-3.jpg']);
  return(
    <> { /* 하나의 큰 태그로 묶이지 않으면 안됨-> 공백 태그를 강제로 넣어줌. */ }
    <button onClick={()=>{
      let copyImgs=[...imgsrc];
      copyImgs[0]='./images/cup-4.jpg';
      setImgSrc(copyImgs);
    }}>사진 변경</button>
    <div className="wrapper">
      <div className="card">
        <h3>사진제목</h3>
        <p><img src={imgsrc[0]} /></p>
        <p>Cras id vulputate nisi. Aliquam sed justo non enim volutpat luctus.</p>
      </div>
      <div className="card">
        <h3>사진제목</h3>
        <p><img src={imgsrc[1]} /></p>
        <p>Cras id vulputate nisi. Aliquam sed justo non enim volutpat luctus.</p>
      </div>
      <div className="card">
        <h3>사진제목</h3>
        <p><img src={imgsrc[2]} /></p>
        <p>Cras id vulputate nisi. Aliquam sed justo non enim volutpat luctus.</p>
      </div>
    </div>
    </>
  );
}
function Article(props){
  let [like, setLike]=useState(0);
  return(
    <article className='blogList'>
      <h3> {props.title} </h3>
      <p> {props.body} - <span onClick={()=>{setLike(like+1)}}>👍</span> {like}</p>
      <p> {props.time} </p>
    </article>
  );
}
function BlogList(){
  //title=state값 , setTitle=state값 변경함수 || let [v1,v2]=["a-2","b-3"]
  let [title, setTitle]=useState(['Blog Title1','Blog Title2','Blog Title3','Blog Title4']);
  let [text, setText]=useState(['blog content1','blog content2','blog content3','blog content4']);
  let [time, setTime]=useState(['2023년1월1일','2023년1월2일','2023년1월3일','2023년1월4일']);
  let [like1, setLike1]=useState(0);
  return(
    <>
    <article className="blogList">
      <h3> {title[0]} </h3>
      <p> {text[0]} - <span onClick={()=>{setLike1(like1+1)}}>👍</span> {like1}</p>
      <p> {time[0]} </p>
    </article>
    <Article title="Blog Title2" body="blog content2" time="2023년1월2일" />
    <Article title="Blog Title3" body="blog content3" time="2023년1월3일" />
    <Article title="Blog Title4" body="blog content4" time="2023년1월4일" />
    </>
  );
}
function Counter(){
  let [count,setCount]=useState(0);
  const increaseNum=()=>{ setCount(count+1); }
  const decreaseNum=()=>{ setCount(count-1); }
  return(
    <div>
      <button onClick={increaseNum}>+1</button>
      <button onClick={decreaseNum}>-1</button>
      <p>{count}</p>
    </div>
  );
}
function Formtest(){
  const [txtValue, setTxtValue]=useState('');
  const valChange=(e)=>{
    setTxtValue(e.target.value);
  }
  return(
    <>
    <input type="text" value={txtValue} onChange={valChange} />
    <br />
    <div>{txtValue}</div>
    </>
  );
}
function App() {
  return (
    <div className="App">
      <Header onCallBack={function(){ alert('warning'); }} />
      <Navbar />
      <Subtitle color='#f90' title='최근 포스트' />
      <BlogList />
      <Subtitle color='#06f' title='인기제품 리뷰' />
      <Wrapper />

      <Counter />
      <Formtest />
    </div>
  );
}
Header.propTypes={title: PropTypes.string.isRequired} //import 필요함, 현재 안되고 있음!
Header.defaultProps={title: 'React Blog'} //import 필요 없음
export default App;