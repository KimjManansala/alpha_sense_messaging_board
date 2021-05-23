import React, {useEffect} from 'react';
import {Card, Table} from "reactstrap";
import Channel from "./Channel";
import {useDispatch, useSelector} from "react-redux";
import {handleGetChannels} from "./action";

function Channels() {
    const { channels } = useSelector((state => state.messageBoard))
    const dispatch = useDispatch()
    // lifecycle
    useEffect(() => {
        dispatch(handleGetChannels());
    }, [])
    return (
            <Table>
                <thead>
                    <tr>
                        <td>Channel Name</td>
                    </tr>
                </thead>
                <tbody>
                {channels.map((channel) => (
                        <Channel
                            channel={channel}
                            key={channel.id}
                        />
                    ))}
                </tbody>
            </Table>
    );
}

export default Channels;