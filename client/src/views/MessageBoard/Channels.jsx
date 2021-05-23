import React, {useEffect} from 'react';
import {Card, CardBody, CardTitle, Table} from "reactstrap";
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
            <Card>
                <CardBody>
                    <CardTitle>
                        Please select a channel to see it's messages!
                    </CardTitle>
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
                </CardBody>
            </Card>
    );
}

export default Channels;