import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MessageBoardContainer from "./views/MessageBoard/MessageBoardContainer";
import {Container, Nav, Navbar, NavbarBrand, NavbarText, NavItem} from "reactstrap";
import NavbarMessagingBoard from "./NavbarMessagingBoard";

function App() {
  return (
      <Container>
        <Router>
            <NavbarMessagingBoard />
              <Switch>
                <Route path='/:pageSection' component={MessageBoardContainer}/>
                <Route path='' component={MessageBoardContainer}/>
              </Switch>
        </Router>
      </Container>
  );
}

export default App;
