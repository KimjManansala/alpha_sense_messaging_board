import React from 'react';
import {Table} from "reactstrap";
import Message from "./Message";
import {useSelector} from "react-redux";

function Messages() {
    const { messages } = useSelector(state => state.messageBoard);
    return (
        <React.Fragment>
            {
                messages.length > 0 ? (
                    <Table>
                        <thead>
                        <tr>
                            <td>
                                Message
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        {messages.map(message => (
                            <Message message={message} key={message.id}/>
                        ))}
                        </tbody>
                    </Table>
                ) : (
                    <Table>
                        <thead>
                        <tr>
                            <td>
                                No messages for this channel. Please go to the Edit tag to add!
                            </td>
                        </tr>
                        </thead>
                    </Table>
                )
            }
        </React.Fragment>
    );
}

export default Messages;