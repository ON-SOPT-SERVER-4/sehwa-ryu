const team4 = require('./members');
const members = team4.members;

const returnMembers = function(obj) {
    console.log("4조의 팀원들을 소개합니다!")
    for(var member of obj){
        const {name, address, age, hobby } = member
        console.log(`이름 : ${name}\n거주지: ${address}\n나이: ${age}\n취미: ${hobby}\n\n`);
    }
}

returnMembers(members);
