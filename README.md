# Text-Chat-App

This project was made possible by following along the tutorial https://www.youtube.com/watch?v=ZwFA3YMfkoc , it was thoroughly analysed, bug fixed and was further improved by adding some additional features.


**BASIC WORKING PRINCIPLE**
Socket.Io is used to implement the Websocket protocol which enables communication between two or more clientss through a server.
ReactJs has been used to implement a basic UI for the webApp.
NodeJs is used for all the backend implementation(including socket.io on cors enabled expressjs server).



**BASIC FEATURES**
You can create a room and chat with others who can join that room if they know the room name.
You have a profile picture with the message you send which is generated in real time using dicebear API.
you can join pre-made rooms to chat with others.


**ADDITIONAL FEATURES**
You can see the names of the people currently in the chatroom.
You have a custom profile picture fetched from diceBear's API.


**FLAWS / BUGS / PROBLEMS**
Similar named people cannot join the same room as it leads to crash.
The browser's back button can cause the app to crash.
The UI has not been optimised for mobile phones.
