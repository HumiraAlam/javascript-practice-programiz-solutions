//JavaScript Program to Display Fibonacci Sequence Using Recursion
function fibonacci(num){
    var num1=0;
    var num2=1;
    for(let i=0;i<=num;i++){
        var result= fibonacci(num-1)+fibonacci(num-2);
        var nextNum=num1+num2;
        num1=num2;
        num2=nextNum;
        console.log()
    }

}
fibonacci(8)