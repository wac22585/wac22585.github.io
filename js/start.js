var imageOffset = 0

window.onload = async function() {
    for(i = 0; i <= screen.width; i++) {
        await sleep(0.5);
        imageOffset += 1
        document.getElementById("pikachuRunning").style.left = imageOffset + "px";
        console.log(imageOffset);
    }
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}