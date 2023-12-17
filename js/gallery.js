



let dil = false;
let state = false;

function clrChang(value) {
    if (dil == false) {
        value.src = '../logo/red-hert.png';
        dil = true;
    } else {
        value.src = '../logo/heart.png';
        dil = false;
    }
}

function saved(value) {
    if (state == false) {
        value.src = '../logo/bookmark-black.png';
        state = true;
    } else {
        value.src = '../logo/bookmark-white.png';
        state = false;
    }
}
