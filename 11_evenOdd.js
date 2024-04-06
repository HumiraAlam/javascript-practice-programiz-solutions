//Javascript Program to Check if a Number is Odd or Even

function evenOdd(num){
    if(num%2==0){
        return "Number is Even"
    }
    else if (num%2!==0){
        return "Number is odd"
    }else{
        return "Give a valid Number"
    }
}

var result=evenOdd(4)
console.log(result)