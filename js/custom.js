//  Jasons code along and instruction  1.14.21
document.getElementById("btnSH").addEventListener("click",SunsetHills);
document.getElementById("btnClear").addEventListener("click",Clear);



function SunsetHills(){
    // step 1: get all user data
    let num1 = parseInt(document.getElementById("userInput1").value);
    let num2 = parseInt(document.getElementById("userInput2").value);
    let num3 = parseInt(document.getElementById("userInput3").value);
    let num4 = parseInt(document.getElementById("userInput4").value);
    let num5 = parseInt(document.getElementById("userInput5").value);





    // Step2: turn user datsa into an array
    let userArray = new Array();
        userArray.push(num1);
        userArray.push(num2);
        userArray.push(num3);
        userArray.push(num4);
        userArray.push(num5);
    
// step 3: determin which buidlings san see the sunset
let maxNum = userArray[0];
let ascendingArray  = new Array();
ascendingArray.push(maxNum);


for(let loop=1; loop < userArray.length ; loop++){
    if(userArray[loop] > maxNum){
        maxNum = userArray[loop]
        ascendingArray.push(maxNum);
    }
     
    
}


    // output to id="output"  --innertext or innerHTML
document.getElementById("output").innerText = `The Ascending array is [${ascendingArray.join(', ')}]`;


}

function Clear(){
 document.getElementById("userInput1").value = "";
 document.getElementById("userInput2").value = "";
 document.getElementById("userInput3").value = "";
 document.getElementById("userInput4").value = "";
 document.getElementById("userInput5").value = "";
 document.getElementById("output").innerText = "";

}






// __--------pretty cool----- ADvanced method
// ***************************************
// function sunsetHills() {

//     let userInput1 = parseInt(document.getElementById("userInput1").value);
//     let userInput2 = parseInt(document.getElementById("userInput2").value);
//     let userInput3 = parseInt(document.getElementById("userInput3").value);
//     let userInput4 = parseInt(document.getElementById("userInput4").value);
//     let userInput5 = parseInt(document.getElementById("userInput5").value);
//     let userInput6 = parseInt(document.getElementById("userInput6").value);

//     let userArray = [userInput1, userInput2, userInput3, userInput4, userInput5, userInput6];
//     let buildArray = [];
//     let count = 1;
//     let currentMax = userArray[0];
//     buildArray.push(currentMax);

//         for (let i = 0; i < userArray.length; i++) {

//             if (userArray[i] > currentMax) {
//                 count++;
//                 buildArray.push(userArray[i]) ;
//                 currentMax = userArray[i];
//             }
//             document.getElementById("sunshine").innerHTML = `${count} buildings can see the sun. Those are buildings [${buildArray.join()}]`;
//         }
//     }