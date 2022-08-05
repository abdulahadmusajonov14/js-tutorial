// Javascript asoslari 
// Operatorlar torisida: operatorlar arifmetik, tayinlov, solishtiruv, mantiqiy,bitwise turlaga bo'linadi
// 1) Arifmetichiskiy operatori

let x = 7;
let y = 7;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y); // bu qoldiqi ko'rsatadigan operator
console.log(x ** y); // bu darajaga oshiradigan operator
// bula oddiy matemetik operatorlar

let incr = 99;
console.log(++incr); // bu inkrement 1 taga qoshadi
let decr = 101;
console.log(--decr); // bu dikrement 1 taga kamaytiradi
// biza (++) bulani o'zgaruvchidan oldin yozganimiza oldin 1taga ko'paytirib keyin keyin konsolega chiqaradi

// Tayinlov operatori bu (=) hisoblanadi 
let z = 1; // agar biza buni 1 taga kopaytirmoqchi bo'se x = x + 1; yoki x++ qilamiza 3 ta kopaytirmoqchi bo'se
z = z + 3;
z += 3;
console.log(z); 
let m = 5;
m *= 3; // m = m * 3 bilan bor xil narsa beradi
console.log(m);

// Solishtiruv va tayinlov operatorlari
let t = 1;
console.log(t > 0); // natijasi boolean chiqadi
// Solishtiruv operatorlariga (>; >= ; < ; < =) lar kiradi 
// tayinlov operatorlariga (==; ===;) lar kiradi. Farqi == bu faqat natijani tekshiradi, === bu esa ham natija ham typeni tekshiradi
// (!- unday emas digan operator) masalan x != 5; x 5 ga teng emas degani 

// Masalalar
//1 konsoleda qanaqa ishora qoyse true chiqadi 
let c = 10,
    v = 5;
console.log(c != v);
// javob 1. > 2. >= 3. != operatorlarini qoyse konsoleda javob true chiqadi 

// 2 Agar x = 5 bo'sa x != '5' natijasi konsoleda nima chiqadi 
let i = 5;
console.log(i!='5'); // buni javobi false berarkan chunki bu 2 tali barobar 2tali faqat qiymati tekshiradi 
// agar !=='5' bo'ganda true berardi 

// 3 "2" == "12" solishtiruvning natijasi qanaqa bo'ladi 
console.log("2" == "12"); // false beradi

/* Mantiqiy operatorlar 
 Mantiqiy operatorlardan berilgan shart yoki shartlar asosida qaror qabul asosida foydalanamiz
Js da 3 ta mantiqiy operatorlar bor : Bular (mantiqy(&& va) , mantiqiy (|| yoki) , (! emas) operatorlari) */

//1) mantiqiy (&& va)  operatori
console.log(true && true); // bu mantiqiy va operatori mantiqiy va operatori 2 ta holatda true bo'sa true qaytaradi
let isChicken = true;
let isDinner = false;
console.log(isChicken && isDinner); // 1 ta qiymat true bo'masa mantiqiy (&& va) operatori true qaytarmidi 
// 2 ta false bo'sayam (va) operatorida false chiqadi 
console.log(false && false); // konsoleda natija false berdi 
// Algoritm
let hour = 11;
let minute = 21;
let isOfficeOpen = (hour >= 9 && minute >= 0);
console.log(isOfficeOpen); 

let date = new Date();
let hour1 = date.getHours();
let minute1 = date.getMinutes();
console.log("Hour: " , hour1 , "Minute: " , minute1);
let isOfficeOpen1 = (hour1 >= 9 && minute1 >=0);
console.log(isOfficeOpen1);

// mantiqiy ( || yoki) operatori
console.log(true || false ); // operantlardan 1tasi bosayam true bo'sa true qaytaradi 
let unPotato = true,
    unSplash = false,
    unPatch = false;
console.log(unPotato || unSplash || unPatch); // 1ta true resultat true beradi 

// (! emas) operatori 0
let isGood = true;
let isBad = false;
console.log(!(isGood && isBad)); // natija true chiqadi 

let hour2 = 10;
let minute2 = 21;
let isOfficeOpen2 = (hour2 >= 9 && minute2 >=0);
let  isOfficeClosed = !isOfficeOpen2;
console.log('Ofis ochiq: ' , isOfficeOpen2);
console.log('Ofis yopiq: ' , isOfficeOpen2); 








