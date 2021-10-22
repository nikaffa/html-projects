// Responsible for getting the chat and the data together

class Chatroom{
  constructor(room, username){
    this.room = room;
    this.username = username;
    this.chats = db.collection('chats');
    this.unsubscribe
  }
  //Add a new chat document based on user's message
  async addChat(message){
    //create a new chat JS object
    const now = new Date(); //current date
    const chat = { //making a chat object with properties
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now) //creates a firebase timestamp object based on current date
    };
    //save the chat doc to database
    const response = await this.chats.add(chat); //waits when the chat'll be added using add method on chat collections
    return response;
  }
  // Set up a real-time listener to get new chats
  getChats(callback){ 
    this.unsubscribe = this.chats //refers to the collection at js:7 and unsubscribe from changes
      .where('room', '==', this.room) //method to get back doc with certain property
      .orderBy('created_at') //method to sort chats by date&time created
      .onSnapshot(snapshot => { //a real-time listener 
        snapshot.docChanges().forEach(change => { //which gets back every doc change
          if(change.type === 'added'){
            //update the ui with callback when chat is added
            callback(change.doc.data()); //pass by that single object
          }
        });
      });
  }
  // Update username
  updateName(username){
    this.username = username;
    localStorage.setItem('username', username);
  }
  // Update (change) room
  updateRoom(room){ //takes a new room we changing to
    this.room = room;
    console.log('room updated');
    if (this.unsubscribe){
      this.unsubscribe(); //unsubscribe from all changes to current room
    }
  }
};



