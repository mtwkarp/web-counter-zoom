function scaleContent() {
    const zoomLevel = getZoomLevel();
    const scaleFactor = 1 / zoomLevel; // Invert the zoom level to maintain content size
    var realInnerWidth = innerWidth * zoomLevel;

    // Apply scale and translation
    document.body.style.transform = `scale(${scaleFactor})`;
    document.body.style.width = realInnerWidth + 'px'

    // Calculate the real inner width
    console.log(realInnerWidth)
    // const realInnerWidth = window.innerWidth * window.devicePixelRatio;
    // const realInnerHeight = window.innerHeight * window.devicePixelRatio;
    console.log(window.outerWidth)
    // Calculate and apply the translation to keep the document.body centered
    // const translateX = (window.innerWidth * (zoomLevel - 1)) / 2;
    // const translateY = (window.innerHeight * (zoomLevel - 1)) / 2;
    // document.body.style.transform += ` translate(${translateX}px, ${translateY}px)`;
}

function getZoomLevel() {
    return window.outerWidth / window.innerWidth;
}

window.addEventListener('resize', scaleContent);
window.addEventListener('DOMContentLoaded', scaleContent);
