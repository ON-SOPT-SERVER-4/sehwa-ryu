const person = new Object(); //빈 객체 생성

//프로퍼티 추가
person.name = "류세화"; // 점 표기법 접근
person.part = "Server"
person["gender"] = 'female'; // 브라켓 표기법 접근
person.sayHello = function () {
	console.log(`안녕하세요 ${this.part} 파트 ${this.name} 입니다.`);
}

console.log(typeof person);
console.log(person);
person.sayHello();

console.log('=====================');

/* 객체 리터럴 (가장 일반적인 자바스크립트의 객체 생성 방식) */
const emptyObject = {}; // 빈 객체 생성
console.log(typeof emptyObject); // object

const animal = {
    animalType: 'dog',
    animalName: "코코",
    animalFriends: ['초코', '뽀삐', '멍멍'],
    bark: function() {
        console.log(`${this.animalName}는 멍멍 짖어요`);
    },
    thisFriends: function() {
        this.animalFriends.forEach(friend => {
            console.log(`${this.animalName}의 친구: ${friend}`);
        })
    },
};

console.log(animal);
animal.bark();
animal.thisFriends();
