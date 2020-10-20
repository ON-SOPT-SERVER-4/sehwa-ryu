const getNumber = new Promise((resolve, reject) => {
    console.log("getNumber pending");
    setTimeout(() => {
        resolve(100)
    },1000);
})

getNumber
    .then(value => {
        console.log(value);
        return value * 2;
    })
    .then(value => {
        console.log(value);
        return value * 3
    })
    .then(value => {
        return  new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(value + 1000);
            }, 1000)
        })
    })
    .then(value => console.log(value));