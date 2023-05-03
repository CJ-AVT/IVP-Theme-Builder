function setButtonSize() {
    const button = document.getElementsByClassName("vjs-big-play-button")[0];

    const sizeSlider = document.getElementById("slider-1");

    const sliderCounter = document.getElementById("slider-counter-1");

    sizeSlider.addEventListener("input", function () {
        button.style.transform = "translate(-50%, -50%) scale(" + sizeSlider.value + ")";
        sliderCounter.value = sizeSlider.value;
    });

    sliderCounter.addEventListener("input", function () {
        button.style.transform = "translate(-50%, -50%) scale(" + sliderCounter.value + ")";
        sizeSlider.value = sliderCounter.value;
    })

};