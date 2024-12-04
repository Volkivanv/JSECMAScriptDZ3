class Employee{
    constructor(inName){
        this.name = inName;
    }
    displayInfo = () => {
        return `Name: ${this.name}`;
    }
}

class Manager extends Employee{
    constructor(inName, inDepartment){
        super(inName)
        this.department = inDepartment;
    }
    displayInfo = () => {
        return  `Name: ${this.name}, Department: ${this.department}`;
    }
}

const employee = new Employee("John Smith");
console.log(employee.displayInfo());
// Вывод: John Smith
const manager = new Manager("Jane Doe", "Sales");
console.log(manager.displayInfo());
// Вывод: Name: Jane Doe, Department: Sales

class Product{
    constructor(inName, inPrice){
        this.name = inName;
        this.price = inPrice;
    }
}

class Order{
    
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

const myCart = new Order('George');
myCart.addItem(sigi);
myCart.addItem(milk, 2);
myCart.addItem(apple, 5);

console.log(myCart.checkout());
console.log(myCart);