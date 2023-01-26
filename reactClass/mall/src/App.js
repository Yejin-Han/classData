/* import logo from './logo.jpg'; */
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import {Container, Navbar, Nav, NavDropdown, Row, Col, Button, Offcanvas, ListGroup} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import axios from 'axios';
import data from './data/data';
//import Main from './Main'; //useState 전역에서 활용하려면 js를 따로 빼지 않고 app.js에서 활용하는 것이 좋음.
import Company from './pages/Company';
import Business from './pages/Business';
import Esg from './pages/Esg';
import Detail from './pages/Detail';
import Cart from './pages/Cart';

let TopBox=styled.div`
  width: 80%;
  padding: 20px;
  color: #333;
  margin: 100px auto 0;
  padding: 70px 0;
  text-align: center;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
`

function Colmd(props){
  let navigate=useNavigate();
	return(
		<Col md={3}>
			<img src={props.contents.src} alt="" onClick={()=>{ navigate('/detail/'+props.contents.id) }} />
			<h4>{props.contents.brand}</h4>
			<p>{props.contents.title}</p>
			<p>{props.contents.price}</p>
		</Col>
	);
}

function NavContent(props){
	if(props.tab===0){
		return( <TopBox> HAZZIS, DAKS, ISABEL MARANT, ATHE </TopBox> );
	}
	if(props.tab===1){
		return( <TopBox> HAZZIS, DAKS, JILLSTUART, MAESTRO </TopBox> );
	}
	if(props.tab===2){
		return( <TopBox> REEBOK, DOUBLE FLAG, CHAMPION, LAFUMA </TopBox> );
	}
}

function Navtab(){
	let [tab, setTab]=useState(0);
	return(
		<>
			<Nav variant="pills" defaultActiveKey="/">
				<Nav.Item>
					<Nav.Link onClick={()=>{ setTab(0) }}>WOMEN</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link onClick={()=>{ setTab(1) }}>MEN</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link onClick={()=>{ setTab(2) }}>SPORTS</Nav.Link>
				</Nav.Item>
			</Nav>
			<NavContent tab={tab} />
		</>
	);
}

function App() {
  let navigate=useNavigate();
	let [newPdt, setNewPdt]=useState(data);
  //let [clickable, setClickable]=useState(true);
  //let [sliceNum, setSliceNum]=useState(0);
  let [addControl, setAddControl]=useState(1);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    if(localStorage.getItem('Recently')===null) localStorage.setItem('Recently', JSON.stringify([]));
  }, []);
  let recentPdt=JSON.parse(localStorage.getItem('Recently'));

  return (
    <div className="App">
      <Navbar>
        <Container>
          <Navbar.Brand className="logo">
            {/* <img src={logo} alt="lfmall" />  - src 안에 있을 때 */}
            {/* <img src={process.env.PUBLIC_URL+'/images/logo.jpg'} alt="lfmall" />  - public에 있을 때 */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Item><Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link></Nav.Item>
              <Nav.Item>
                <NavDropdown title="Company" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={()=>{ navigate('/company') }}>회사소개</NavDropdown.Item>
                  <NavDropdown.Item onClick={()=>{ navigate('/company/business') }}>사업영역</NavDropdown.Item>
                  <NavDropdown.Item onClick={()=>{ navigate('/company/esg') }}>ESG</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              {/* <Nav.Item><Nav.Link onClick={()=>{ navigate('/detail') }}>Details</Nav.Link></Nav.Item> */}
              <Nav.Item><Nav.Link onClick={()=>{ navigate('/woman') }}>여성</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link onClick={()=>{ navigate('/man') }}>남성</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link onClick={()=>{ navigate('/accShoes') }}>잡화/슈즈</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link onClick={()=>{ navigate('/luxury') }}>명품</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link onClick={()=>{ navigate('/sports') }}>골프/스포츠</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link onClick={()=>{ navigate('/beauty') }}>뷰티</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link onClick={()=>{ navigate('/living') }}>리빙</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link onClick={()=>{ navigate('/cart') }}>장바구니</Nav.Link></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Button variant="primary" onClick={handleShow}>
        오늘 본 상품 리스트
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>최근 본 상품</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            {
              recentPdt.map((data,idx)=>{
                return(
                  <ListGroup.Item key={idx}>{data}</ListGroup.Item>
                )
              })
            }
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
      {/* <Link to="/">Home</Link> |
      <Link to="/woman"> 여성</Link> |
      <Link to="/man"> 남성</Link> |
      <Link to="/accShoes"> 잡화/슈즈</Link> |
      <Link to="/luxury"> 명품</Link> |
      <Link to="/sports"> 골프/스포츠</Link> |
      <Link to="/beauty"> 뷰티</Link> |
      <Link to="/living"> 리빙</Link> */}
      <Routes>
        <Route path="/" element={
          <>
            <div className="main-visual">
              <img src="images/1672995210793.jpg" alt="" />
            </div>
            <TopBox className="new_pdt">
              <h3>이번 주 신상품</h3>
              <Button variant="link" onClick={()=>{
                //if(clickable){
                  //console.log(clickable);
                  axios.get('./data/newData.json')
                    .then((result)=>{
                      /* let copyResult=[...result.data];
                      let temp=copyResult.slice(sliceNum,sliceNum+4);
                      let copyPdt=[...newPdt,...temp];
                      setNewPdt(copyPdt);
                      setSliceNum(sliceNum+4);
                      if(sliceNum>=copyResult.length-4) setClickable(false); */
                      let num=Math.ceil(result.data.length/4);
                      if(addControl<=num){
                        let newData=[...result.data].slice((addControl-1)*4, addControl*4);
                        let copyData=[...newPdt,...newData];
                        setNewPdt(copyData);
                        setAddControl(addControl+1);
                      }
                    })
                    .catch(()=>{ console.log('새로고침'); });
                //}
              }}>더보기</Button>
            </TopBox>
            <Container className="new_item_wrap">
              <Row className="new_item_list">
                {
                  newPdt.map((dv,idx)=>{
                    return(
                      <Colmd contents={dv} key={idx} />
                    )
                  })
                }
              </Row>
              <Row>
                <Navtab />
              </Row>
            </Container>
          </>
        } />
        <Route path="/company" element={ <Company /> }>
          <Route path="business" element={ <Business /> } />
          <Route path="esg" element={ <Esg /> } />
        </Route>
        <Route path="/detail/:id" element={ <Detail newPdt={newPdt} /> } />
        <Route path="/woman" element={ <div>여성</div> } />
        <Route path="/man" element={ <div>남성</div> } />
        <Route path="/accShoes" element={ <div>잡화/슈즈</div> } />
        <Route path="/luxury" element={ <div>명품</div> } />
        <Route path="/sports" element={ <div>골프/스포츠</div> } />
        <Route path="/beauty" element={ <div>뷰티</div> } />
        <Route path="/living" element={ <div>리빙</div> } />
        <Route path="/cart" element={ <Cart /> } />
      </Routes>
    </div>
  );
}

export default App;
