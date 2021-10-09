import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import {
  Switch,
  Route,
  BrowserRouter as Router,
 
} from "react-router-dom";
import Cart from "./components/Cart";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        
          <Route path="/cart">
            <Cart/>
          </Route>

          <Route  path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
