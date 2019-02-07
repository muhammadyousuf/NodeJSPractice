console.log("Notes Its Working");

addNote = (title, body) => {
    console.log("Add Notes", title, body);
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