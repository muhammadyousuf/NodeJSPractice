console.log("Hello Node.js");

//module.exports.age = 23

module.exports.nodeName = function() {
    console.log("Created By Muhammaad");
    return "Yousuf"
}
module.exports.add = (a ,b) => {
     return a + b;
}
module.exports.sub = (a ,b) => {
    return a - b;
}
module.exports.mul = (a ,b) => {
    return a * b;
}
module.exports.div = (a ,b) => {
    return a / b;
}
module.exports.remainder = (a ,b) => {
    return a % b;
}