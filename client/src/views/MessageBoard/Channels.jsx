import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Card, Label, Table} from "reactstrap";
import Channel from "./Channel";

Channels.propTypes = {
    channels: PropTypes.arrayOf({
        name: PropTypes.string,
    }).isRequired,
    selectedChannel: PropTypes.shape({
        name: PropTypes.string,
    }).isRequired,
    handleUpdateSelectedChannel: PropTypes.func.isRequired,
};

function Channels({channels, selectedChannel, handleUpdateSelectedChannel}) {
    console.log(channels)
    const handleSelectedChannelClick = (selectedChannelIndex) => {
        const newSelectedChannel = channels[selectedChannelIndex];
        handleUpdateSelectedChannel(newSelectedChannel);
    }
    return (
            <Card className="w-50">
                <Table>
                    <thead>
                        <tr>
                            <td>Channel Name</td>
                        </tr>
                    </thead>
                    <tbody>
                    {channels.map((channel, index) => (
                            <Channel
                                onClick={handleSelectedChannelClick}
                                channel={channel}
                                index={index}
                                key={channel}
                            />
                        ))}
                    </tbody>
                </Table>
            </Card>
    );
}

export default Channels;