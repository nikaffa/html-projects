// Responsible for UI

//Render chat templates to the DOM
class ChatUI{
  constructor(list){
    this.list = list;
  }
  //method that clears <li> of chats inside the <ul> when changing a room
  clear(){
    this.list.innerHTML = '';
  }

  //method that generates html template for each item we take in
  render(data){ //for each new chat doc: 
    //formats the date using .distanceInWordsToNow method on Fns library 
    const when = dateFns.distanceInWordsToNow(
      data.created_at.toDate(),
      { addSuffix: true } //add suffix "ago"
    );
    //generates new template
    const html = `
      <li class="list-group-item">
        <span class="username">${data.username}</span>
        <span class="message">${data.message}</span>
        <div class="time">${when}</div>
      </li>
    `;

    this.list.innerHTML += html; //appends it to html
  }
}