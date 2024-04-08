//JavaScript Program to Find the Factorial of a Number
//5*4*3*2*1
function factorialNumber(num){
    var result=1
    for(let i=num;i>=1;i--){
        result*=i
        
    }
    console.log(`Factorial of ${num}=${result}`) 

}
factorialNumber(5)

