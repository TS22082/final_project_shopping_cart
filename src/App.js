import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Products</Link>
              </li>
              <li>
                <Link to="/product">Product</Link>
              </li>
              <li>
                <Link to="/cart">cart</Link>
              </li>
              <li>
                <Link to="/checkout">checkout</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/">
              <h1>products page</h1>
            </Route>
            <Route path="/product/:id ">
              <h1>product page</h1>
            </Route>
            <Route path="/cart">
              <h1>cart page page</h1>
            </Route>
            <Route path="/checkout">
              <h1>checkout page</h1>
            </Route>
            <Route path="/">
              <h1>404 page</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
