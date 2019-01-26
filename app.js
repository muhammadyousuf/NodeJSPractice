console.log("First App Created");

const fs = require('fs');
const os = require("os");
const _ = require("lodash");
const node = require("./node.js")

var res = node.nodeName();
console.log(res)

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

var FilterArray = _.uniq(["Muhammad",3,5,2,4,3,"Muhammad",5])
console.log(FilterArray)