// var c = 50
// let a = 300
// if(true){
//     let a = 10;
//     const b = 20;
//     console.log("inner:",a)
// }
// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "ravish"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
// one()

if(true){
    const username = "ravish"
    if(username === "ravish"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

//++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++

console.log(addOne(5))
function addOne(num){
    return num+1;
}

console.log(addTwo(10))
const addTwo = function(num){
    return num+2;
}


//             node 03_basics/02_scopes.js