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
                <Link to="/">products</Link>
              </li>
              <li>
                <Link to="/products/:id">product</Link>
              </li>
              <li>
                <Link to="/cart">cart</Link>
              </li>
              <li>
                <Link to="/checkout">checkout</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <h1>products page</h1>
            </Route>
            <Route path="/products/:id">
              <h1>product page</h1>
            </Route>
            <Route path="/cart">
              <h1>cart page</h1>
            </Route>
            <Route path="/checkout">
              <h1>cart page</h1>
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
