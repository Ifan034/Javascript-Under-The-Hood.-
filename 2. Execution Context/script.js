// There are two phases of JavaScript execution context:

// 1.Creation phase: In this phase, the JavaScript engine creates the execution context and sets up the script's environment. It determines the values of variables and functions and sets up the scope chain for the execution context.
// 2.Execution phase: In this phase, the JavaScript engine executes the code in the execution context. It processes any statements or expressions in the script and evaluates any function calls.

var x = 100;
var y = 50;
function getSum(n1,n2){
    var sum =  n1 + n2;
    return sum;
}


var sum1 = getSum(x, y)
var sum2  = getSum(10,5)
console.log(sum1)
