const express = require("express");
const bodyParser = require('body-parser');
const global_mock_data = require('./global_mock_data');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const PORT = process.env.PORT || 3001

// channels get request
app.get("/channels", (req, res) => {
    res.send({
        success: true,
        data: global_mock_data.mock_channels_data
    })
})

// message request
app.get("/messages/:channelId", (req, res) => {
    const { channelId } = req.params
    const channelsMessages = global_mock_data.mock_messages_data
        .filter( message => message.channelId === parseInt(channelId))
    res.send({
        success: true,
        data: channelsMessages,
    })
})

// channels post request
app.post("/:channelId", (req, res) =>{
    const { channelId } = req.params
    global_mock_data.mock_messages_data.push({
        id: global_mock_data.mock_messages_data.length + 1,
        channelId,
        message: req.body.message,
    })
    const channelsMessages = global_mock_data.mock_messages_data
        .filter( message => message.channelId === parseInt(channelId))
    res.send({
        success: true,
        data: channelsMessages,
    })
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
