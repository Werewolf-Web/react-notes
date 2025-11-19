// // 1. Add Two Numbers

// // Ask the user for two numbers

// let num1=Number(prompt("enter the first number : "));
// let num2=Number(prompt("enter the second number : "));

// alert("the sum of two number is : "+ (num1+num2));
// ---------------------------------------------------------------


// // 2. Check if Number is Positive

// // Ask for a numbe

// let num = Number(prompt("Enter a number: "));
// if (num>0){
//     alert("The number is positive.");
// }
// else if (num==0){
//     alert("The number is zero ");
// }
// else{
//     alert("The number is negative.");
// }

// ---------------------------------------------------------------


// // 3. Even or Odd

// // Ask the user for a number and print:

// let num = Number(prompt("Enter a number: "));
// if (num % 2 == 0){
//     alert("number is positive")
// }
// else{
//     alert("number is negative")
// }

// --------------------------------------------------

// // 4. Compare Two Numbers
// // Ask for two numbers

// let num1 =Number(prompt("Enter first number"));
// let num2 =Number (prompt("enter second number"));
// if(num1<num2){
//     alert(num2+ " is grater then "+num1 );

// }
// else if(num1 == num2){
//      alert(num2+ " and  "+num1+" are equle" );

// }
// else{
//      alert(num1+ " is grater then "+num2 );

// }

// --------------------------------------------------

// // 6. Grading System
// // Ask the user for marks (0–100).

// function greadmark() {
//     let marks=document.getElementById("mark").value;
//     if (marks >= 90 && marks <=100){
//         alert("you got A Gread");

//     }
//     else if (marks >=80 && marks <=89){
//         alert("you got B Gread");
//     }
//     else if (marks >=70 && marks <=79){
//         alert("you got C Gread");
//     }
//     else if (marks >=60 && marks <=69){
//         alert("you got D Gread");
//     }
//     else if (marks >=50 && marks <=59){
//         alert("you got E Gread");
//     }
//     else if(marks < 50 ){
//         alert("you are fail");
//     }
// }

// --------------------------------------------------

// // 8. Login Check

// // Ask for username and password.
// // If username = "admin" AND password = "1234"

// function getacssess(){
//     let username=document.getElementById("username").value;
//     let password=document.getElementById("password").value;

//     if(username == "admin" && password == "1234"){
//         alert("Login Successful");
//         window.location.href="./javaa Script.txt";
//     }
//     else{
//         alert("Login Failed");
//     }
// }


// --------------------------------------------------

// const cars = []; // global array

// function addcar() {
//     let carName = document.getElementById("carInput").value;

//     cars.push(carName); // array માં ઉમેરો
//     document.getElementById("carInput").value = "";
    
//     let text = "";

//     for (let i = 0; i < cars.length; i++) {
//         text = text+ cars[i] + "<br>";
//     }

//     document.getElementById("carsList").innerHTML = text;
//     console.log(cars);
// }

// // --------------------------------------------------


