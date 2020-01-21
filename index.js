//
// Blackjack Game
// In this piece of code, we can use loops to create our deck of cards
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];
let deck = [];

// Loop through the suits
for (let i = 0; i < suits.length; i++) {
    // Loop through the values for each suit
    for (let j = 0; j < values.length; j++) {
        deck.push(values[j] + ' of ' + suits[i] );
    }
}

// Loop out the deck values
for (let i = 0; i < deck.length; i++) {
    console.log(deck[i]); // Log out the values
}

let playerCards = [ deck[0], deck[2] ];  

console.log("Welcome to Blackjack!");
console.log("You are dealt: ");
console.log("  " + playerCards[0]);
console.log("  " + playerCards[1]);   