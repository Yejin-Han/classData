import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState{
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Byun BaekHyun",
      url: "https://dimg.donga.com/wps/NEWS/IMAGE/2020/07/01/101767502.2.jpg",
      age: 30,
      note: "노래 진짜 잘하고 귀엽고 다정해"
    }
  ]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
