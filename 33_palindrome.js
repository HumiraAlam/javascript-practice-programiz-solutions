//JavaScript Program to Check Whether a String is Palindrome or Not

let str="racecar"

let splitedStr=str.split("");
let reversedStr=splitedStr.reverse().join("")
if(str==reversedStr){
    console.log("true")
}else{
    console.log("false")
}

// let len= str.length;
// for(i=0;i<=len/2;i++){
//     if(str[i]!==str[len-1-i]){
//         console.log("false")
//         }else{
//            console.log("true")
//         }
    
// }

