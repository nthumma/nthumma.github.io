// script.js

function validateJSON() {
    const jsonInput = document.getElementById('jsonInput').value;
    const output = document.getElementById('output');
    const beautifiedOutput = document.getElementById('beautifiedOutput');
    
    try {
        // Try to parse the JSON
        JSON.parse(jsonInput);
        output.innerHTML = "Valid JSON!";
        output.style.color = "green";
        beautifiedOutput.innerHTML = "";
    } catch (error) {
        // If error, show the error message
        output.innerHTML = `Invalid JSON: ${error.message}`;
        output.style.color = "red";
        beautifiedOutput.innerHTML = "";
    }
}

function beautifyJSON() {
    const jsonInput = document.getElementById('jsonInput').value;
    const output = document.getElementById('output');
    const beautifiedOutput = document.getElementById('beautifiedOutput');
    
    try {
        // Try to parse and then beautify the JSON
        const parsedJSON = JSON.parse(jsonInput);
        const beautifiedJSON = JSON.stringify(parsedJSON, null, 4);
        beautifiedOutput.innerHTML = beautifiedJSON;
        output.innerHTML = "JSON beautified successfully!";
        output.style.color = "green";
    } catch (error) {
        // If error, show the error message
        output.innerHTML = `Invalid JSON: ${error.message}`;
        output.style.color = "red";
        beautifiedOutput.innerHTML = "";
    }
}
