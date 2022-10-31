# Text-Chat-App

A text based chat app which allows two or more people to communicate using text messages using a room system.

The working App can be accessed using the link https://62a6c2170692a56358aa01bb--chat-up-13.netlify.app/

*Warning: Do not enter the same room using the same name , as it leads to the backend server crashing, rendering the whole app useless for 24 hours.So, if the app is not working properly, someone did the previous actions. I will bugfix this someday.Sorry for the inconvinience*






**PREVIEW**

![P3](https://user-images.githubusercontent.com/70658838/198957952-af302776-367c-4c00-8cf7-e58be61a09b6.png)
home screen






![P2](https://user-images.githubusercontent.com/70658838/198958041-dce0c1c3-a22a-4ac1-83e3-834071d48466.png)
first user's screen (light mode enabled)






![P1](https://user-images.githubusercontent.com/70658838/198958090-c00ecf19-d627-4916-8ff2-c2c074ed9f19.png)
second user's screen (dark mode enabled)







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



**CREDITS**
This project was made possible by following along the tutorial https://www.youtube.com/watch?v=ZwFA3YMfkoc , it was thoroughly analysed, bug fixed and was further improved by adding some additional features.

the DICEBEAR API has been used to fetch the avatar photos https://avatars.dicebear.com/
