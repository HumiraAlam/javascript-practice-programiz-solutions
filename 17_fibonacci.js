//JavaScript Program to Print the Fibonacci Sequence
var num=10;
let num1=0;num2=1;
var result;
for(i=1;i<=num;i++){    
    result=num1;  
    var nextTerm=num1+num2; 
    num1=num2;                
    num2=nextTerm          
    console.log(result)

}