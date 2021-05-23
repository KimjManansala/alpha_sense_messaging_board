# Alpha Sense Messaging Board

## Summary

### Goals


### Application Diagram and Architecture
![AlphaSense Message Board prototype Diagram](https://user-images.githubusercontent.com/40606399/119208904-1f5a9400-ba72-11eb-8aae-70b4bd271362.png)

#### Client visuals
 - Render a full page application with three panels (Done)
 - Navigation panel shows a list of channels (Done)
 - Message list panel shows a list of message bodies (Done)
 - Editor panel shows a text editor (Done)
   - Editor has a submit button

#### Client interactions
 - Clicking a channel in navigation panel selects that channel (Done)
 - Entering text in editor and clicking submit adds message to the currently selected channel (Done)
 - Submitting editor clears input (Done)
 - When the editor is empty, submit button should be disabled (Done)

#### Client state management
 - CLient application state contains channels and their contents (Done)
 - Channel list is refreshed on loading the application (Done)
 - Initially no channel is selected (Done)
 - There is no upfront loading messages for any channel (Done)
 - Upon selecting a channel messages stored for that channel are etched from backend as well (Done)
 - Upon submitting a message to a channel that message is available for other users (Done)
 - Submitting users sees message in message list after submitting (Done) 
 - All operations are optimistic, without failure handling (Done)

#### NodeJS backend
 - Channel and message storage must be an in-memory database (global variable etc), and you can assume a single instance can handle all traffic (Done)
 - On Server start, storage is populate with a fixed set of empty channels (TODO)
 - GET endpoint for querying channels (Done)
   - GET http://<backend>/channels
 - GET endpoint for querying channel's messages (Done)
   - GET httpL//<backend>/messages/<channel>
 - POST endpoint for submitting new messages to a channel (Done) 
   - POST httpL//<backend>/<channel>
   - Body
     - Message text


## setup instructions

## contributors

[KimJ Manansala](https://github.com/KimjManansala)

