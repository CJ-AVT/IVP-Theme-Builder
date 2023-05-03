function minifyCSS() {
    var textarea = document.getElementById("css-output-text");
    var cssContent = textarea.value;
    let newCSS = cssContent;

    // Remove comments
    newCSS = newCSS.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '');

    // Remove whitespace
    newCSS = newCSS.replace(/\s+/g, ' ');

    // Remove semicolons before closing curly braces
    newCSS = newCSS.replace(/;(?=\s*})/g, '');

    // Set the minified CSS as the new value of the textarea
    textarea.value = newCSS;
    var textarea = document.getElementById("css-output-text");
    var cssContent = textarea.value;

    // Create a new Blob object with the CSS content
    const blob = new Blob([cssContent], { type: "text/css" });

    // Create an <a> element to act as a download link and click it to download the file
    const a = document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = "minified.css";
    a.click();
}

function downloadCSS() {
    const textarea = document.getElementById("css-output-text");
    const cssContent = textarea.value;

    // Create a new Blob object with the CSS content
    const blob = new Blob([cssContent], { type: "text/css" });

    // Create an <a> element to act as a download link and click it to download the file
    const a = document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = "stylesheet.css";
    a.click();
}

function copyCSSToClipboard() {
    const textarea = document.getElementById("css-output-text");

    // Select the contents of the textarea element
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selection to the clipboard
    document.execCommand("copy");
}