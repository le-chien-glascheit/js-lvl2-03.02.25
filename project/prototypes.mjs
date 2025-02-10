class Card {
    constructor(id, num, balance) {
        this.id = id;
        this.num = num;
        this.balance = balance;
    }

    print() {
        console.log(`${this.num}: ${this.balance}`);
    }
}

class DebitCard extends Card {
    constructor(id, num, balance, percent) {
        // console.log(super) -> super is syntax construct
        // 1. super() -> call supertype constructor
        // 2. super.property 
        super(id, num, balance);
        this.percent = percent;
    }
}

// function Card(id, num, balance) {
//     this.id = id;
//     this.num = num;
//     this.balance = balance;
// }
// Card.prototype.print = function() {
//     console.log(`${this.num}: ${this.balance}`);
// };

// function DebitCard(id, num, balance, percent) {
//     // super()
//     Card.call(this, id, num, balance);
//     this.percent = percent;
// };
// // overwrite prototype
// DebitCard.prototype = Object.create(Card.prototype); // object[[Prototype]] = Card.prototype
// DebitCard.prototype.constructor = DebitCard;

const card = new DebitCard(1, '**** 1234', 10_000, 3);
debugger;
/*
{id, num, balance, [[Prototype]] -> { print(), constructor -> Card }}
*/