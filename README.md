# Alpha Sense Messaging Board

## Summary

### Goals


### Accomplishments
#### Client visuals
 - Render a full page application with three panels
 - Navigation panel shows a list of channels
 - Message list panel shows a list of message bodies
 - Editor panel shows a text editor
   - Editor has a submit button

#### Client interactions
 - Clicking a channel in navigation panel selects that channel
 - Entering text in editor and clicking submit adds message to the currently selected channel
 - Submitting editor clears input
 - When the editor is empty, submit button should be disabled

#### Client state management
 - CLient application state contains channels and their contents
 - Channel list is refreshed on loading the application 
 - Initially no channel is selected
 - There is no upfront loading messages for any channel
 - Upon selecting a channel messages stored for that channel are etched from backend as well
 - Upon submitting a message to a channel that message is available for other users
 - Submitting users sees message in message list after submitting
 - All operations are optimistic, without failure handling

#### NodeJS backend
 - Channel and message storage must be an in-memory database (global variable etc), and you can assume a single instance can handle all traffic
 - On Server start, storage is populate with a fixed set of empty channels
 - GET endpoint for querying channels
   - GET http://<backend>/channels
 - GET endpoint for querying channel's messages
   - GET httpL//<backend>/messages/<channel>
 - POST endpoint for submitting new messages to a channel 
   - POST httpL//<backend>/<channel>
   - Body
     - Message text


## setup instructions

## contributors

[KimJ Manansala](https://github.com/KimjManansala)

