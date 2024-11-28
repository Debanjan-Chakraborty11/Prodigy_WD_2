
let startTime = 0; // The time when the stopwatch started
let elapsedTime = 0; // The total elapsed time
let timerInterval; // The interval that updates the display
let isRunning = false; // Boolean to check if the stopwatch is running

// Function to start and stop the stopwatch
function startStop() {
    if (isRunning) {
        // Stop the stopwatch
        clearInterval(timerInterval);
        document.getElementById("startStop").innerText = "Start";
    } else {
        // Start the stopwatch
        startTime = Date.now() - elapsedTime; // Adjust start time to continue from the previous point
        timerInterval = setInterval(updateTime, 10);
        document.getElementById("startStop").innerText = "Stop";
    }
    isRunning = !isRunning;
}

// Function to update the displayed time
function updateTime() {
    elapsedTime = Date.now() - startTime; // Calculate elapsed time
    let milliseconds = Math.floor(elapsedTime % 1000);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);

    // Format time as two digits (e.g., "05" instead of "5")
    document.getElementById("milliseconds").innerText = milliseconds.toString().padStart(3, '0').slice(0, 2);
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
}

// Function to reset the stopwatch
function reset() {
    clearInterval(timerInterval);
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    document.getElementById("milliseconds").innerText = "00";
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    document.getElementById("startStop").innerText = "Start";
}
