import { Route, Routes } from "react-router-dom";
import BoardList from "./components/BoardList";
import Write from "./components/Write";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <BoardList /> } />
        <Route path="/add" element={ <Write /> } />
      </Routes>
    </div>
  );
}

export default App;