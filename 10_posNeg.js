function isPositive(num){
    if(num==0){
        return "Zero"
    }
    else if(num>0){
        return "Positive"
    }
    else if (num<0){
        return "Negetive"
    }
}
var PositiveNegetive=isPositive(-4)
console.log(`The Number is ${PositiveNegetive}`)