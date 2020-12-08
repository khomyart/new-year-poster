const   welcomingWindow = document.getElementsByClassName('welcoming-window')[0];
const   config = {
            imageChangingTime: 10000, //ms
            images: [
                '/img/welcoming_page/02.jpg',
                '/img/welcoming_page/03.jpg',
                '/img/welcoming_page/04.jpg',
                '/img/welcoming_page/05.jpg',
                '/img/welcoming_page/08.jpg',
                '/img/welcoming_page/09.jpg',
                '/img/welcoming_page/10.jpg',
                '/img/welcoming_page/11.jpg',
                '/img/welcoming_page/14.jpg',
                '/img/welcoming_page/15.jpg',
                '/img/welcoming_page/16.jpg',
                '/img/welcoming_page/17.jpg',
                '/img/welcoming_page/18.jpg',
                '/img/welcoming_page/19.jpg',
                '/img/welcoming_page/20.jpg',
                '/img/welcoming_page/21.jpg',
                '/img/welcoming_page/22.jpg',
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

