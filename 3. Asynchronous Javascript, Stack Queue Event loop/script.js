// With asynchronous code, multiple tasks can execute at the same time while tasks in the background finish. This is what we call non-blocking code. The execution of other code won't stop while an asynchronous task finishes its work.

// Stack:
// A stack is a data structure that follows the Last In, First Out (LIFO) principle.
// Think of it as a stack of plates. The last plate added is the first one to be removed.
// In programming, a stack is commonly used in the call stack, a mechanism for managing function calls and their execution contexts.

// Queue:
// A queue is a data structure that follows the First In, First Out (FIFO) principle.
// Think of it as a line of people waiting for a bus. The first person to arrive is the first to board.
// Queues are used in various scenarios, such as managing tasks in a background job processing system or handling requests in web servers.

// Event Loop:
// The event loop continuously checks the call stack and the message queue.
// If the call stack is empty, the event loop takes the first message from the queue and pushes it onto the call stack, executing the associated callback.
setTimeout(() => {
    console.log('hello from callback');
}, 2000)
console.log('Run Me')