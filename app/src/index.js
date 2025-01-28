"use strict";

import "./style/main.css"

import "../public/index.html"

import { createKeyboard, createNumboard } from "./create-keybords.js";


import { create, header, gameBoard } from "./create-elements.js";





export const main = create({
    tag : "main",
    classs : 'main'
});



createKeyboard();

createNumboard();

document.body.append(header, main);
main.append(gameBoard);


const div = document.createElement('div')

document.body.append(div)