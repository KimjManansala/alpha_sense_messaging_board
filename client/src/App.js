import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MessageBoardContainer from "./views/MessageBoard/MessageBoardContainer";
import {Nav, Navbar, NavbarBrand, NavbarText, NavItem} from "reactstrap";
import NavbarMessagingBoard from "./NavbarMessagingBoard";

function App() {
  return (
    <Router>
        <NavbarMessagingBoard />
          <Switch>
            <Route path='/:pageSection' component={MessageBoardContainer}/>
          </Switch>
    </Router>
  );
}

export default App;
