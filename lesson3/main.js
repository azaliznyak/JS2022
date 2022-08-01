// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x=-3
// if (x!==0){
//     console.log('True')
// }else {
//     console.log('False')
// }
//
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time=45;
// if (time>0 && time<=15){
//     console.log('first part')
// }else if (time>15 && time<=30){
//     console.log('second part')
// }else if (time>30 && time<=45){
//     console.log('third part')
// }else if (time>45 && time<60){
//     console.log('fourth part')
// }else {
//     console.log('??????')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day=19;
// if (day>0 && day<=10){
//     console.log('first part')
// }else if (day>10 && day<=20){
//     console.log('second part')
// }else if (day>20 && day<=31){
//     console.log('third part')
// }else {
//     console.log('?????')
// }
//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let days=6;
// switch (days){
//     case 1:
//         console.log('learning english');
//         break;
//     case 2:
//         console.log('learning french');
//         break;
//     case 3:
//         console.log('programing');
//         break;
//     case 4:
//         console.log('lecture, university assignment')
//         break;
//     case 5:
//         console.log('practice, studying')
//         break;
//     case 6:
//         console.log('meet friends')
//         break;
//     case 7:
//         console.log('practice, studying')
//         break;
//     default:
//         console.log('??????')
//
// }
//
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let a=55;
// let b=55;
// if (a>b && b<a){
//     console.log(a)
// }else if (a<b && b>a){
//     console.log(b)
// }else {
//     console.log('they are equal')
// }
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let x= ''|| 'default';
// console.log(x)