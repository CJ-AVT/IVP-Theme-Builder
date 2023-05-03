function changeTheme(selectedOption) {
    const video = document.getElementById(`my_video`);
    const classList = video.classList;
    const themeClass = Array.from(classList).find(className => className.startsWith('vjs-theme-'));
    console.log(themeClass);

    video.classList.replace(themeClass, `vjs-theme-${selectedOption}`); // Replace the old class with the new class
}