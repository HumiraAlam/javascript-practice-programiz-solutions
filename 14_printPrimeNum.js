//JavaScript Program to Print All Prime Numbers in an Interval



function primeNum(num1,num2){
    
    for (let i=num1;i<=num2;i++){
        var isPrime=true;
        
        if(i>=2){
            for(let j=2;j<=i/2;j++){
                if(i%j==0){
                    isPrime=false
                    break
                }
            }
            if(isPrime){
                console.log(i)
            }
        }
        
    
    }

}
primeNum(1,10)
