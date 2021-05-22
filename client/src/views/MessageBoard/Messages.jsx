import React from 'react';
import PropTypes from 'prop-types';
import {Table} from "reactstrap";

Messages.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.string),
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
                {messages.map(message => (
                    <Messages messages={message} />
                ))}
            </tbody>
        </Table>
    );
}

export default Messages;