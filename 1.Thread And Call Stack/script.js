// In JavaScript, a thread is the smallest unit of execution, and JavaScript is a single-threaded language, meaning it has one call stack and one memory heap. This single thread is responsible for executing the code and managing events, callbacks, and other asynchronous tasks.
function first () {
    console.log('this is first')
    second()
}

function second() {
    console.log('this is second')
    third()
}
function third() {
    console.log('this is third')
}

first();

// When a script starts executing, the JavaScript engine creates a global execution context and pushes it onto the call stack.
// Each time a function is called, its execution context is pushed onto the top of the call stack.
// When a function completes, its execution context is popped from the stack.
// The call stack operates in a Last In, First Out (LIFO) manner