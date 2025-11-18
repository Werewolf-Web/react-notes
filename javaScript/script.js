let choice = Number(prompt("Choose an operation: 1. add, 2. subtract, 3. multiply, 4. divide"));

let Numb1 = Number(prompt("Enter your number 1:"));
console.log("number 1 is = " + Numb1);

let Numb2 = Number(prompt("Enter your number 2:"));
console.log("number 2 is = " + Numb2);

switch (choice) {
    case 1:
        alert("Result = " + (Numb1 + Numb2));
        break;

    case 2:
        console.log("Result = " + (Numb1 - Numb2));
        break;

    case 3:
        console.log("Result = " + (Numb1 * Numb2));
        break;

    case 4:
        console.log("Result = " + (Numb1 / Numb2));
        break;

    default:
        console.log("Invalid choice");
        break;
}
