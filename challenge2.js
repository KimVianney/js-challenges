/*

Age classification challenge
Author: Vianney Kimuri 

*/

function ageClass() {
    userInput = prompt("Please enter your year of birth: ")

    const userAge = new Date().getFullYear() - parseInt(userInput);

    if (userAge > 0 && userAge < 18) {
        console.log("Minor");
    } else if (userAge >=18 && userAge <=36) {
        console.log("Youth")

    } else {
        console.log("Elder")
    }
}

ageClass()