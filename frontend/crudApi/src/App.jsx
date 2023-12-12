import "./App.css";
import Header from "./components/Header";
import AddEdit from "./pages/addEdit/AddEdit";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEdit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
