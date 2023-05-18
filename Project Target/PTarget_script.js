const textArea = document.querySelector('.textArea');
const PTargetButton = document.querySelector('.button2');
const leftImage1 = document.querySelector('.leftImage1');
const leftImage2 = document.querySelector('.leftImage2');
const rightImage = document.querySelector('.rightImage');
const animationArea = document.querySelector('.backgroundAnimation');
const navigationBarHeight = document.querySelector('.navigationBar').clientHeight;
const pointsQuantity = 25;
const intervalTime = 1000;

let pointsArray = [pointsQuantity];
let usedPointsArray = [pointsQuantity + 1];
let incrementation = 0;
let idPoint = 0;
let randomPoint, randomNumber;

document.addEventListener("DOMContentLoaded", () => {
    PTargetButton.style.transform = 'scale(1.4)';
    for(let i = 0; i < pointsQuantity; i++) 
    {
        pointsArray.push(new generateAnimation());
        idPoint++;
    }

    setInterval(() => {
        randomPoint = Math.floor(Math.random() * pointsQuantity);
        for (let i = 0; i < pointsQuantity; i++)
        {
            if (usedPointsArray[i] != randomPoint)
            {
                usedPointsArray[incrementation] = randomPoint;
                pointsArray[randomPoint].makeResizingAnimation;
                incrementation++;
                break;
            }
        } 
    }, intervalTime);
  });

class generateAnimation {
    constructor()
    {
        this.newPoint = document.createElement('div');
        this.newPoint.setAttribute("class", "point");
        this.newPoint.id = "point" + idPoint;
        this.newPoint.style.top = Math.floor(Math.random() * 80) + "vh";
        this.newPoint.style.left = Math.floor(Math.random() * 80) + "vw";
        animationArea.appendChild(this.newPoint);
        this.newPoint.style.display = 'block';
    }
    // GETTERS
    get makeResizingAnimation() {
        return this.resizingEffect();
    }
    
    resizingEffect() {
        return this.newPoint.style.animationPlayState = 'running';
    }
}

setInterval(() => {
    let leftImage1Offset = getOffset(leftImage1);
    let leftImage2Offset = getOffset(leftImage2);
    let rightImageOffset = getOffset(rightImage);
  
    if (leftImage1Offset.top <= navigationBarHeight + 80) {
      let opacityValueForleftImage1 = leftImage1Offset.top * 0.005;
      leftImage1.style.opacity = parseFloat(opacityValueForleftImage1.toFixed(2));
    }
  
    else {
        leftImage1.style.opacity = 1;
    }

    if (leftImage2Offset.top <= navigationBarHeight + 80) {
        let opacityValueForleftImage2 = leftImage2Offset.top * 0.005;
        leftImage2.style.opacity = parseFloat(opacityValueForleftImage2.toFixed(2));
    }
    
    else {
        leftImage2.style.opacity = 1;
    }

    if (rightImageOffset.top <= navigationBarHeight + 80) {
        let opacityValueForrightImage = rightImageOffset.top * 0.005;
        rightImage.style.opacity = parseFloat(opacityValueForrightImage.toFixed(2));
    }
    
    else {
        rightImage.style.opacity = 1;
    }
}, 1);
  
  function getOffset(element) {
    let _y = 0;
    while(element &&  !isNaN(element.offsetTop)) {
          _y += element.offsetTop - element.scrollTop;
          element = element.offsetParent;
    }
    return { top: _y};
  }