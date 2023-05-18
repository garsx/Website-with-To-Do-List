const PSampleButton = document.querySelector('.button3');
const input = document.querySelector(".inputBar");
const addButton = document.querySelector('.addButton');
const animationArea = document.querySelector('.backgroundAnimation');
const tasksContainer = document.querySelector('.tasksContainer');
const inputContainer = document.querySelector('.inputContainer');
const toDoTitle = document.querySelector('.toDoTitle');
const bin = document.querySelector('.bin');
const navigationBarHeight = document.querySelector('.navigationBar').clientHeight;
const pointsQuantity = 25;
const intervalTime = 1000;

let pointsArray = [pointsQuantity];
let usedPointsArray = [pointsQuantity + 1];
let incrementation = 0;
let idPoint = 0;
let randomPoint, randomNumber;

let idTask = 0;
let tasksArray = [];
let tasksQuantity = 0;

document.addEventListener("DOMContentLoaded", () => {
  PSampleButton.style.transform = 'scale(1.4)';
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

// ----- TASKS METHODS -----

addButton.addEventListener("click", () => {
  let task = input.value.trim();
  if (input.value.length > 66) {
    alert("Your task is too long!")
  }
  else if (input.value.length != "") {
    tasksArray.push(new addTask(task));
    idTask++;
    tasksQuantity++;
    setInterval(realTimeUpdate, 1);
  }
});


class addTask {
  constructor(task)
  {
      this.newTask = document.createElement('li');
      this.newTask.innerHTML = task + `<div class='bin'> &#128465 </div>`;
      this.newTask.id = 'task' + idTask;
      this.newTask.classList.add('creating');
      this.newTask.style.display = 'block';
      tasksContainer.appendChild(this.newTask);
      this.createDeleteOption(task);
  }

  // GETTERS
  get position() {
    return this.checkPosition();
  }

  checkPosition() {
    let taskCords = getOffset(this.newTask)
    if (taskCords.top <= navigationBarHeight + 100) {
      let opacityValueForTopTasks = taskCords.top * 0.0053;
      this.newTask.style.opacity = parseFloat(opacityValueForTopTasks.toFixed(2));
    }

    else {
      this.newTask.style.opacity = 1;
    }
  }

  createDeleteOption() {
    const deleteButton = this.newTask.querySelector('.bin');
    deleteButton.addEventListener("click", () => {
      this.newTask.classList.add('deleting');
      setTimeout(() => {
        tasksContainer.removeChild(this.newTask);
        tasksArray.splice(tasksArray.indexOf(this), 1);
        tasksQuantity--;
      }, 300); 
    });
  }
}


realTimeUpdate = () => {
  let inputContainerOffset = getOffset(inputContainer);
  let toDoTitleOffset = getOffset(toDoTitle);

  if (toDoTitleOffset.top <= navigationBarHeight + 60) {
    let opacityValueForTitle = toDoTitleOffset.top * 0.003;
    toDoTitle.style.opacity = parseFloat(opacityValueForTitle.toFixed(2));
  }

  else {
    toDoTitle.style.opacity = 1;
  }

  if (inputContainerOffset.top <= navigationBarHeight + 80 )
  {
    let opacityValueForInput = inputContainerOffset.top * 0.003;
    inputContainer.style.opacity = parseFloat(opacityValueForInput.toFixed(2));
  }

  else {
    inputContainer.style.opacity = 1;
  }

  for (let j = 0; j < tasksQuantity; j++)
  {
    tasksArray[j].position;
  }
}

function getOffset(element) {
  let _y = 0;
  while(element &&  !isNaN(element.offsetTop)) {
        _y += element.offsetTop - element.scrollTop;
        element = element.offsetParent;
  }
  return { top: _y};
}