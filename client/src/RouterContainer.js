import React from 'react';
import {Container} from "reactstrap";
import NavbarMessagingBoard from "./NavbarMessagingBoard";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LandingPage from "./views/MessageBoard/LandingPage";
import Channels from "./views/MessageBoard/Channels";
import Messages from "./views/MessageBoard/Messages";
import Edit from "./views/MessageBoard/Edit";

function RouterContainer() {
    return (
        <Container>
            <Router>
                <NavbarMessagingBoard />
                <Switch>
                    <Route path='/channel_section' component={Channels} />
                    <Route path='/message_section' component={Messages} />
                    <Route path='/edit_section' component={Edit} />
                    <Route path='' component={LandingPage} />
                </Switch>
            </Router>
        </Container>
    );
}

export default RouterContainer;