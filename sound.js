let bgm = new Audio('bgm.mp3');
bgm.volume = 0.1;
let bgm_on = false;
function sound() {
    if (bgm_on) {
        bgm_on = false;
        bgm.pause();
    } else {
        bgm_on = true;
        bgm.play();
    }
}