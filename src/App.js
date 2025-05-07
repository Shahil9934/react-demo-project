import { Provider } from "react-redux";
import Store from "./store/Store";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav";
import About from "./components/About";

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
