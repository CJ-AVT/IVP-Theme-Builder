function setButtonRoundness() {
    const button = document.getElementsByClassName("vjs-big-play-button")[0];

    const sizeSlider = document.getElementById("slider-2");

    const sliderCounter = document.getElementById("slider-counter-2");

    sizeSlider.addEventListener("input", function () {
        button.style.borderRadius = sizeSlider.value + "em";
        sliderCounter.value = sizeSlider.value;
    });

    sliderCounter.addEventListener("input", function () {
        button.style.transform = sizeSlider.value + "em";
        sizeSlider.value = sliderCounter.value;
    })

};