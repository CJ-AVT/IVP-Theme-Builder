function setHexValuePlayButton() {
    const colorInput = document.getElementById("color-wheel-play-button");

    const optionInput = document.getElementById("hex-input");

    // const optionBar = document.getElementsByClassName("vjs-control-bar")[0];

    const playIcon = document.getElementsByClassName("vjs-big-play-button")[0];

    // Add event listener to update hexValue when color is changed
    colorInput.addEventListener("input", function () {
        // optionInput.value = hexValue;
        // optionBar.style.backgroundColor = hexValue;
        playIcon.style.backgroundColor = colorInput.value;
    });
};

function setHexValueControls() {
    const colorInput = document.getElementById("color-wheel-controls");
    const icons = document.getElementsByClassName('vjs-icon-placeholder');
    console.log(icons);

    // Use a loop to iterate through all elements with class name 'vjs-icon-placeholder'
    colorInput.addEventListener("input", function () {
        for (let i = 0; i < icons.length; i++) {
            icons[i].style.color = colorInput.value;
        }
    });
};