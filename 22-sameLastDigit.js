//JavaScript Program to Check if the Numbers Have Same Last Digit

var isSame=true;
let num1=123;
let num2=343;
if(num1%10 == num2%10){
    isSame
}else{
    isSame=false
}
if(isSame){
    console.log("The Numbers Have Same Last Digit")
}else{
    console.log("The Numbers don't Have Same Last Digit")
}