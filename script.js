// Javascript asoslari 
// Ma'lumot turlari 2 ta turga bo'linadi 1 chi turi primitiv va reference turlarga bo'linadi
// primitiv turlarga string, number, boolean, null va undefined lar kiradi 
let firstName = 'Abdulahad';
console.log(firstName); // bu data type string

let number = 10;
console.log(number); // bu data type number 

let isMarried = true; 
console.log(isMarried); // data type boolean 

let number1;
console.log(number1); // bu undefined

// let num2;
// console.log(num1); // bu null 

// bu primitiv turdagi ma'lumot turlari hisoblanadi


// bu reference type turlari bo'ladi ma'lumotlarni
// reference type turlarga : obyekt, massiv, functionlar kiradi 
let person = {
    firstName : 'Abdulahad',
    lastName : 'Musajonov',
    age : 19,
    skill : 'Developer and Businessman'
}
person.name = 'Mahdi' // bu obyekti xossalariga kiradi va bunaqa qilib iba yengi xossa ckiritishimizayam mumkin

console.log(person.name); // bu obyeklar

let color = ['oq' , 'qora' , 'qizil']; // bu massiv 
color[3] = 'yashil'; // massivda elementlarni biza oson qosholimiza bu holat dynamic bo'ladi. Boshqa dasturlash tillarida bu xato beradi
color[4] = 7; // javascriptda massivlada yana bitta narsa bu xar xil turdagi elementlar bitta massivda bo'lishi
console.log(color.length); // massivlani turi obyekt uni o'chami , unda turadigan ma'lumot turlari dynamic bo'lish va massiv elementlar to'plamidan tashkil topgani

// javascriptda funksiya deb natijani hisoblab beruvchi yoki biror bir ishni bajarib beruvchiga etiladi
// greet bu funksiyani nomi, name parametr , Abdulahad bu argument 
function greet(firstName, lastName) {
    console.log("Assalomu aleykum" , firstName, lastName); 
}
greet("Abdulahad" , "Musajonov"); // bu funksiyani chaqirish
greet("Abubakr" , "Davlatov");
greet("Bilol",) // buni 2 chi argumentiga hech nima yozilamadi va natijada konsolda undefined chiqarib berdi
// bu funksiya natijani chiqarib beradigan funksiya 
// xisoblab natijani chiqarib beradigan funksiya yozamiza 
function square(number) {
    return number * number;
}
console.log(square(25)); // bu funcsiyani soxranit qimase ishlamidi

function square1(number) {
    return number * number
}
let squareResult = square1(25);
console.log(squareResult); // tepadagi va mashnaqa ko'rinishda xisoblab beradigan funksiyalar yozse bo'ladi
// kotta loyihalar 100lab va 1000lab birga ishlidigan funksiyalardan iborat bo'ladi
// botta ma'lumot turlarini kordik




