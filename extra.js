// 1.Funksiya yasang, ushbu funksiya 2ta argument qabul qilsin
// va ularning yig’indisini qaytarib bersin.

// function plus(a, b) {
//   return a + b;
// }

// console.log(plus(2, 4));

// 2.Minutlarni butun son sifatida qabul qilib, uni sekundlarga
// o’girib beradigan funksiya yasang.

// function toSekunds(minutes) {
//   return minutes * 60;
// }

// console.log(toSekunds(3));

// 3.Funksiya butun son qabul qiladi. Funksiya ushbu butun
// sondan keyingi sonni qaytarsin.

// function nextNumber(number) {
//   return number + 1;
// }

// console.log(nextNumber(4));

// 4.Funskiya uchburchakning asosi va balandligini qabul qiladi.
// Funksiya uchburchakning yuzini hisoblab qaytarsin. Uchburchak yuzini topish formulasi: S = (asos * balandlik) / 2

// function uchburchakYuzi(asos, balandlik){
//   return asos*balandlik/2
// }

// console.log(uchburchakYuzi(7,8));

// 5.Funksiya yoshni yil ko’rinishida qabul qiladi. ushbu funksiya
// yoshni kunlarda hisoblab natijani qaytarsin. Bir yil 365 kun deb
// oling.

// function ageToDays(age) {
//   return age * 365;
// }

// console.log(ageToDays(16));

// 6.Quyidagi namunalarga muvofiq ravishda funksiyani tana
// qismini yozing.

// kub(3) => 27
// kub(5) => 125
// kub(10) => 1000

// function kub(number) {
//   return number ** 3;
// }

// console.log(kub(10));

// 7.Massivni ichidan birinchi elementini qaytaradigan funksiya
// yasang.

// function firstELement(arr) {
//   return arr[0];
// }

// console.log(firstELement([2, 3, 4, 5]));

// 8.Funksiya 2ta argument qabul qilsin. Ushbu funksiya birinchi
// qiymatning ikkinchi qiymat bilan ko’paytmasini qaytarsin.

// function multiplication(a, b) {
//   return a * b;
// }

// console.log(multiplication(4, 5));

// 9.Soat ko’rinishida qiymat kiritilsa, sekundlarda qaytaradigan
// funksiya yasang.

// function hourToSekunds(hour) {
//   return hour * 3600;
// }

// console.log(hourToSekunds(4));

// 10.Uchburchakning uchinchi tomonining eng uzun qiymatini
// qaytaradigan funksiya yasang.
// Formula: Eng uzun uchinchi tomon = (tomon1 + tomon2) - 1

// function uchinchiTomon(tomon1, tomon2) {
//   return tomon1 + tomon2 - 1;
// }

// console.log(uchinchiTomon(7, 8));

// 11.Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni birinchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan
// funksiya yasang.

// function qoldiq(son1, son2) {
//   return son1 % son2;
// }

// console.log(qoldiq(5, 4));

// 12.Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab
// qaytaradigan funksiya yasang. Formula S = bo’yi * eni

// function tortburchakYuzi(boyi, eni) {
//   return boyi * eni;
// }

// console.log(tortburchakYuzi(7, 8));

// 13.Funksiya “a” argument sifatida string ma’lumot qabul qiladi.
// ushbu funksiya “Something” stringiga ” ” bo’sh joy va “a”
// stringini birlashtirib qaytarsin.

// function stringQoshish(str) {
//   return `something ${str}`;
// }

// console.log(stringQoshish("is better than nothing"));

// 14.Quyidagi namunalarga qaragan holatda funksiya yasang.

// Namuna:
// kvadrat(5) => 25
// kvadrat(9) => 81
// kvadrat(100) => 10000

// function kvadrat(number) {
//   return number ** 2;
// }

// console.log(kvadrat(9));

// 15.Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik
// yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’on.

// function isZero(number) {
//   if (number <= 0) {
//     return "rost";
//   } else {
//     return "yolg'on";
//   }
// }

// console.log(isZero(0));

// 16.Funksiya ko’p burchakli shaklning burchaklar sonini qabul
// qiladi. Natijada funksiya ushbu shaklning ichki burchaklar
// yig’indisini qaytarsin. Formula (n - 2) x 180

// function ichkiBurchaklar(n) {
//   return (n - 2) * 180;
// }

// console.log(ichkiBurchaklar(5));

// 17.Basketbol o’yinida ikki ochkolik va uch ochkolik gollar mavjud. Agar funksiya 1-argument sifatida ikki ochkolik gollar
// sonini va 2-argument sifatida uch ochkolik gollar sonini qabul
// qilsa, jamoaning jami ochkosini qaytaradigan funksiya yasang.

// function scored(twoPoint, threePoint) {
//   return twoPoint * 2 + threePoint * 3;
// }

// console.log(scored(5, 7));

// 18.Quyidagi namunalarni kuzatgan holda unga muvofiq
// funksiya yasang.

// Namuna:
// nameString("Mubashir") => "MubashirEdabit"
// nameString("Matt") => "MattEdabit"
// nameString("javaScript") => "javaScriptEdabit"

// function edabit(str) {
//   return `${str}Edabit`;
// }

// console.log(edabit("Mubashir"));

// 19.Ikkita son kiritilsa, agar ularning yig’indisi 100dan kichkina
// bo’lsa rost, katta bo’lsa yolg’on qiymat qaytaradigan funksiya
// yasang.

// function add(a, b) {
//   if (a + b < 100) {
//     return "rost";
//   } else {
//     return "yolg'on";
//   }
// }

// console.log(add(34, 56));

// 20.Quyidagi namunalarni kuzatgan holda unga muvofiq keladigan funksiya yasang.
// Namuna:

// printArray(1) => [1]
// printArray(3) => [1, 2, 3]
// printArray(6) => [1, 2, 3, 4, 5, 6]

// function until(number) {
//   let r = [];
//   for (let i = 1; i <= number; i++) {
//     r = r + i;
//   }
//   return r;
// }

// console.log(until(6));

// 21.Fermada turli xildagi hayvonlar mavjud. Shunday funksiya
// yasangki, ushbu funksiya jami fermadagi hayvonlar oyoqlari
// nechta ekanligini hisoblab qaytarsin. Bunda funksiya birinchi
// argument sifatida tovuqlar sonini, ikkinchi argument sifatida
// qo’ylarni va uchinchi argument sifatida sigirlarning sonini
// qabul qiladi.

// function oyoqlar(tovuq, qoy, sigir) {
//   return tovuq * 2 + qoy * 4 + sigir * 4;
// }

// console.log(oyoqlar(2, 3, 4));

// 22.Javascriptda “&&” matiqiy operatori mavjud. Ushbu operator ikkita mantiqiy ifoda qabul qiladi. Quyidagi namunaga
// muvofiq keladigan funskiya yasang. Ushbu operatordan foydalangan holda!

// Namuna:
// and(true, false) => false
// and(true, true) => true
// and(false, true) => false
// and(false, false) => false

// function and(a, b) {
//   return a && b;
// }

// console.log(and(true, false));

// 23.Funksiya 2ta son qiymat qabul qiladi. Agar 1-son 2-songa
// teng bo’lsa rost, aks holda yolg’on qiymat qaytsin. Bunda ikkala
// qiymatning ma’lumot turi bir xil bo’lsin.

// function tengMi(x, y) {
//   if (x != y) {
//     return "yol'gon";
//   } else {
//     return "rost";
//   }
// }

// console.log(tengMi(2, 2));

// 24.Futbolda ochkoni hisoblaydigan funksiya yasang. Bunda
// funksiya yutishlar soni, duranglar soni va mag’lubiyatlar sonini
// qabul qiladi. 1ta yutish = 3 ochko, 1ta durang = 1 ochko, 1ta
// mag’lubiyat = 0 ochko hisoblanadi.

// function futbolOchko(yutishlar, duranglar, maglubiyatlar) {
//   return yutishlar * 3 + duranglar * 1 + maglubiyatlar * 0;
// }

// console.log(futbolOchko(3, 4, 2));

// 25.Funskiya soatlar va minutlarni argument sifatida qabul
// qiladi. Ushbu funkisya soatlar va minutlarni sekundga o’girib
// ularning yig’indisini qaytarsin.

// function sekundlar(soat, minut) {
//   return soat * 3600 + minut * 60;
// }

// console.log(sekundlar(1, 3));

// 26.Quyidagi namunalarni kuzatgan holda funksiya yasang.

// Namuna:
// fun(4) => false
// fun(9) => false
// fun(7) => true

// function prime(number) {
//   if (number % 2 != 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(prime(7));

// 27.Funskiay 2ta istalgan turdagi qiymatlar qabul qiladi. Agar
// ushbu 2ta qiymat ham qiymat jihatidan ham ma’lumot turi
// jihatidan teng bo’lsa rost, aks holda funkisya yolg’on qiymat
// qaytarsin.

// function tengMi(x, y) {
//   if (x == y && x === y) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(tengMi(1, true));

// 28.Funksiya boolean qiymat qabul qiladi. Ushbu funksiya
// boolean qiymatni stringga o’girib qaytarib bersin.

// function booleanToString(bool) {
//   return `"${bool}"`;
// }

// console.log(booleanToString(true));

// 29.Arrow funksiyasini yarating ushbu funksiya shunchaki
// berilgan qiymatni qaytarsin.

// const arrow = (value) => value;

// console.log(arrow("3"));

// 30.Framelar sonini hisoblaydigan funksiya yarating. Frame bu
// 1 sekundda necha marta ko’rinishlar soni aylanishi. Funksiya
// minutlar va 1 sekundda nechta framelar soni aylanishini argument sifatida qabul qiladi. Funksiya jami framelar sonini
// qaytarsin.

// function frameSoni(minut, frame) {
//   return minut * 60 * frame;
// }

// console.log(frameSoni(10, 1));

// 31.Oddiy matematik amallar ketma-ketligi string ko’rinishida
// funksiyaga argument sifatida beriladi. Ushbu funksiya matematik ifodani bajarib natijani qaytarsin.

// function calc(str) {
//   return eval(str);
// }

// console.log(calc("23+4"));

// 32.Shunday funksiya yasangki, unda 2ta butun son argument
// qilib beriladi. Agar ushbu sonlardan birontasi 10ga teng bo’lsa
// yoki ularning yig’indisi 10ga teng bo’lsa funksiya rost qiymat
// qaytaradi. Aks hold yolg’on.

// function teng10(a, b) {
//   if (a + b == 10 || a == 10 || b == 10) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(teng10(9, 10));
// console.log(teng10(9, 9));
// console.log(teng10(1, 9));

// 33.Mashina kilometriga 10litr benzin ichadi. Mashina doim
// yo’lga chiqishdan oldin kamida 100litr benzin bilan chiqadi.
// Agar masofa funksiyaga argument sifatida berilsa, ushbu masofaga chiqish uchun Mashina necha litr benzin bilan chiqishi
// keraglini funksiya qaytarib bersin.

// function litrMasofa(km) {
//   return km * 10;
// }

// console.log(litrMasofa(23.5));

// 34.Quyidagi namunaga nazar tashlagan holda funksiya yasang.

// Namuna:
// fun(3, 7) => 7
// fun(-1, 0) => 0
// fun(1000, 400) => 1000

// function isBig(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(isBig(1000, 4000));

// 35.Funksiya 2ta argument berilsa, funksiya anashu 2ta argumentdan iborat massiv qaytarsin.

// function arr(x, y) {
//   return [x, y];
// }

// console.log(arr(2, 3));

// 36.Funksiyaga 2ta argument sifatida string ko’rinishidagi  ma’lumotlar beriladi. Agar ushbu
// ikkala stringdagi belgilar soni bir birinikiga teng bo’lsa funksiya rost qiymat qaytarsin, aks hold  yolg’on.

// function tengString(a, b) {
//   if (a.length == b.length) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(tengString("AB", "CD"));

// 37.Shunday funksiya yasangki, unga string argument qilib
// beriladi, agar ushbu string bo’sh bo’lsa funksiya true qaytaradi,
// aks holda false.

// function boshStr(str) {
//   if (str == "") {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(boshStr(""));

// 38.Shunday funksiya yasang.Unda butun son argument qilib
// beriladi. Agar ushbu butun son 5ga bo’linsa, funksiya true
// qaytarsin, aks holda false.

// function bolinsin5(son) {
//   if (son % 5 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(bolinsin5(5));

// 39.Shunday funksiya yasang.Unda butun son argument qilib
// beriladi. Agar ushbu butun son 100ga bo’linsa, funksiya true
// qaytarsin, aks holda false.

// function bolinsin100(son) {
//   if (son % 100 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(bolinsin100(1000));

// 40.Shunday funksiya yasangki, ushbu funksiya stringni ichidanechta belgi
//  borligini aytsin. Bunda length propertisidan foydalanmang va rekursiv funksiya ishlating.

// function uzunlik(str) {
//   if (str === "") {
//     return 0;
//   }
//   return 1 + uzunlik(str.slice(1));
// }
// console.log(uzunlik("apple"));

// 41.Funksiya 2ta argument qabul qiladi. Birinchi argument
// ikkinchi argumentdan katta emas. Agar birinchi argumentni
// ikkinchisiga bo’linsa, funksiya true qaytaradi aks holda false

// function bolinsin(x, y) {
//   if (x < y) {
//     return false;
//   } else if (x % y == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(bolinsin(98, 7));
// console.log(bolinsin(85, 4));

// 42.Funksiyaga raqam string ko’rinishida berilsa, funksiya ushbu
// ma’lumotni yana raqam ma’lumot turi ko’rinishida qaytarib
// bersin.

// function raqam(str) {
//   return +str;
// }
// console.log(raqam("6"));

// 43.To’rtburchakning yuzini hisoblaydigan funksiya yasang.
// Bunda funksiyaga to’rtburchakning(ya’ni to’g’ri turtburchak)
// tomonlari beriladi. Funksiya uning yuzini qaytarishi kerak,
// agar tomonlar xato kiritilgan bo’lsa funksiya -1 qaytarsin.

// function tortYuzi(a, b) {
//   if (a < 0 || b < 0) {
//     return -1;
//   } else {
//     return a * b;
//   }
// }
// console.log(tortYuzi(-1, 11));

// 44.Funksiyaga ism va familiya argument qilib berilsa, funksiya
// “ism, familiya” formatdagi string qaytarsin.

// function ismFam(ism, familiya) {
//   return `"${ism}, ${familiya}"`;
// }
// console.log(ismFam("John", "Doe"));

// 45.Quyidaga namunani kuzatgan holda funksiya yasang.
// Namuna:

// bug(true) => "sad days"
// bug(false) => "it's a good day"

// function bug(value) {
//   if (value == true) {
//     return "sad days";
//   } else if (value == false) {
//     return "it's a good day";
//   }
// }
// console.log(bug(false));

// 46.Shunday funksiya yasangki, ushbu funksiya 2ta argument
// qabul qiladi. Birinchi argument massive, ikkinchi argument
// ushbu massivni boshidan boshlab nechta elementni tushurib
// qoldirish. Tushirib qoldirilgandan so’ng funksiya natijani
// qaytarsin.

// function tushirMassiv(arr, tushirishSoni) {
//   return arr.splice(tushirishSoni);
// }
// console.log(tushirMassiv([1, 2, 3], 1));

// 47.Funksiya argument sifatida ovoz berib qo’llab quvvatlashlar
// soni va ovoz berib qo’llamaganlar sonini qabul qiladi. Funksiya
// natijani qaytarsin.

// function ovozlar(ovozObj) {
//   return ovozObj.upvotes - ovozObj.downvotes;
// }
// console.log(ovozlar({ upvotes: 13, downvotes: 0 }));

// 48.Funksiya son qabul qilsa, ushbu sonning negativini qaytarsin.

// function negativ(son) {
//   return son * -1;
// }
// console.log(negativ(4));

// 49.Massivni elementlarini o’rnin almashtiradigan funksiya
// yasang.

// function almash(arr) {
//   return arr.reverse();
// }
// console.log(almash([1, 2, 3, 4]));

// 50.Kinoteatrga bollar kino ko’rgani kirmoqchi bunda 2ta talab
// mavjud. Shunda funksiya 2ta argument qabul qiladi. Bolaning
// yoshini va ota-onasi bilan birgami degan boolean qiymat. Agar
// bolaning yoshi kamida 15 bo’lsa va ota-onasi bilan birga bo’lsa
// funksiya true qaytarsin aks holda false.

// function kinogaKirish(yosh, otaOna) {
//   if (yosh >= 15 && otaOna == true) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(kinogaKirish(14, true));

// 51.Funksiya har bir massivning elementiga 1 qo’shishi kerak.

// function addOne(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     res.push(arr[i] + 1);
//   }
//   return res;
// }
// console.log(addOne([0, 1, 2, 3]));

// 52.Template string yordamida ya’ni backticlar orqali “ ushbu formatdagi stringni hosil qiling.

// var ism = "Donyor";
// var familiya = "Olimov";
// var natija; -> sizning kodingiz.
// Natija: “Donyor Olimov” ko’rinishida bo’lsin.

// let ism = "Elmurod";
// let familiya = "Turdiboyev";
// let natija = `${ism} ${familiya}`;

// console.log(natija);

// 53.Quyidagi namunani ternary operator ko’rinishida yozing.

// Namuna:
// var holatiYaxshimi = true
// var holati;
// if (holatiYaxshimi)
// holati = "yaxshi"
// else
// holati = "yaxshi emas"
// Yuqoridagi kodni ternary operator ko’rinishiga o’giring!.

// let holatiYaxshimi = true;
// let holati = holatiYaxshimi ? "yaxshi" : "yaxshi emas";

// 54.Funksiya string qabul qiladi. Agar ushbu stringning uzunligi.
// juft bo’lsa funksiya true qaytarsin, aks holda false

// function sozUzunligi(str) {
//   if (str.length % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(sozUzunligi("apples"));

// 55.Funksiya 2ta argument qabul qiladi. Ikkala argument ham
// son, funksiya 1-sonni 2-songa darajaga ko’tarilgan qiymatni
// qaytarsin.

// function daraja(x, y) {
//   return x ** y;
// }
// console.log(daraja(5, 5));

// 56.Funksiya massiv qabul qiladi. Ushbu funksiya massivning
// so’nggi elementini qaytarib bersin.

// function songiElement(arr) {
//   return arr[arr.length - 1];
// }
// console.log(songiElement([1, 2, 3]));

// 57.Kabisa yilini aniqlaydigan funksiya yasang. Agar kiritilgan
// yil kabisa bo’lsa funksiya true qaytaradi, aks holda false. Kabisa
// yili 4ga bo’linadigan yil bo’lib, lekin 100ga bo’linsa u holda
// 400ga ham bo’linganidagina kabisa hisoblanadi.

// function kabisa(yil) {
//   if (yil % 4 === 0 || (yil % 100 === 0 && yil % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(kabisa(1200));

// 58.Funskiyaga so’z kiritilsa funksiya ushbu so’zni birinchi
// harfisiz qaytarib bersin.

// function soz(word) {
//   return word.slice(1);
// }
// console.log(soz("apple"));

// 59.Boolen qiymatini teskarisini qaytarib beradigan funksiya
// yasang.

// function teskariBool(bool) {
//   return bool ? false : true;
// }
// console.log(teskariBool(true));

// 60.Funskiya son qabul qiladi, agar son juft bo’lsa funskiya “juft”
// qaytaradi, agar toq bo’lsa “toq” qaytarsin.

// function juftMiToqmi(son) {
//   return son % 2 === 0 ? "juft" : "toq";
// }
// console.log(juftMiToqmi(3));

// 61-masala

// function qutilar(num) {
//   return num * 2;
// }
// console.log(qutilar(2));

// 62.Funskiya massiv qabul qiladi, ushbu massivni ichida yoki
// stringlar yoki numberlar joyshlashgan bo’ladi. funksiya massiv
// elementlarini bitta string qilib qaytarsin.

// function arrayToString(arr) {
//   return arr.join("");
// }
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));

// 63.Funksia 2ta sonlardan iborat massiv qabul qilsa, ularni
// birlashtirib bitta massiv ko’rinishida qaytarib bersin.

// function birlash(arr1, arr2) {
//   return arr1.concat(arr2);
// }
// console.log(birlash([1, 3, 5], [2, 6, 8]));

// 64.Funskiya 2ta argument qabul qiladi. 1-argument massiv,
// 2-argument ushbu massivning biron elementi. Funksiya ushbu
// elementning massiv ichida nechinchi indexda turishini qaytarib
// bersin.

// function topIndex(arr, str) {
//   return arr.indexOf(str);
// }
// console.log(topIndex(["hi", "edabit", "fgh", "abc"], "fgh"));

// 65.Funksiya massive bilan index qabul qilsa, ushbu indexdagi
// massiv elementini qaytarsin.
// !!! Indexni eng kichik qiymatga qarab yaxlitlang.

// function arrElement(arr, index) {
//   return arr[index];
// }
// console.log(arrElement([1, 2, 3, 4, 5, 6], 10 / 2));

// 66.Quyidagi namunani kuzatgan holda funksiya yasang.

// Namuna:
// namuna([1, 2, 3, 4, 5]);
// namuna([-1, 0, 1]);
// namuna([0, 4, 8, 12]);

// function add(arr) {
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     res = res + arr[i];
//   }
//   return res;
// }
// console.log(add([0, 4, 8, 12]));

// 67.Funksiyaga son so’z ko’rinishida kiritilsa, raqam ko’rinishida
// qaytarilsin

// function number(word) {
//   switch (word) {
//     case "bir":
//       return 1;
//     case "ikki":
//       return 2;
//     case "uch":
//       return 3;
//     case "to'rt":
//       return 4;
//     case "besh":
//       return 5;
//     case "olti":
//       return 6;
//     case "yetti":
//       return 7;
//     case "sakkiz":
//       return 8;
//     case "to'qqiz":
//       return 9;
//   }
// }
// console.log(number("olti"));

// 68.Funskiyaga sonlar massivi beriladi, va 2-argument sifatida
// bitta son beriladi agar ushbu son massivni ichida bo’lsa funksiya
// true qaytarsin, aks holda false.

// function bormi(arr, son) {
//   if (arr.includes(son)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(bormi([1, 2, 3, 4, 5], 3));

// 69.Funskiya sonlar va stringlar massivi berilsa, massivning
// ichidagi sonlarni stringga o’girib, ushbu massivni funksiya yana
// qaytarib bersin.

// function sonString(arr) {
//   return arr.map((el) => el.toString());
// }
// console.log(sonString([1, 2, "a", "b"]));

// 70.Kubik rubik yasash uchun kubikchalar kerak bo’ladi.
// Funksiya kubik rubikni necha qatorligiga qarab turib,
// kubikchalar sonini qaytasin.

// function kubik(x) {
//   let res = x * x;
//   return res * 6;
// }
// console.log(kubik(3));
