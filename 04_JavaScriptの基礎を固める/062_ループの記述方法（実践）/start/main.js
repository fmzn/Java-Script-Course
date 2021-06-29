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
    title: 'Go to shopping',
    completed: false
  },
  {
    id: 4,
    title: 'Study JS!',
    completed: true
  },
  {
    id: 5,
    title: 'Study Python!',
    completed: true
  },
]

for(let todo of todos) {

  if(todo.completed === true) {
  console.log(todo.title);
  }
}


console.log("\nKenji's output")

todos.forEach(element => {
  if(element.completed) console.log(`Completed task: ${element.title}`)
})
console.log('\n\n')

let value = 0

if (!value) {
  console.log("Value is inside 'true' section")
} else {
  console.log("Value is inside 'false' section")
}