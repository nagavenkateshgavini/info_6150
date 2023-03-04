## Script_Login.js:

This JavaScript file contains client-side validation code for the login form present in the corresponding HTML file.

Functionality
The script listens for the submit event on the login form and prevents its default behavior. Then it checks whether the entered values in the form fields are valid or not.

The name field must have at least 5 characters and should only contain alphanumeric characters.
The email field should be in the format of username@northeastern.edu.
The password field should be at least 9 characters long.
If any of these conditions fail, then an error message is displayed next to the relevant field, and the field's CSS class is updated to indicate an error.

If all the fields are valid, then the name is stored in local storage, and the user is redirected to calci.html page.

Usage
This script must be loaded in the HTML file after the jQuery library and before the closing </body> tag.

It is recommended to add comments to the code explaining its functionality and any changes made to the code.


## script_calci.js


This is a simple calculator app that allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It also greets the user with their name, retrieved from local storage.

To use the calculator app, simply open the index.html file in your web browser. The app requires jQuery, which is included in the project.

Usage
Enter two numbers in the num1 and num2 textboxes and click on the desired operation button (+, -, x, or /) to perform the operation. The result will be displayed in the result textbox. If invalid input is entered, an alert will be displayed prompting the user to enter valid input.
