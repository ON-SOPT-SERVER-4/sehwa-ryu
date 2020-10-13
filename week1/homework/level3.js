// Level 3: 가짜 서버파트 members.js 데이터를 이용해서 랜덤으로 조를 짜는 알고리즘 만들어보기.

const member = require('./member')
const serverMembers = member.member

// 서버 오비, 와이비 데이터 가져오기
const serverOB = serverMembers.filter(mem => mem.status === "OB");
const serverYB = serverMembers.filter(mem => mem.status === "YB");

// 오비, 와이비 리스트에서 랜덤한 인덱스 추출 후 한 번 섞는 함수
const shuffle = (arr) => {
    var length = arr.length;
    while (length) {
        var index = Math.floor((length--) * Math.random());
        var temp = arr[length];
        arr[length] = arr[index];
        arr[index] = temp;
    }
    return arr;
}

var team1 = [];
var team2 = [];
var team3 = [];
var team4 = [];
var team5 = [];
var team6 = [];

// OB와 YB의 비율을 1:1로 맞춰서 6개의 팀에 넣어주기
const shuffle2 = () => {
    let obShuffled = shuffle(serverOB);
    let ybShuffled = shuffle(serverYB);
    for (let i = 0; i < obShuffled.length; i++) {
        if (i <= 2) {
            team1.push(obShuffled[i])
        }
        else if (3 <= i && i < 6) {
            team2.push(obShuffled[i])
        }
        else if (6 <= i && i < 8) {
            team3.push(obShuffled[i])
        }
        else if (8 <= i && i < 11) {
            team4.push(obShuffled[i])
        }
        else if (11 <= i && i < 13) {
            team5.push(obShuffled[i])
        }
        else {
            team6.push(obShuffled[i])
        }
    }
    for (let j = 0; j < ybShuffled.length; j++) {
        if (j <= 2) {
            team1.push(ybShuffled[j])
        }
        else if (3 <= j && j < 6) {
            team2.push(ybShuffled[j])
        }
        else if (6 <= j && j < 10) {
            team3.push(ybShuffled[j])
        }
        else if (10 <= j && j < 13) {
            team4.push(ybShuffled[j])
        }
        else if (13 <= j && j < 17) {
            team5.push(ybShuffled[j])
        }
        else {
            team6.push(ybShuffled[j])
        }
    }
    console.log("1조입니다: ", team1)
    console.log("2조입니다: ", team2)
    console.log("3조입니다: ", team3)    
    console.log("4조입니다: ", team4)
    console.log("5조입니다: ", team5)
    console.log("6조입니다: ", team6)
}

shuffle2()
