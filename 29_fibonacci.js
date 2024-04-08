//JavaScript Program to Display Fibonacci Sequence Using Recursion

var num=10;
var a=0,b=1;

for(i=1;i<=num;i++){
 
    var nextNum,fibonacci=0;
    fibonacci=a
    nextNum=a+b;
    a=b;
    b=nextNum
    console.log(fibonacci)



}