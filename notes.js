const fs = require('fs');
var fetchData = () => {
    try {
        var getdata = fs.readFileSync('node-data.json');
        return JSON.parse(getdata);
    } catch (e) {
        return [];
    }
}
var SaveNote = (notes) => {
    fs.writeFileSync('node-data.json', JSON.stringify(notes));
}
addNote = (title, body) => {
    var nodes = fetchData();
    var node = {
        title,
        body
    }

    var duplicate = nodes.filter((note) => note.title === title);
    if (duplicate.length === 0) {
        nodes.push(node);
        SaveNote(nodes);
        return node;
    }

}


getAll = () => {
   return fetchData();
}

getNote = (title) => {
    var nodes = fetchData();
    var nodeFilter = nodes.filter((node) => node.title === title)
    return nodeFilter[0];
}

removeNote = (title) => {
    var nodes = fetchData();
    var nodeFilter = nodes.filter((node)=> node.title !== title);
    SaveNote(nodeFilter);
    return nodes.length !== nodeFilter.length;
}

logNote = (nodes) =>{
    console.log("---");
    console.log(`Title: ${nodes.title}`);
    console.log(`Body: ${nodes.body}`);
}
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}