// function sayMyName(){
//     console.log("r")
//     console.log("a")
//     console.log("v")
//     console.log("i")
//     console.log("s")
//     console.log("h")
// }
// sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// function addNumbers(number1, number2){
//    let result = number1 + number2;
//    return result;
//    }

// addTwoNumbers(2, 4);
// addTwoNumbers(2, '4');
// addTwoNumbers(2, 'a');
// addTwoNumbers(2, null);

// const output = addNumbers(2,4);
// console.log(output)

// function loginUserMessage(username = "sam"){        //'sam' is default value
//     if(username === undefined){                   //undefined is falsy value;

//         console.log("please enter a user name");
//         return;
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("ravish"))
// console.log(loginUserMessage())

// function calculateCartPrice(val1, val2, ...num1){   //rest parameter
//     return num1;
// }

// console.log(calculateCartPrice(2,2,8,7,9))

const user = {
    username: "ravish",
    price: 199,
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)

const myNewArray = [200, 300, 400, 500]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))

