import { Provider } from "react-redux";
import Store from "./store/Store";
import Home from "./components/Home";
import './App.css';

const App = () => {
  return(
    <Provider store={Store}>
      <Home/>
    </Provider>
  )
}

export default App;