const fs = require('fs');
//const os = require("os");
const _ = require("lodash");
const yargs = require("yargs");

const node = require("./node.js")
const notes = require("./notes.js")

const argv = yargs.argv;
var command = process.argv[2];
//console.log("Command", command);
//console.log("Process",process.argv)
//console.log("Yargs", argv)

if (command === "add") {
    var nodes = notes.addNote(argv.title, argv.body);
    if (nodes) {
        console.log('Nodes is Created');
        logNote(nodes);
    } else {
        console.log('Node is already Taken');
    }
} else if (command === "list") {
   var allNode = notes.getAll();
   console.log(`Printing ${allNode.length} notes(s).`);
   allNode.forEach((node) => notes.logNote(node));

} else if (command === "read") {
    var getNode = notes.getNote(argv.title);
    if (getNode) {
        console.log("Node are Found");
        logNote(getNode);
    } else {
        console.log("Node are not Found");
    }
} else if (command === "remove") {
    var removeNote = notes.removeNote(argv.title);
    var msg = removeNote ? "Node are removed Successfully" : "No node to remove"
    console.log(msg);
}
else {
    console.log("Unrecognized Command")
}

// var res = node.nodeName();
// console.log(res)

// console.log("Add Number:"+ node.add(5,3));
// console.log("Subtraction Number:"+ node.sub(5,3));
// console.log("Multiplication Number:"+ node.mul(5,3));
// console.log("Division Number:"+ node.div(5,3));
// console.log("Remainder Number:"+ node.remainder(5,3));

// console.log(_.isString(true));
// console.log(_.isString("Muhammad Yousuf"));
//var user = os.userInfo();
//console.log("user", user);

//fs.appendFileSync('User.txt', `Hello ${user.username}! Your age is ${node.age}`);

// var FilterArray = _.uniq(["Muhammad",3,53,"Muhammad",5])
// console.log(FilterArray)