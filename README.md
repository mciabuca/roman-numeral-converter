# Roman Numeral Converter

This project is a simple web application that converts decimal numbers into Roman numerals.

## Project Structure

The project consists of three main files:

- `index.html`: This is the main HTML file that contains the structure of the web page.
- `styles.css`: This file contains the CSS styles for the web page.
- `script.js`: This JavaScript file contains the logic for converting decimal numbers to Roman numerals and updating the web page.

## How to Use

To use the Roman Numeral Converter, follow these steps:

1. Open the `index.html` file in a web browser.
2. Enter a decimal number between 1 and 3999 into the input field.
3. Click the "Convert" button.
4. The Roman numeral equivalent of the entered number will be displayed on the page.

If you enter a number outside the range of 1 to 3999, or if you leave the input field empty, an error message will be displayed.

## How It Works

The conversion logic is implemented in the `script.js` file. When the "Convert" button is clicked, the script checks if the entered number is valid and within the allowed range. If it is, the number is converted to a Roman numeral using the `convertToRoman` function and the result is displayed on the page. If the entered number is not valid or outside the allowed range, an appropriate error message is displayed.