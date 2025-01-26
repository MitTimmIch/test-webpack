"use strict";

import {  main } from "./index.js";

import { create, gameBoard, keyBoardDiv, numBoardDiv } from "./create-elements.js";

export const alphabet = ['A', 'B' ,'C', 'D' ,'E' , 'F',  'G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export const numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

export function createKeyboard (){
    for (let i = 0; i < alphabet.length; i++){
        let keyButton = create({
            tag : "button",
            text : alphabet[i],
            classs : 'key-button letter-key'
        })
        keyBoardDiv.append(keyButton);
        
    }
        
}

export function createNumboard (){
    for (let i = 0; i < numberArray.length; i++){
        let keyButton = create({
            tag : "button",
            text : numberArray[i],
            classs : 'key-button number-key'
        })
        numBoardDiv.append(keyButton);
        
    }
        
}


