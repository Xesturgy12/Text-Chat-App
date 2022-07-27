const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const cors = require('cors')
const {Rooms} = require('./Rooms')


const Room = new Rooms()

const { addUser , removeUser , getUser } = require('./users.js')


const randomRooms = ['_Rand_Room_', '1_Rand_Room_1' , '2_Rand_Room_2' , '4_Rand_Room_4' ,'5_Rand_Room_5']


const PORT = process.env.PORT || 5000
const router = require('./router')


const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(router)
app.use(cors())

const admin_pfp = 'https://avatars.dicebear.com/api/initials/:admin.svg'




io.on('connection', (socket)=>{

    const rndm = ()=>{
        let i = Math.floor(Math.random()*randomRooms.length)
        return randomRooms[i]
    } 

    socket.emit('random',  rndm() )

    console.log('we have a new connection!!!')

    socket.on('join', ({ name , room , avatarsrc },callback)=>{

        const { user , error} = addUser({ id:socket.id , name, room , avatarsrc })


        // var fn = ()=>{return roomData.filter((info)=>info.room==room)}

        // socket.broadcast.to(user.room).emit('userslist', list = roomData.filter((info)=> info.room == user.room))

        if(error) return callback(error)

        socket.emit('message' , {user:'admin', text: `${user.name}, Welcome to the room ${user.room}`, avatarsrc:admin_pfp})
        socket.broadcast.to(user.room).emit('message', {user: 'admin' , text: `${user.name} has joined !`,avatarsrc:admin_pfp})

        socket.join(user.room)
        Room.removeRoom(socket.id)
        Room.addRoom(socket.id,user.name,user.room)

        io.to(user.room).emit('userslist',Room.getRoomsList(user.room))


        callback()

        // const error= true
        // if(error) callback({error:'error'})
    })

    socket.on('sendMessage',(message, callback)=>{
        const user = getUser(socket.id)

        io.to(user.room).emit('message', {user:user.name, text:message , avatarsrc:user.avatarsrc})

        callback()

    })


    socket.on('disconnect',()=>{
        const user = removeUser(socket.id)
        const Roomdata = Room.removeRoom(socket.id)
        
        

        if(user) {
            io.to(user.room).emit('message', {user:'admin' , text:`${user.name} has left.`, avatarsrc:null})    
            io.to(user.room).emit('userslist',Room.getRoomsList(Roomdata.room))
        }
    })
})


server.listen(PORT,()=>console.log(`listening on port ${PORT}`))