//JavaScript Program to Check Prime Number

function primeNum(num){
    if(num==0){
        return "zero"
    }
    else if (num==1){
        return "neither positibe nor negetive"
    }else if (num==2) {
        return "prime"
    }
    else if(num>2){
        for(i=2;i<=num;i++){
            if(num%i==0){
                return "not Prime"
                break
            }else{
                return "prime"
            }
        }
    }
}

var result=primeNum(101)
console.log(`Number is ${result}`)