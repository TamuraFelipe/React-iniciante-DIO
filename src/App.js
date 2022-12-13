import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {Home} from "./page/home"
import {Login} from "./page/login"
import {Feed} from "./page/feed"
import {Cadastrar} from "./page/cadastrar"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
      </Routes>
    </Router>
  );
}

export default App;
