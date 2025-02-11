class Card {
    constructor(id, num, balance) {
        this.id = id;
        this.num = num;
        this.balance = balance;
    }

    print() {
        console.log(`${this.num}: ${this.balance}`);
    }

    static staticNonSecretMethod() {
        console.log('static non secret method');
        // this.#staticSecretMethod(); // not works
        Card.#staticSecretMethod();
    }

    static #staticSecretMethod() {
        console.log('static secret method');
    }

    nonSecretMethod() {
        console.log('non secret method');
        this.#secretMethod();
    }

    #secretMethod() {
        console.log('secret method');
    }
}

class DebitCard extends Card {
    static staticField = 'value';
    static staticMethod(instance) {
        // this -> DebitCard
        console.log(`from static method: ${this.staticField}`);
        // instance.#nonStaticSecretMethod();
        this.staticNonSecretMethod();
    }

    #secret = 42;

    constructor(id, num, balance, percent) {
        // console.log(super) -> super is syntax construct
        // 1. super() -> call supertype constructor
        // 2. super.property 
        super(id, num, balance);
        this.percent = percent;
    }

    method() {
        debugger;
        this.nonSecretMethod();
    }

    nonStaticMethod() {
        // DebitCard.staticMethod();
        // debugger;
        // this -> instance of DebitCard
        this.constructor.staticMethod(this);
    }

    #nonStaticSecretMethod() {
        console.log('non static secret method');
    }

    get secret() {
        return this.#secret;
    } 

    set secret(val) {
        this.#secret = val;
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
// DebitCard.staticField = 'value';
// DebitCard.staticMethod = function() {
//     console.log('static method');
// };

const card = new DebitCard(1, '**** 1234', 10_000, 3);
card.method();

debugger;
/*
{id, num, balance, [[Prototype]] -> { print(), constructor -> Card }}
*/