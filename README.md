# AlphaSense Messaging Board

## Setup
1. clone this repo
2. cd into the repository and run `npm install`
3. install all dependencies for Client and Server side by running `npm run install-all`
4. Once all dependencies are installed run both client and server side servers by running `npm run development`
5. Go to `http://localhost:3000/channel_section` and enjoy the prototype!

## Summary

This is a prototype [message board](https://en.wikipedia.org/wiki/Internet_forum) for AlphaSense.
This application is a minimum viable product where a user is able to see channels and the messages within the channel. The user
is able to add new messages to the selected channel!

The technologies involved are react, redux, express, and nodejs.

Below are the goals as well as the initial mock design with the applications architecture.

### Example Photos


### Application Diagram and Architecture
![AlphaSense Message Board prototype Diagram](https://user-images.githubusercontent.com/40606399/119208904-1f5a9400-ba72-11eb-8aae-70b4bd271362.png)

## Acceptance Criteria

#### Client visuals
 - Render a full page application with three panels (Done)
 - Navigation panel shows a list of channels (Done)
 - Message list panel shows a list of message bodies (Done)
 - Editor panel shows a text editor (Done)
   - Editor has a submit button (Done)

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
 - On Server start, storage is populate with a fixed set of empty channels (Done)
 - GET endpoint for querying channels (Done)
   - GET http://<backend>/channels
 - GET endpoint for querying channel's messages (Done)
   - GET http://<backend>/messages/<channel>
 - POST endpoint for submitting new messages to a channel (Done) 
   - POST http://<backend>/<channel>
   - Body
     - Message text


## setup instructions

## contributors

[KimJ Manansala](https://github.com/KimjManansala)

