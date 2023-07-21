var x = 10
var y = 36
function sum() {
    console.log(x + y);
}
sum();
var func = function sum1(){
    return x + y;
}
console.log(func());
var func1 = (x, y) =>(x + y);
console.log(func1(x, y));
