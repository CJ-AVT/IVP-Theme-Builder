function setControlFontSize() {
    const controlBar = document.getElementsByClassName("vjs-control-bar")[0];

    const sizeSlider = document.getElementById("slider-3");

    const sliderCounter = document.getElementById("slider-counter-3");

    sizeSlider.addEventListener("input", function () {
        controlBar.style.fontSize = sizeSlider.value + "px";
        sliderCounter.value = sizeSlider.value;
    });

    sliderCounter.addEventListener("input", function () {
        controlBar.style.fontSize = sizeSlider.value + "px";
        sizeSlider.value = sliderCounter.value;
    })

};