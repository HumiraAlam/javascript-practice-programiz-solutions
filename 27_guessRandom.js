//JavaScript Program to Guess a Random Number
var randomNum= Math.floor(Math.random()*(10-7)+7) //in between 7-10

var myNum=9;
if(myNum==randomNum){
    console.log("Number Matches")
}else{
    console.log("No Match")
}
console.log(randomNum)