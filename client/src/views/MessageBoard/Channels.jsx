import React from 'react';
import {Card, Table} from "reactstrap";
import Channel from "./Channel";
import {useSelector} from "react-redux";

function Channels() {
    const { channels } = useSelector((state => state.messageBoard))

    return (
            <Card className="w-50">
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
            </Card>
    );
}

export default Channels;