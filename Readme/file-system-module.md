## File System Module

node.js의 내장 모듈인 file system module (fs module)을 살펴보겠다. 대부분의 메소드들이 **동기/비동기**로 나뉘는데, **Sync**라는 이름이 붙어있는 메소드가 **동기방식**을 사용한다고 보면 된다.

fs 모듈은 파일 시스템에 접근하는 모듈인데, **기본적인 파일 생성, 삭제, 읽기 기능**을 제공한다.

#### 1\. 파일 읽기

-   fs.readFile(filename, \[options\], callback)

**filename**의 파일을 \[**options**\]의 방식으로 읽은 후 **callback**으로 전달된 함수를 호출한다 **(비동기적)**

-   fs.readFileSync(filename, \[options\])

**filename**의 파일을**\[options\]**의 방식으로 읽은 후 문자열을 반환한다. **(동기적)**

동기적으로 파일을 읽어들일 때는 파일을 읽으면서 동시에 다른 작업을 수행할 수 없다. 비동기 적으로 파일을 불러오게 되면 다른 작업을 동시에 수행할 수 있고, 파일을 다 읽으면 매개변수 callback으로 전달한 함수가 호출된다.

> 파일읽기 예제

```javascript
// readFile.js
 
const fs = require('fs');
 
// 동기적 읽기
const text = fs.readFileSync('textSync.txt', 'utf8');
console.log(text);
 
// 비동기적 읽기
fs.readFile('text.txt', 'utf8', function(err, data) {
    console.log(data);
});
```

#### 2\. 파일 생성하기

-   fs.writeFile(filename, data, \[options\], callback)

**filename**의 파일에**\[options\]**의 방식으로**data**내용을 쓴 후**callback**함수를 호출한다. **(비동기적)**

-   fs.writeFileSync(filename, data, \[options\])

**filename**의 파일에**\[options\]**의 방식으로**data**내용을 쓴다. **(동기적)**

> 파일쓰기 예제

```javascript
// writeFile.js
 
const fs = require('fs');
 
const data = 'Hello FileSystem';
 
fs.writeFile('text.txt', data, 'utf8', function(err) {
    console.log('비동기적 파일 생성 완료');
});
 
 
fs.writeFileSync('textSync.txt', data, 'utf8');
console.log('동기적 파일 생성 완료');
```

#### 3\. 예외 처리

파일 입출력은 다양한 원인으로 예외가 발생할 수 있다 (권한이 없거나 존재하지 않는 파일을 읽으려 하거나 등등). 시스템이 비정상적으로 종료되지 않게 하기 위해 **예외처리는 필수적으로 해주어야 하는데**, 동기적 방식과 비동기 방식에 따른 예외처리 방식을 알아보겠다.

> 동기적 방식 예외처리 예제

```javascript
// main.js
var fs = require('fs');
 
// 파일 읽기(동기적)
try {
	var data = fs.readFileSync('notexist.txt', 'utf8'); // 파일이 없는데 읽으려 함
	console.log(data);
} catch (err) {
    console.log(err);
}
```

동기적 방식에서는 자바스크립트에서 예외처리를 할 때 일반적으로 써주는 방식인 try~catch 구문으로 처리한다. 쓰기도 마찬가지로 try catch 구문으로 써주면 된다.

> 비동기적 방식 예외처리 예제

```javascript
// main.js
var fs = require('fs');
 
// 파일 읽기
fs.readFile('notexist.txt', 'utf8', function(err, data) { // 존재하지 않는 파일 읽기
    if (err) {
        console.log(err); // 읽기 실패
    }
    else {
        console.log(data); // 읽기 성공
    }
});
```

비동기적 방식에서는 예외가 발생하면 callback 함수의 매개변수 err에 전달되므로, 따로 try~catch 구문을 사용할 필요가 없다.

