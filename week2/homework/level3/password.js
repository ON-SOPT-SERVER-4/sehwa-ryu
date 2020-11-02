// LEVEL 3
// fs 모듈을 이용하여 비동기적으로 비밀번호 암호화하기


const fs = require('fs');
const crypto = require('crypto');

const fileName = 'password'
const password = 'sopt27thServer';

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, key) =>{
      fs.writeFile(`${fileName}.txt`,key.toString('base64'),()=>{
        console.log(`file ${fileName} created!`);
    })
    });
});


