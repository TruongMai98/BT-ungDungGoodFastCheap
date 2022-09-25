function switchGood() {
    let isGood = document.getElementById("g").checked;
    let isCheap = document.getElementById("c").checked;
    let isFast = document.getElementById("f").checked;
    console.log(isGood, isCheap, isFast);
    if (isCheap && isFast) {
        if (Math.random() < 0.5) {
            document.getElementById("c").checked = false;
        } else {
            document.getElementById("f").checked = false;
        }
    }
}

function switchCheap() {
    let isGood = document.getElementById("g").checked;
    let isCheap = document.getElementById("c").checked;
    let isFast = document.getElementById("f").checked;
    if (isGood && isFast) {
        if (Math.random() < 0.5) {
            document.getElementById("g").checked = false
        } else {
            document.getElementById("f").checked = false
        }
    }
}

function switchFast() {
    let isGood = document.getElementById("g").checked;
    let isCheap = document.getElementById("c").checked;
    let isFast = document.getElementById("f").checked;
    if (isGood && isCheap) {
        if (Math.random() < 0.5) {
            document.getElementById("c").checked = false
        } else {
            document.getElementById("f").checked = false
        }
    }
}