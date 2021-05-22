import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Label, Table} from "reactstrap";
import Channel from "./Channel";

Channels.propTypes = {

};

function Channels({channels, selectedChannel, handleUpdateSelectedChannel}) {
    const handleSelectedChannelClick = (selectedChannelIndex) => {
        const newSelectedChannel = selectedChannel[selectedChannelIndex];
        handleUpdateSelectedChannel(newSelectedChannel);
    }
    return (
        <div>
            <Table>
                <thead>
                    <tr>Channel Name</tr>
                </thead>
                <tbody>
                {channels.map((channel, index) => (
                        <Channel
                            onClick={handleSelectedChannelClick}
                            channel={channel}
                            index={index}
                        />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Channels;