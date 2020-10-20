const members = require('./member')

const getFemale = members => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(members.filter(m => m.gender === '여'))
        }, 500)
    })
}

const getOB = members => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(members.filter(m => m.status === 'OB'))
        }, 500)
    })
}

const getiOS = members => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(members.filter(m => m.part === 'iOS'))
        }, 500)
    })
}

getFemale(members)
    .then(a => getOB(a))
    .then(a => getiOS(a))
    .then(a => console.log(a))
