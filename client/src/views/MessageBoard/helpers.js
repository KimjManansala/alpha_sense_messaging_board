import axios from "axios";

const baseUrl = 'http://localhost:3001'

export const handleGetChannels = (callback) => {
    axios.get(`${baseUrl}/channels`)
        .then(res => {
            console.log(res.data)
            callback(res.data.channels)
        })
        .catch(er => {
            console.log(er)
            alert("sorry something went wrong")
        })
}