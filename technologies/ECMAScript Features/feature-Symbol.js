// add by yanyj 20180605 start

// Symbol可以通过Symbol() 方法创建，不能通过new来创建
let  mySymbol = Symbol();
console.log(mySymbol); // Symbol()

// 构造函数中可以带有描述性的字符串——只用来描述（控制台打印），无其他意义
let mySymbolWithDescription = Symbol('i have a description');
console.log(mySymbolWithDescription); //Symbol(i have a description)

// 每一个通过Symbol()构建的都是唯一的，哪怕描述一样
let mySymbol1 = Symbol();
let mySymbol2 = Symbol();
console.log(mySymbol1 == mySymbol2); // false
console.log(mySymbol1 === mySymbol2); // false

let mySymbol3 = Symbol('same description');
let mySymbol4 = Symbol('same description');
console.log(mySymbol3 == mySymbol4); // false
console.log(mySymbol3 === mySymbol4); // false

// 也可以通过Symbol.for(key) 来生成Symbol
let mySymbol5 = Symbol.for('mySymbol5');
console.log(mySymbol5); //Symbol(mySymbol5)

// 不过Symbol.for创建Symbol更像单例模式，如果之前已经创建了key的Symbol的话，则直接返回之前创建的
let mySymbol6 = Symbol.for('same');
let mySymbol7 = Symbol.for('same');
console.log(mySymbol6 == mySymbol7); // true
console.log(mySymbol6 === mySymbol7); // true

// Symbol可以作为对象的一个属性键值存在
let car = {height: 2};
let carSymbol = Symbol('it is a property key for car');
car[carSymbol] = 'this is a car';
console.log(car[carSymbol]); // this is a car

// 对于for in 、 Object.keys 和 Object.getOwnPropertyNames来说， Symbol类型的属性key是隐形的
let object = {a:1};
let mySymbol8 = Symbol();
object[mySymbol8] = 2;
console.log(object[mySymbol8]); // 2
console.log(Object.keys(object)); // ['a']
console.log(Object.getOwnPropertyNames(object)); // ['a']
for(var key in object) {
    console.log(key);
}
//a

// 可以通过Object.getOwnPropertySymbols获取
console.log(Object.getOwnPropertySymbols(object)); // [ Symbol() ]

//

// add by yanyj 20180605 end