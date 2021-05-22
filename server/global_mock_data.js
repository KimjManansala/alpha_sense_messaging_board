const mock_channels_data = [
    {
        id: 1,
        name: 'Channel 1',
    },
    {
        id: 2,
        name: 'Channel 2',
    },
    {
        id: 3,
        name: 'Channel 3',
    },
]

const mock_messages_data = [
    {
        id: 1,
        channelId: 1,
        message: 'Random message text',
    },
    {
        id: 2,
        channelId: 1,
        message: 'Another message text',
    },
    {
        id: 3,
        channelId: 1,
        message: 'We got Another message text!',
    },
    {
        id: 4,
        channelId: 2,
        message: 'Channel 2 first message!',
    },
    {
        id: 5,
        channelId: 2,
        message: 'Channel 2 Second message!',
    },
]


module.exports = {
    mock_channels_data,
    mock_messages_data,
}


