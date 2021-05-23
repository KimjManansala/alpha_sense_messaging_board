import React from 'react';
import {Table} from "reactstrap";
import Message from "./Message";
import {useSelector} from "react-redux";

function Messages() {
    const { messages } = useSelector(state => state.messageBoard);
    return (
        <Table>
            <thead>
                <tr>
                    <td>
                        Message
                    </td>
                </tr>
            </thead>
            <tbody>
                {messages.length > 0 && messages.map(message => (
                    <Message message={message} key={message.id} />
                ))}
            </tbody>
        </Table>
    );
}

export default Messages;