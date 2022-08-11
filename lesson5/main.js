// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function s (a,b){
//     return a*b
// }
//
// console.log(s(7,7));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function s (r){
//     const p =3.14;
//     return p*r*2
// }
//
// console.log(s(3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function s(h,r) {
//     const p=3.14;
//     return 2*p*r*h
// }
//
// console.log(s(7, 9));
// - створити функцію яка приймає масив та виводить кожен його елемент

// let array=[44,99,777,'hello', 77];
// function arrElement(arr){
//     return arr
// }
//
// console.log(arrElement(array));

// let array=[44,99,777,'hello', 77];
// function arrElement(arr){
//     for (let arrElement1 of arr) {
//         console.log(arrElement1)
//     }
// }
//
// arrElement(array);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function creatText(text){
//     document.write(`${text}`)
// }
//
// creatText('hello world');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function createText(text) {
//     document.write(`<ul>`)
//     for (let i = 0; i < 3; i++) {
//
//         document.write(`<li>${text}</li>`)
//
//     }
//     document.write(`</ul>`)
//
// }
// createText('hello');



// function createText(text) {
//     document.write(`<ul>`)
//
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// createText('hello')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function create(text,num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
//
// create('Alright',5)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array=[55,90,'hello',true,'nice',50];
// function list(arr) {
//     document.write(`<ol>`)
//     for (let arrElement of arr) {
//         document.write(`<li>${arr}</li>`)
//     }
//     document.write(`</ol>`)
// }
//
// list(array);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {name: 'vasya', age: 31, id: 0},
//     {name: 'petya', age: 30, id: 1},
//     {name: 'kolya', age: 29, id: 2},
//     {name: 'olya', age: 28, id: 3},
//     {name: 'max', age: 30, id: 4},
//     {name: 'anya', age: 31, id: 5},
//     {name: 'oleg', age: 28, id: 6},
//     {name: 'andrey', age: 29, id: 7},
//     {name: 'masha', age: 30, id: 8},
//     {name: 'olya', age: 31, id: 9},
//     {name: 'max', age: 31, id: 10},
// ];
//
// function objectDiv(arr) {
//     for (let arrElement of arr) {
//         document.write(`<div>${arrElement.name} ${arrElement.age} ${arrElement.id}</div>`)
//     }
// }
// objectDiv(users)
// - створити функцію яка повертає найменьше число з масиву
// let arrayNum=[77,56,43,90,66,17]
// function findLess(arr){
//     let min=arr[0]
//     for (let arrElement of arr) {
//         if (arrElement< min) min=arrElement
//
//     }
//     return min
// }
//
// console.log(findLess(arrayNum));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arrayNum=[77,56,43,90,66,17];
// function countArr(arr) {
//     let sum;
//     for (let arrElement of arr) {
//         sum=arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]
//     }
//     return sum
// }
//
// console.log(countArr(arrayNum));
