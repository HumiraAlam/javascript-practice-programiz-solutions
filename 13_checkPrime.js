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
    else {
        for(i=2;i<Math.sqrt(num);i++){
            if(num % i=== 0){
                return "not Prime"
                break
            }
            
        }
        
    }
    
}

var result=primeNum(9)
console.log(`Number is ${result}`)

