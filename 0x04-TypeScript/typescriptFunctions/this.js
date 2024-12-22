#!/usr/bin/node

const deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        return () => {
            let pickerCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickerCard / 13);

            return { suit: this.suits[pickedSuit], card: pickerCard % 13 };
        };
    }
}


module.exports = deck;