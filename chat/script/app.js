// Responsible for running the app
//DOM queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');

//add a new chat
newChatForm.addEventListener('submit', event => {
  event.preventDefault();
  const message = newChatForm.message.value.trim(); //get the value user inputs in (by id=message)
  chatroom.addChat(message) //adds the message to the chat room
    .then(() => newChatForm.reset()) //clear the chat form after submitting
    .catch(err => console.log(err));
});

//update username
newNameForm.addEventListener('submit', event => {
  event.preventDefault();
  //update name via chatroom class
  const newName = newNameForm.name.value.trim(); //get the value user inputs in (by id=name)
  chatroom.updateName(newName);
  //clear the name form after submitting
  newNameForm.reset(); 
  //show and hide the update message
  updateMssg.innerText = `The name was updated to ${newName}`;
  setTimeout(() => updateMssg.innerText = '', 3000); 
});

//update the chat room
rooms.addEventListener('click', event => {
  if(event.target.tagName === 'BUTTON'){ //when user clicks a room button
    chatUI.clear(); //clear the chat room
    chatroom.updateRoom(event.target.getAttribute('id'));
    chatroom.getChats(chat => chatUI.render(chat)); //render new html template to the DOM for all of new objects for new room
  }
});

//check local storage with uploading a page for a name exists; if not, set it to anon
const username = localStorage.username ? localStorage.username : 'anonymous';

//new instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username); //passes username from local storage

//get chats and render the new chat to the DOM when callback fires
chatroom.getChats(data => chatUI.render(data));