// Function scope인 var는 역시 function scope의 범위를 벗어나게 되면 접근 불가

function colorFunction(){
    if(true) {
        var color = 'blue';
        console.log(color); // blue
    }
    console.log(color); //blue 
}
colorFunction();
console.log(color); //ReferenceError: color is not defined


hoistFunction();
function hoistFunction() {
    console.log(x); //undefined
    var x = 'var';
    console.log(x); //var
}

