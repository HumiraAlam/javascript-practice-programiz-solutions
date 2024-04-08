//JavaScript Program to Make a Simple Calculator


function calculator(num1,num2,action){ 
switch(action){
    case "+":
        return num1+num2;
        break;
    case "-":
        return num1-num2;
        break;
    case "*":
        return num1*num2;
        break;
    case "/":
        return num1/num2;
        break
}

}
var result=calculator(2,4,"/")
console.log(result)