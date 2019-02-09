console.log("Notes Its Working");

const fs = require('fs');
addNote = (title, body) => {
    var nodes = [];
    var node = {
        title,
        body
    }
    try{
    var getdata = fs.readFileSync('node-data.json');
    nodes = JSON.parse(getdata);
    }catch(e){

    }
    var duplicate = nodes.filter((note) => note.title === title );
    if(duplicate.length === 0){
    nodes.push(node);
    fs.writeFileSync('node-data.json', JSON.stringify(nodes));
    }

}


getAll = () => {
    console.log("Get All Notes");
}

getNote = (title) => {
    console.log("Read Notes", title);
}

removeNote = (title) => {
    console.log("Remove Note", title);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}