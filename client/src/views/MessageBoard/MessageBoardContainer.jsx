import React from 'react';
import {Card, CardBody, CardText} from "reactstrap";

function MessageBoardContainer() {
    return (
        <Card>
            <CardBody>
                <CardText>
                    <h2>Welcome to this mock storyboard!</h2>
                    <h3>Please go to the navigation tab to browse the channels!</h3>
                </CardText>
            </CardBody>
        </Card>
    );
}

export default MessageBoardContainer;