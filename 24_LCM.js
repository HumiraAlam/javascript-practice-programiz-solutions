//JavaScript Program to Find LCM

let num1=6;
let num2=8;
let HCF,LCM;

for(i=1; i<=num1 && i<=num2; i++){
    if(num1%i==0 && num2%i==0){
        HCF=i
    }
}
LCM=(num1*num2)/HCF;
console.log(LCM)