import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import MessageBoardContainer from "./views/MessageBoard/MessageBoardContainer";
import {Container } from "reactstrap";
import NavbarMessagingBoard from "./NavbarMessagingBoard";

function App() {
  return (
      <Provider store={store}>
          <Container>
            <Router>
                <NavbarMessagingBoard />
                  <Switch>
                    <Route path='/:pageSection' component={MessageBoardContainer}/>
                    <Route path='' component={MessageBoardContainer}/>
                  </Switch>
            </Router>
          </Container>
      </Provider>
  );
}

export default App;
