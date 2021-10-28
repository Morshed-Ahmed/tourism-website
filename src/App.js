import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Banner from './components/Banner/Banner';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Blog from './components/Blog/Blog';
import PrivateRoute from './components/Private/PrivateRoute';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/banner">
            <Banner></Banner>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/blog">
            <Blog></Blog>
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
