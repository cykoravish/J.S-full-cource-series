// Immediately Invoked Function Expression (IIFE)
 //global scope ke pollution ko hatane ke lia iife ka use hota ha
(function chai(){
    //named iife
    console.log(`DB CONECTED`)
})();   //semicolan is must to stop the execution
((name)=>{
    //unNamed iife
    console.log(`DB CONECTED 1 ${name}`)
})('ravish')

let val1 = 10;
let val2 = 5;
function addNum(num1, num2){
    let total = num1 + num2;
    return total;
}

let result = addNum(val1, val2)
let result2 = addNum(10,2)













// node 03_basics/04_iife.js