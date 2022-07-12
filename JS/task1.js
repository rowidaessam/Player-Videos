// window.addEventListener('load', function () {
//     myvideo = this.document.getElementById('myvideo');
// });

// function playpausefun() {
//     if (myvideo.paused) {
//         myvideo.play();
//     } else {
//         myvideo.pause();
//     }
// }

// var elem = document.getElementsByClassName("myvideo");

// function toggleFullscreen() {
//     if (!elem.FullscreenElement) {
//         myvideo.requestFullscreen();
//     } else {

//     }
// }


window.addEventListener('load', function () {
    var vid = document.getElementsByTagName("video")[0];

    vid.onclick = function () {
        vid.innerText
        if (vid.paused) {
            vid.play();

        } else {
            vid.pause();

        }
    }
    vid.addEventListener('dblclick', function () {
        vid.requestFullscreen();
    })

    var videos = document.getElementsByClassName("videos");
    for (i = 0; i < videos.length; i++) {
        document.getElementsByClassName("videos")[i].addEventListener('click', change);

    }

    function change(e) {
        vid.src = `../Videos/${e.target.innerText}.mp4`;
    }
})