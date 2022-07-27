// [{
//   id: 'sdfgsdfgsdfg',
//   name: 'WDJ',
//   room: 'node js'
// }]


class Rooms {
    constructor() {
      this.rooms = [];
    }
  
    addRoom(id , name, room) {

      const existingRoom = this.rooms.find((info)=>info.room === room && info.name === name)

      if(existingRoom)  null
      else  {
        let data = {id , name, room};
        this.rooms.push(data);
        return data;
      }

    }
  
    getRoomsList (room) {
      let rooms = this.rooms.filter((info) => info.room === room);
      let namesArray = rooms.map((room) => room.name);
  
      return namesArray;
    }

    getRoom(id) {
      return this.rooms.filter((info) => info.id === id)[0];
    }
  

    removeRoom(id) {
      let user = this.getRoom(id);
  
      if(user){
        this.rooms = this.rooms.filter((user) => user.id !== id);
      }
  
      return user;
    }
  
  }
  
  module.exports = {Rooms};
  