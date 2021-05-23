import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {handleGetChannelsMessage, handleUpdateCurrentPage} from "./action";
import {useHistory} from "react-router-dom";

Channel.propTypes = {
    channel: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number,
    }).isRequired,
};

function Channel({
    channel,
 }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleOnClick = () => {
        dispatch(handleGetChannelsMessage(channel))
        dispatch(handleUpdateCurrentPage('message_section'))
        history.push('/message_section')
    }
    return (
        <tr
            onClick={handleOnClick}
            style={{
                cursor: "pointer",
            }}
        >
            <td>{channel.name}</td>
        </tr>
    );
}

export default Channel;