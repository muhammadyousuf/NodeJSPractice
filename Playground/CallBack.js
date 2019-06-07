var greeting = (id, callback) => {
    let user = {
        id,
        name: "yousuf"
    }
    setTimeout(() => {
        callback(user);
    }, 5000)

}

greeting(22, (user) => {
    console.log('Hello', user);
})