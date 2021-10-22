const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');

const addRecipe = (recipe, id) => {  //add data from each doc to the list
  let time = recipe.created_at.toDate();
  //create html template for a recipe with id of the doc stored in database inside data-id attribute
  let html = `
  <li data-id="${id}"> 
    <div>${recipe.title}</div>
    <div>${time}</div>
    <button class="btn btn-danger btn-sm my-2">delete</button>
  </li>
  `;

  list.innerHTML += html; //append template to the list
}

// Retrieve static data from database collection
// db.collection('recipes')
// .get() //get the collection first
// .then(snapshot => { //snapshot is a picture how database looks at this moment
//   //the, when we have the data (the response),i.e. when promise resolved
//   snapshot.docs.forEach(doc => {
//     //console.log(doc.data()); //get the data: snapshot.docs[i].data
//     addRecipe(doc.data(), doc.id);
//   }); 
// }).catch(err => {
//   console.log(err);
// });

// Delete recipe from the DOM
const deleteRecipe = id => {
  const recipes = document.querySelectorAll('li'); //gets the list of all recipes
  recipes.forEach(recipe => { //cycle through them
    if(recipe.getAttribute('data-id') === id) { //if it's the recipe we're deleting
      recipe.remove(); //remove it from DOM
    }
  });
};

// Add and delete doc to/from UI dynamiclally when we add/delete it from database
const unsubscribe = db.collection('recipes').onSnapshot(snapshot => { //retrieve dynamic data using real-time listenerc(initial snapshot doc changes at that moment)
  snapshot.docChanges().forEach(change => {
    const doc = change.doc;
    if(change.type === 'added'){
      addRecipe(doc.data(), doc.id); //add recipe to the DOM
    }else if(change.type === 'removed') {
      deleteRecipe(doc.id); //delete also from the DOM
    }
  })
}) 

//add documents to database
form.addEventListener('submit', event => {
  event.preventDefault(); //prevent page from reloading
  
  const now = new Date(); //new date stamp
  const recipe = { //creates new JS object based on a value user inputs in
    title: form.recipe.value, //gets the value of input form
    created_at: firebase.firestore.Timestamp.fromDate(now) //creates a firebase timestamp object based on current date
  };
  db.collection('recipes').add(recipe).then(() => console.log('recipe added')) //adds new recipe object to database
    .catch(err => console.log(err))  
});

//delete doc from database
list.addEventListener('click', event => {
  if(event.target.tagName === 'BUTTON'){
    const id = event.target.parentElement.getAttribute('data-id');
    db.collection('recipes').doc(id) //gets a doc with the id
    .delete()
    .then(() => console.log('recipe deleted'));
  }
});

//unsubscribe from collection changes
button.addEventListener('click', () => {
  unsubscribe();
})

