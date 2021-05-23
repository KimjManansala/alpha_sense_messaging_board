import axios from "axios";
import { actionTypes } from "../../reducers";

const baseUrl = 'http://localhost:3001'

export const handleGetChannels = () => {
    return async (dispatch) => {
        try {
            console.log('hello')
            const res = await axios.get(`${baseUrl}/channels`)
            dispatch({
                type: actionTypes.UPDATE_CHANNEL_LIST,
                payload: res.data.channels,
            })
        } catch (error) {
            console.log(error)
            alert("sorry something went wrong")
        }
    }
}



export const handleGetChannelsMessage = (channel) => {
    return async (dispatch) => {
        try {

            const res = await axios.get(`${baseUrl}/messages/${channel.id}`)
            dispatch({
                type: actionTypes.UPDATE_MESSAGE_LIST,
                payload: res.data.messages,
            })
            dispatch({
                type: actionTypes.UPDATE_SELECTED_CHANNEL,
                payload: channel,
            })
        } catch (error) {
            console.log(error)
            alert("sorry something went wrong")
        }
    }
}

export const handleSubmitNewMessage = (message) => {
    return async (dispatch, getState) => {
        try {
            const { messageBoard } = getState();
            const { id } = messageBoard.selectedChannel;
            const newMessages = [ ...messageBoard.messages]
            const res = await axios.post(`${baseUrl}/${id}`, {
                message,
            })
            newMessages.push(res.data.message)

            dispatch({
                type: actionTypes.UPDATE_MESSAGE_LIST,
                payload: newMessages,
            })
        } catch (error) {
            console.log(error)
            alert("sorry something went wrong")
        }
    }
}