import React from 'react';
import PropTypes from 'prop-types';

Message.propTypes = {
    message: PropTypes.string,
};

function Message({
    message
 }) {
    return (
        <tr>
            <td>
                {message}
            </td>
        </tr>
    );
}

export default Message;