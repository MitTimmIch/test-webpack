"use strict";

export function create (defaultValues) {
    const  {
        tag = 'div',
        text = '',
        classs = [],
    } = defaultValues;
    let element = document.createElement(tag);
    element.textContent = text;

    if (classs.length > 0) {
        element.classList.add(...classs.split(' '));
      }

    return element;
} 


export const header = create({
    tag : 'header',
    classs : 'header'
})

const headerTitle = create({
    tag : 'h1',
    text : 'Lets play!',
    classs : 'header-title'
})
header.append(headerTitle);

export const gameBoard = create({
    tag : 'section',
    classs : 'game-board'
});

export const keyBoardDiv = create({
    tag : 'div',
    classs : 'hidden'
});

export const numBoardDiv = create({
    tag : 'div',
    classs : 'hidden'
});
gameBoard.append(keyBoardDiv, numBoardDiv)

export const setingsBtnDiv = create({
    tag : 'div',
    classs : 'settings-btn'
});
gameBoard.append(setingsBtnDiv);

export const startBtnDiv = create({
    tag : 'div',
    classs : 'start-btn-block'
});

export const startGameBtn = create({
    tag : 'button',
    classs : 'start-game-btn',
    text: 'Start game'
});
startBtnDiv.append(startGameBtn);

export const levelsBtnBlock = create({
    tag : 'div',
    classs : 'levels-btn-block'
});

setingsBtnDiv.append(startBtnDiv, levelsBtnBlock);
const levels = ['easy', 'medium', 'hard']
function createLevelsBtn (countBtn, nameLavels) {
    for(let i = 0; i<countBtn; i++){
        var levelBtn = create ({
            tag : 'button',
            classs : `level-btn ${nameLavels[i]}`,
            text: nameLavels[i].toUpperCase()
        });
        
        levelsBtnBlock.append(levelBtn);
        
    }
    
}

createLevelsBtn(3, levels);