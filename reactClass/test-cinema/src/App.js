import React, { useState } from 'react';  
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import MainVisual from './components/MainVisual';
import NowMovies from './components/NowMovies';
import Sp from './components/Sp';
import DirectBtns from './components/DirectBtns';
import EventPage from './components/EventPage';
import './App.scss';

function App() {
  let navigate = useNavigate();
  let [evtId, setEvtId] = useState(1);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<>
          <section id="sub_section">
            <MainVisual />
            <div id="contents">
              <NowMovies />
              <Sp />
              <div className="evt">
                <div className="title">
                  <h2>이벤트</h2>
                </div>
                <ul className="evt_wrap">
                  <li className="e1">
                    <img
                      src="./img/event1.jpg"
                      alt=""
                      onClick={()=>{
                        setEvtId(1);
                        navigate('/event/'+evtId);
                      }} />
                  </li>
                  <li className="e1">
                    <img
                      src="./img/event2.jpg"
                      alt=""
                      onClick={()=>{
                        setEvtId(2);
                        navigate('/event/'+evtId);
                      }} />
                  </li>
                  <li className="e2">
                    <img
                      src="./img/event3.jpg"
                      alt=""
                      onClick={()=>{
                        setEvtId(3);
                        navigate('/event/'+evtId);
                      }} />
                  </li>
                  <li className="float_r"><img src="./img/event4.jpg" alt="" /></li>
                  <li className="e3">
                    <img
                      src="./img/event5.jpg"
                      alt=""
                      onClick={()=>{
                        setEvtId(4);
                        navigate('/event/'+evtId);
                      }} />
                  </li>
                  <li className="e1">
                    <img
                      src="./img/event6.jpg"
                      alt=""
                      onClick={()=>{
                        setEvtId(6);
                        navigate('/event/'+evtId);
                      }} />
                  </li>
                </ul>
              </div>
              <DirectBtns />
            </div>
          </section>
        </>} />
        <Route path="/event/:id" element={ <EventPage id={evtId} /> } />
      </Routes>
    </div>
  );
}

export default App;
