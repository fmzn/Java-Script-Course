const todos = [
{
  id: 1,
  title: 'Go to school',
  completed: true
},
{
  id: 2,
  title: 'Go to museum',
  completed: true
},
{
  id: 3,
  title: 'Go shopping',
  completed: false
},

]

for(let i = 0; i < todos.length; i++) {
  let todo = todos[i];
  if(todo.completed === true){
    console.log(i, todos[i].title);
  }
}

for(let v of todos){
  if(v.completed === true){
    console.log("HELLLOOOOO")
    console.log(v.title);
  }
}



 