import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Card, Label, Table} from "reactstrap";
import Channel from "./Channel";

Channels.propTypes = {

};

function Channels({channels, selectedChannel, handleUpdateSelectedChannel}) {
    const handleSelectedChannelClick = (selectedChannelIndex) => {
        const newSelectedChannel = selectedChannel[selectedChannelIndex];
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
                            />
                        ))}
                    </tbody>
                </Table>
            </Card>
    );
}

export default Channels;