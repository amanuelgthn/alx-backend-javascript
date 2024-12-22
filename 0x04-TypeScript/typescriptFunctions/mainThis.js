#!/usr/bin/node

const deck = require('./this')

let cardPicker = deck.createCardPicker();
let pickerCard = cardPicker();

console.log(
    "card: " + pickerCard.card + " of " + pickerCard.suit);