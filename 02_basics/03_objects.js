//singleton
// Object.create;

//object literals

const mySym = Symbol("key1")
// console.log(mySym)

const jsUser = {
    name: "Ravish",
    age: 18,
    [mySym]: "key1",    //to use symbol use square brackets
    location: "jaipur",
    email: "ravish@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "wednesday"],
    "full name": "ravish bisht"
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// // console.log(jsUser.'full name') // give error
// console.log(jsUser['full name'])
// console.log(jsUser[mySym])

// jsUser.email = "cyko@gmail.com";
// // Object.freeze(jsUser);             //now can't change
// jsUser.email = "stella@gmail.com";

jsUser.greeting = function(){
    console.log("hello js user")
}

jsUser.greeting1 = function(){
    console.log(`hello js user ${this.name}`)
}



// console.log(jsUser)
console.log(jsUser.greeting())
console.log(jsUser.greeting1())


//                                  node 02_basics/03_objects.js
