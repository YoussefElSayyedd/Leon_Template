let iconButton = document.querySelector('.icon');
let ulLinks = document.querySelector('.ul-links');
let feats = document.querySelectorAll('.feat');


// Here The Variables
let speedFade = 500;
document.onclick = function (t) { 
    if (t.target !== iconButton) {
        $(ulLinks).fadeOut(speedFade);
    }
} 
// Click On Links Button Event
iconButton.onclick = function () {
    // Display The Links
    if (ulLinks.style.display === 'block') {
        $(ulLinks).fadeOut(speedFade);
    } else { // Hidden The Links
        $(ulLinks).fadeIn(speedFade);
    }
}
// Active Features Function
function activeFeat(target) {
    let arrFeats = Array.from(feats);
    arrFeats.forEach((feat) => {
        feat.classList.remove("active");
        target.classList.add("active");
    });
}
