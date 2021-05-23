import axios from "axios";

const baseUrl = 'http://localhost:3001'

export const handleGetChannels = (callback) => {
    axios.get(`${baseUrl}/channels`)
        .then(res => {
            callback(res.data.channels)
        })
        .catch(er => {
            console.log(er)
            alert("sorry something went wrong")
        })
}

export const handleGetChannelsMessage = (channelId, callback) => {
    axios.get(`${baseUrl}/messages/${channelId}`)
        .then(res => {
            console.log(res.data)
            callback(res.data.messages)
        })
        .catch(er => {
            console.log(er)
            alert("sorry something went wrong")
        })
}

export const handleSubmitNewMessage = (selectedChannel, message, callback) => {
    axios.post(`${baseUrl}/${selectedChannel.id}`, {
        message,
    })
        .then(res => {
            callback(selectedChannel)
         })
        .catch(er => {
            console.log(er)
            alert("sorry something went wrong")
        })
}