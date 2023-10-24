const user = {
    username: "Ravish",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "ravish"
//     console.log(this.username)  //here this will not give the value of username
// }
// chai()
    
      //normal function
// const chai = function () {
//     let username = "hitesh";
//     console.log(this.username)
// } 

   //arrow function
// const chai = () => {
//     let username = "hitesh";
//     console.log(this.username)
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3,4))
//    or
// const addTwo = (num1, num2) =>  num1 + num2;
// console.log(addTwo(3,4))

//  to return object you have to wrap it in brackets without return keyword in single line
// const addTwo = (nem1, num2) => ({username: "ravish"})
// console.log(addTwo(1,3));
