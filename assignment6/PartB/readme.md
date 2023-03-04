## Stopwatch APP
This is a simple stopwatch app built using JavaScript. It displays the elapsed time in hours, minutes, and seconds.

### Getting Started
To use the stopwatch, simply open the HTML file in your web browser. You will see a digital clock with the time displayed as 00:00:00.

### How to Use
There are three buttons available to control the stopwatch:

Start: Clicking this button will start the stopwatch. If the stopwatch is already running, this button will have no effect.

Pause: Clicking this button will pause the stopwatch. If the stopwatch is already paused, this button will have no effect.

Reset: Clicking this button will reset the stopwatch to 00:00:00. If the stopwatch is running or paused, it will stop and reset to 00:00:00.

### How it Works
The stopwatch app uses JavaScript to update the elapsed time every second. When the Start button is clicked, it sets a startTime variable to the current time and starts an interval that calls the updateTime function every second. The updateTime function calculates the elapsed time and updates the display. When the Pause button is clicked, it sets an elapsedTime variable to the total elapsed time and stops the interval. When the Reset button is clicked, all the variables are reset to their initial values and the display is set to 00:00:00
