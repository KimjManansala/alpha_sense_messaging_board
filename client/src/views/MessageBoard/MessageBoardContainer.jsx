import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Channels from "./Channels";
import Messages from "./Messages";
import Edit from "./Edit";
import {handleGetChannels} from "./helpers";

function MessageBoardContainer() {
    const { pageSection } = useParams();

    // state
    const [channels, setChannels] = useState([{
        name: 'Test channel prior APi'
    }]);
    const [messages, setMessages] = useState([]);
    const [selectedChannel, setSelectedChannel] = useState({});

    // component functions
    const handleUpdateSelectedChannel = (newSelectedChannel) => {
        setSelectedChannel(newSelectedChannel);
    }

    const handleSubmitMessage = (message) => {
        console.log('submit placeholder')
    }

    // lifecycle
    useEffect(() => {
        handleGetChannels(setChannels)
    }, [])

    return (
        <div>
            Message board container
            {pageSection}
            {(!pageSection || pageSection === "channel_section" ) && (
                <Channels
                    channels={channels}
                    selectedChannel={selectedChannel}
                    handleUpdateSelectedChannel={handleUpdateSelectedChannel}
                />
            )}
            {pageSection === "message_section" && (
                <Messages messages={messages} />
            )}
            {pageSection === "edit_section" && (
                <Edit
                    selectedChannel={selectedChannel}
                    handleSubmitMessage={handleSubmitMessage}
                />
            )}
        </div>
    );
}

export default MessageBoardContainer;