import { alphabet, numberArray } from "./create-keybords.js";
import { keyBoardDiv, numBoardDiv } from "./create-elements.js";
import { clickLvlBtn } from "./event-handlers.js";


const allGameKeys = document.querySelectorAll('.key-button');
    console.log('Theare all game keys',allGameKeys)


clickLvlBtn();

export let pressKeys = [];

function getRandomIndex(array, count) {
    const resultArray = [];
    for (let i = 0; i < count; i++){
        const randomIndex = Math.floor(Math.random() * count);
        console.log('Random index:', randomIndex);
        resultArray.push(array[randomIndex]);
        console.log('Result array:', resultArray);
    }
    
    return resultArray;
}

const randomElement = getRandomIndex(numberArray, 3);
console.log('Random Element:', randomElement);

export function checkEqual(randomchar, userInput) {
   if (userInput.length == randomElement.length){
    for (let i = 0; i < randomchar.length; i++) {
        if (randomchar[i] === userInput[i]) {
            console.log('Correct at index', i);
        } else {
            console.log('Error at index', i);
        }
        highLit(randomElement, allGameKeys, pressKeys)
    }
    return true;
   }
    
}

export function keyLogger(inputArray) {
    document.addEventListener('keydown', (event) => {
        inputArray.push(event.key.toUpperCase());
        console.log('User input:', inputArray);
        checkEqual(randomElement, inputArray);
    });
    return inputArray;
}
keyLogger(pressKeys);



function highLit(input, array) {
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < array.length; j++) {
            const buttonText = array[j].textContent.trim(); // Извлекаем текст кнопки
            if (input[i] === buttonText) {
                array[j].classList.add('active'); // Добавляем класс
            }
        }
    }
    return array;
}

