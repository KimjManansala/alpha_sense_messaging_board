import React from 'react';
import PropTypes from 'prop-types';

Channel.propTypes = {
    channel: PropTypes.shape({
        name: PropTypes.string,
    }).isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};

function Channel({
    channel,
    index,
    onClick
 }) {
    return (
        <tr
            onClick={() => {onClick(index)}}
        >
            {channel}
        </tr>
    );
}

export default Channel;