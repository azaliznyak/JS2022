// 1- Знайти та вивести довижину настипних стрінгових значень
// let hw='hello world';
//     let li='lorem ipsum';
//     let js='javascript is cool'
// console.log(hw.length);
//     console.log(li.length);
//     console.log(js.length)
//
// // 2- Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// console.log(hw.toUpperCase());
// console.log(li.toUpperCase());
// console.log(js.toUpperCase());
// //3 - Перевести до нижнього регістру настипні стрінгові значення
// let upHw='HELLO WORLD'; let upLi= 'LOREM IPSUM'; let upJs= 'JAVASCRIPT IS COOL'
// console.log(upHw.toLowerCase());
// console.log(upLi.toLowerCase());
// console.log(upJs.toLowerCase());
// 4- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string ';
// let clear=str.replaceAll(' ', '')
// console.log(clear);
//
//
//5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let split=str.split(' ')
// console.log(split)
//
//
//
//6 - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arr= [10,8,-7,55,987,-1011,0,1050,0];
// let map=arr.map(function (value) {
//     return value.toString()
// })
// console.log(map)

//7 - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
// let sort1=nums.sort(function (num1, num2) {
//     return num1-num2
// })
// console.log(sort1)
// let nums2 = [11,21,3];
// let sort2=nums2.sort( (num1,num2)=>  num2-num1)
// console.log(sort2)
//
// 8- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let sort=coursesAndDurationArray.sort(function (item1,item2) {
//     return item2.monthDuration -item1.monthDuration
// })
// console.log(sort)
// // -- відсортувати його за спаданням за monthDuration
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// // let filter=coursesAndDurationArray.filter(function (value) {
// //     if (value.monthDuration>5){
// //         return value
// //     }
// // })
// // console.log(filter)
//
// let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filter);
//
// 9 описати колоду карт
// - знайти піковий туз

//
//
//
// let obj={
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
// //

// let obj=[
//     {cardSuit: 'spade',
//         value:['6'-'10', 'ace','jack','king','queen','joker'],
//         spade:'black'
//
//     }
// ]

let obj=[
    {
        cardSuit: null,
        value:'joker',
        color:'red'

    },
    {
        cardSuit: null,
        value: 'joker',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'king',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'queen',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'jack',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'ace',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 10,
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 9,
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 8,
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 7,
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 6,
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'ace',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: "king",
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'queen',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'jack',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 10,
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 9,
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 8,
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 7,
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 6,
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: 'ace',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'king',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'queen',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'jack',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 10,
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 9,
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 8,
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 7,
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 6,
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'ace',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'king',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'queen',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'jack',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 10,
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 9,
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 8,
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 7,
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 6,
        color: 'red'
    }

]

// // - знайти піковий туз
// let find=obj.find(function (value) {
//     if (value.cardSuit==='spade' && value.value==='ace')
//         return value
// })
// console.log(find)
// // - всі шістки
// let filter=obj.filter(value => value.value===6);
// console.log(filter)
// // - всі червоні карти
// let filter2=obj.filter(value => value.color==='red')
// console.log(filter2)
// // - всі буби
// let filter3=obj.filter(value => value.cardSuit==='diamond')
// console.log(filter3);
// // - всі трефи від 9 та більше
// let filter4=obj.filter(value =>value.cardSuit==='clubs'&& value.value>=9 || typeof value.value==='string' && value.cardSuit==='clubs');
// console.log(filter4)
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce=obj.reduce(function (accumulator,object) {
    if (object.cardSuit==='spade'){
        accumulator.spades.push(object)
    }else if (object.cardSuit==='diamond'){
        accumulator.diamonds.push(object)
    }else if (object.cardSuit==='heart'){
        accumulator.hearts.push(object)
    }else  if (object.cardSuit==='clubs'){
        accumulator.clubs.push(object)
    }
    return accumulator
},{spades:[],diamonds:[],hearts:[],clubs:[]})
console.log(reduce);
