import { keyBoardDiv, numBoardDiv } from "./create-elements.js";


export const lvlBtns = document.querySelectorAll('.level-btn, .easy, .medium, .hard');
console.log(lvlBtns);

export const currentlvl = {
    lvlEasy : false,
    lvlMedium : false,
    lvlHard : false
};

console.log('currentlvl initial state',currentlvl);



export function toggleLvl (event, lvlv) {
    const targetElement = event.target;
    if(targetElement.classList.contains('easy')){
        numBoardDiv.classList.remove('hidden')
        numBoardDiv.classList.add('num-board')
        keyBoardDiv.classList.remove('key-board')
        keyBoardDiv.classList.add('hidden')
        currentlvl.lvlEasy = true;
        currentlvl.lvlMedium = false;
        currentlvl.lvlHard = false;
        console.log('currentlvl easy',currentlvl);
    }
    else if(targetElement.classList.contains('medium')){
        keyBoardDiv.classList.remove('hidden')
        keyBoardDiv.classList.add('key-board')
        numBoardDiv.classList.remove('num-board')
        numBoardDiv.classList.add('hidden')
        currentlvl.lvlEasy = false;
        currentlvl.lvlMedium = true;
        currentlvl.lvlHard = false;
        console.log('currentlvl medium',currentlvl);
    }
    else if(targetElement.classList.contains('hard')){
        keyBoardDiv.classList.remove('hidden')
        keyBoardDiv.classList.add('key-board')
        numBoardDiv.classList.remove('hidden')
        numBoardDiv.classList.add('num-board')
        currentlvl.lvlEasy = false;
        currentlvl.lvlMedium = false;
        currentlvl.lvlHard = true;
        console.log('currentlvl hard',currentlvl);
    }

    return currentlvl;
}



export function clickLvlBtn (){
    lvlBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => toggleLvl(event, currentlvl));
    });
    
}



