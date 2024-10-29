//parse json
const user = '{"name": "mike","age": "23"}'
const person = JSON.parse(user)
console.log(person)

//stringify object = converts a jcript object to a json string
const users = {name: "mike", age: "23"}
const jsonString = JSON.stringify(users)
console.log(jsonString)
localStorage.setItem('user', jsonString)

localStorage.getItem('user')
localStorage.removeItem('user')

//localStorage.setItem

