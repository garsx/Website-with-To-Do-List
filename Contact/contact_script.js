const contactButton = document.querySelector('.button4');
const animationArea = document.querySelector('.backgroundAnimation');
const pointsQuantity = 25;
const intervalTime = 1000;

let pointsArray = [pointsQuantity];
let usedPointsArray = [pointsQuantity + 1];
let incrementation = 0;
let idPoint = 0;
let randomPoint, randomNumber;

document.addEventListener("DOMContentLoaded", () => {
    contactButton.style.transform = 'scale(1.4)';
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
        this.newPoint.style.display = 'block';
        animationArea.appendChild(this.newPoint);
    }
    // GETTERS
    get makeResizingAnimation() {
        return this.resizingEffect();
    }
    
    resizingEffect() {
        return this.newPoint.style.animationPlayState = 'running';
    }
}
