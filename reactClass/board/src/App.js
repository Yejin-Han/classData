import { Route, Routes } from "react-router-dom";
import BoardList from "./components/BoardList";
import Update from "./components/Update";
import Write from "./components/Write";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <BoardList /> } />
        <Route path="/add" element={ <Write /> } />
        <Route path="/update/:id" element={ <Update /> } />
      </Routes>
    </div>
  );
}

export default App;