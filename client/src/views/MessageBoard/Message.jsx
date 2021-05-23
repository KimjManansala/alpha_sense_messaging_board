import React from 'react';
import PropTypes from 'prop-types';

Message.propTypes = {
    message: PropTypes.shape({
        id: PropTypes.number,
        channelId: PropTypes.number,
        message: PropTypes.string,
    }),
};

function Message({
    message
 }) {
    return (
        <tr>
            <td>
                {message.message}
            </td>
        </tr>
    );
}

export default Message;