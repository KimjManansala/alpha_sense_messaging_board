import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import Channels from "./Channels";

function MessageBoardContainer() {
    const { pageSection } = useParams();
    const [channels, setChannels] = useState([{
        name: 'Test channel prior APi'
    }]);
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
        </div>
    );
}

export default MessageBoardContainer;