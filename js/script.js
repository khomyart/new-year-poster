const   welcomingWindow = document.getElementsByClassName('welcoming-window')[0];
const   config = {
            imageChangingTime: 10000, //ms
            images: [
                '/img/night_city.jpg',
                '/img/night_city_2.jpg',
                '/img/night_city_3.jpg'
            ],
            imageFaderStep: 0.01
        }

let     i = 1;

setInterval(()=>{
    if (i >= config.images.length) i = 0;
    let previousImage = document.getElementsByClassName('welcoming-window-image')[0];
    let newImage = welcomingWindow.appendChild(document.createElement('img'));
    setTimeout(()=>{
        newImage.setAttribute('src', config.images[i]);
        newImage.className = 'welcoming-window-image';
        i = i + 1;
        newImage.style.zIndex = -2;
    },10)

    currentOpacity = 1;
    imageFader = setInterval(()=>{
        currentOpacity = currentOpacity - config.imageFaderStep;
        previousImage.style.opacity = currentOpacity;
        
        if (currentOpacity <= config.imageFaderStep) {
            previousImage.remove();
            newImage.style.zIndex = -1;
            clearInterval(imageFader);
        }
    }, 20)

}, config.imageChangingTime);

