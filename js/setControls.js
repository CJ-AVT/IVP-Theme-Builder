function setFullscreen(className) {
    const fullscreenControl = document.querySelector('.vjs-fullscreen-control');
    if (className.classList.contains('checked')) {
        fullscreenControl.classList.add('vjs-hidden');
    }
    else {
        fullscreenControl.classList.remove('vjs-hidden');
    }
};

function setPlayback(className) {
    const playback = document.querySelector('.vjs-playback-rate');
    if (className.classList.contains('checked')) {
        playback.classList.add('vjs-hidden');
    }
    else {
        playback.classList.remove('vjs-hidden');
    }
};

function setChapters(className) {
    const chapters = document.querySelector('.vjs-chapters-button');
    if (className.classList.contains('checked')) {
        chapters.classList.add('vjs-hidden');
    }
    else {
        chapters.classList.remove('vjs-hidden');
    }
};

function setDescriptions(className) {
    const descriptions = document.querySelector('.vjs-descriptions-button');
    if (className.classList.contains('checked')) {
        descriptions.classList.add('vjs-hidden');
    }
    else {
        descriptions.classList.remove('vjs-hidden');
    }
};

function setSubtitles(className) {
    const subtitles = document.querySelector('.vjs-subs-caps-button');
    if (className.classList.contains('checked')) {
        subtitles.classList.add('vjs-hidden');
    }
    else {
        subtitles.classList.remove('vjs-hidden');
    }
};

function setAudio(className) {
    const audio = document.querySelector('.vjs-audio-button');
    if (className.classList.contains('checked')) {
        audio.classList.add('vjs-hidden');
    }
    else {
        audio.classList.remove('vjs-hidden');
    }
};

function setPictureInPicture(className) {
    const picture = document.querySelector('.vjs-picture-in-picture-control');
    if (className.classList.contains('checked')) {
        picture.classList.add('vjs-hidden');
    }
    else {
        picture.classList.remove('vjs-hidden');
    }
};

function setRemainingTime(className) {
    const remainingTime = document.querySelector('.vjs-remaining-time');
    if (className.classList.contains('checked')) {
        remainingTime.style.display = 'contents';
    }
    else {
        remainingTime.style.display = 'none';
    }
};

function setSeekToLive(className) {
    const seekToLive = document.querySelector('.vjs-seek-to-live-control');
    if (className.classList.contains('checked')) {
        seekToLive.style.display = 'contents';
    }
    else {
        seekToLive.style.display = 'none';
    }
};

function setProgressBar(className) {
    const progressBar = document.querySelector('.vjs-progress-control');
    if (className.classList.contains('checked')) {
        progressBar.classList.add('vjs-hidden');
    }
    else {
        progressBar.classList.remove('vjs-hidden');
    }
};

function setDuration(className) {
    const duration = document.querySelector('.vjs-duration');
    if (!className.classList.contains('checked')) {
        duration.style.display = 'contents';
    }
    else {
        duration.style.display = 'none';
    }
};

function setCurrentTime(className) {
    const currentTime = document.querySelector('.vjs-current-time');
    console.log(currentTime);
    if (!className.classList.contains('checked')) {
        currentTime.style.display = 'contents';
    }
    else {
        currentTime.style.display = 'none';
    }
};

/* SetDuration, */