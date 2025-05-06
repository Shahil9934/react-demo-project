import { Provider } from "react-redux";
import Store from "./store/Store";
import Home from "./components/Home";

const App = () => {
  return(
    <Provider store={Store}>
      <Home/>
    </Provider>
  )
}

export default App;