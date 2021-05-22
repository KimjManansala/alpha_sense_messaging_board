import React from 'react';
import { useParams } from 'react-router-dom';

function MessageBoardContainer() {
    const { pageSection } = useParams();
    return (
        <div>
            Message board container
            {pageSection}
        </div>
    );
}

export default MessageBoardContainer;