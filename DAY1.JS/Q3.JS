//HOW TO FIND EXECUTION TIME OF FUNCTION IN JS 
//ACCENTURE
function calc() {
    let i = 0;
    while (i < 20000) {
        i++;
    }
}

// Start the timer
console.time("timer");

// Call the function
calc();

// End the timer and log the execution time
console.timeEnd("timer");
