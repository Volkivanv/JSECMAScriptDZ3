const obj1 = {name:'obj1'}

const obj2 ={name:'obj2'}

const obj3 ={name:'obj3'}
const obj4 = {name:'obj4'}

Object.setPrototypeOf(obj2, obj1);
Object.setPrototypeOf(obj3, obj2);
Object.setPrototypeOf(obj4, obj3);

console.log(Object.getPrototypeOf(obj1));


function getPrototypeChain(o) {
    let res = [];
    let proto = o;
    while(proto){
        res.push(proto.name);
        proto = Object.getPrototypeOf(proto);
    }
    return res;
}

const protoes = getPrototypeChain(obj4);
console.log(protoes);

class Animal {
    constructor(inName){
        this.name = inName;
    }
    speak = () => {
        return 'speak something'
    }
}

const animal = new Animal;
console.log(animal.speak());

class Dog extends Animal{
    constructor(inName, inBreed){
        super(inName);
        this.breed = inBreed;
    }
    fetch = () => {
        return `Собака ${this.name} породы ${this.breed} принесла мяч`;
    }
}

const doggy = new Dog('Барсик', 'Немецкая овчарка');
console.log(doggy.fetch());

class Product{
    constructor(inName, inPrice){
        this.name = inName;
        this.price = inPrice;
    }
}

class ShoppingCart{
    
    constructor(inCustomerName, inInitialTotalCost = 0){
        this.goods = [];
        this.customerName = inCustomerName;
        this.initialTotalCost = inInitialTotalCost;
    }
    addItem = (inProduct, inQuantity = 1) => {
        const o = {};
        o.product = inProduct;
        o.quantity = inQuantity;
        this.goods.push(o);
    }
    getCurrentTotalCost = () => {
        let sum = 0;
        this.goods.forEach(o => {
            sum += o.product.price * o.quantity;
        });

        
        return sum;
    }
    checkout = () => {
        return `Заказ оформлен для ${this.customerName}. Общая стоимость заказа: ${this.getCurrentTotalCost()} рублей. Спасибо за покупку!`;
    }
}

const sigi = new Product('Winston', 100);
const milk = new Product('Lebedan', 90);
const apple = new Product('Apport', 20);

const myCart = new ShoppingCart('George');
myCart.addItem(sigi);
myCart.addItem(milk, 2);
myCart.addItem(apple, 5);

console.log(myCart.checkout());
console.log(myCart);