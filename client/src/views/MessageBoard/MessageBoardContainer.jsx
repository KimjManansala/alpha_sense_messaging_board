import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import Channels from "./Channels";
import Messages from "./Messages";

function MessageBoardContainer() {
    const { pageSection } = useParams();

    const [channels, setChannels] = useState([{
        name: 'Test channel prior APi'
    }]);
    const [messages, setMessages] = useState([]);


    const [selectedChannel, setSelectedChannel] = useState({});

    const handleUpdateSelectedChannel = (newSelectedChannel) => {
        setSelectedChannel(newSelectedChannel);
    }

    return (
        <div>
            Message board container
            {pageSection}
            {(!pageSection || pageSection === "channel_section" ) && (
                <Channels
                    channels={channels}
                    selectedChannel={{}}
                    handleUpdateSelectedChannel={handleUpdateSelectedChannel}
                />
            )}
            {pageSection === "message_section" && (
                <Messages messages={messages} />
            )}
        </div>
    );
}

export default MessageBoardContainer;