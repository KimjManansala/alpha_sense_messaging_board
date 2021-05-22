import React from 'react';
import PropTypes from 'prop-types';
import {Table} from "reactstrap";
import Message from "./Message";

Messages.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        channelId: PropTypes.number,
        message: PropTypes.string,
    })),
};

function Messages({
    messages
}) {
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