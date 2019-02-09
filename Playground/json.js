var obj = {"name":"Yousuf", "age":23};
console.log(obj);
var user = JSON.stringify(obj);
console.log(typeof user);
console.log(user)

var person = '{"name":"ahmed", "addrees":"karachi"}';
console.log(person);
 var note = (JSON.parse(person));
 console.log(typeof note);
 console.log(note);

 const fs = require('fs');
 var todo = {
     "title":"First todo",
     "description":"Hello World"
 }
 var OriginalNodeString = JSON.stringify(todo)
 fs.writeFileSync('node.json', OriginalNodeString);

 var nodeString = fs.readFileSync('node.json');
 var todoNode = JSON.parse(nodeString);
 console.log(typeof todoNode);
 console.log(todoNode.title);
