function factorial(num){
    var a=0;b=1; let next;
    for(i=1;i<=num;i++){
        var result= a;
        next=a+b;
        a=b;
        b=next;
        console.log(result)
    }
    
}
factorial(5)
