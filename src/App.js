import "./styles.css";
import { NavBar } from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" />

          <Route path="/cart" />
        </Routes>
      </Router>
    </div>
  );
}
