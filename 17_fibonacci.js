//JavaScript Program to Print the Fibonacci Sequence
var num=10;
let a=0;b=1;
var result;
for(i=1;i<=num;i++){    
    result=a;  
    var nextTerm=a+b; 
    a=b;                
    b=nextTerm          
    console.log(result)

}