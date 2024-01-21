"use strict";

// Практика Условия и Циклы
// ------------Упражнение 3------------
/* 1) При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
*/
for(let i=1 ; i<=5 ; i++)
{
console.log(i);
}
  

// Место для второй задачи
/*2)При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...).
 Когда цикл дойдет до числа 13 - остановить весь цикл
*/
for(let i=20; i>=10; i--)
{
   if(i==13)
   {
      break;
   }
   console.log(i);
}

// Место для третьей задачи
/*3)При помощи цикла for выведите чётные числа от 2 до 10 включительно */
for(let i=1; i<=10; i++){
   if(i%2==0)
   {
      console.log(i);
   }
   else{
      continue;
   }
}

// Место для четвертой задачи
/*4)Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. 
Не создайте бесконечный цикл! Иначе браузер может зависнуть.

 Цикл, который нужно переписать:
 
 for (let i = 2; i <= 16; i++) {
     if (i % 2 === 0) {
         continue;
     } else {
         console.log(i);
     }
 }
 */
 for (let i = 2; i <= 16; i++) {
   if (i % 2 === 0) {
       continue;
   } else {
       console.log(i);
   }
}
let num = 2;
while(num <16)
{
   if (num % 2 === 0) {
      
  } else {
      console.log(num);
  }
  num++;
  
}

// Место для пятой задачи
/* 5) Заполните массив цифрами от 5 до 10 включительно. 
Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]  */
   let arrayOfNumbers=[];
   let number = 5;
   for(let i=0; i<6;i++)
   {
      arrayOfNumbers[i]=number;
      number++;
      console.log(arrayOfNumbers[i]);
   }

// ------------Упражнение 4*------------
// Место для первой задачи
/*Заполните новый массив (result) числами из старого (arr). 
Количество элементов в массиве можно получить как arr.length, 
а к элементам обращаемся все так же: arr[0], arr[1] и тд.
Должен получиться точно такой же массив */
function firstTask() {
   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
   const arr = [3, 5, 8, 16, 20, 23, 50];
   const result = [];
   for(let i=0; i<arr.length; i++)
   {
      result[i]=arr[i];
   }
   return result;
}

// Место для второй задачи
/* Измените данный массив так, чтобы все числа были увеличены в 2 раза,
 а если попадается строка строка - то к ней было добавлено " - done".
Для определения типа данных используйте typeof();
Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]*/
function secondTask() {
   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
   const data = [5, 10, 'Shopping', 20, 'Homework'];
   for(let i=0; i< data.length; i++)
   {
      if(typeof(data[i])=='number'){
         data[i]*=2;
      }else{
         data[i]+=' - done';
      }
   }
   return data;
}

// Место для третьей задачи
/* Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]*/
function thirdTask() {
   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
   const data = [5, 10, 'Shopping', 20, 'Homework'];
   const result = [];
   let j=0;
   for(let i=data.length-1;i>=0; i--)
   {
      result[j]=data[i];
      j++;
   }
   console.log(result);
   return result;
}
// ------------Упражнение 5**------------
const lines = 5;
let result = '';
for(let i=0; i<=lines; i++)
{
   for(let j=0; j<lines-1; j++)
   {
      result+=" ";
   }
   for(let j=0; j<2*i+1; j++)
   {
      result+="*";
   }
   result+="\n";
}
console.log(result);

//------------Упражнение 6------------
/*1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!".
 В решении вызывать функцию не нужно, программа сделает это за вас.

P.S. возвращать - это использовать ключевое слово return.

P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.*/
function sayHello(UserName) {
   console.log("Привет, ", UserName,"!");
   return UserName;
}
let UserName = prompt("Как тебя зовут?", '');
sayHello(UserName);

/*2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа 
и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].*/
function returnNeighboringNumbers(a) {
  
   let arrayOfNumbers = [a-1,a,a+1];
   console.log(arrayOfNumbers);
   return arrayOfNumbers;
}
returnNeighboringNumbers(5);

/*3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа.
 Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. 
 (Смотри пример ниже). 
 Функция должна возвращать строку (или число в особых случаях, о которых ниже), 
 где эти числа идут по порядку, разделенные тремя дефисами "---". 
 После последнего числа их не должно быть.
Если второй аргумент не является числом, 
равен или меньше нуля - то возвращать просто первый аргумент. 
(Проверяем через оператор typeof)

Примеры:

Вызов функции getMathResult(5, 3) даст ответ 5---10---15

Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

Вызов функции getMathResult(10, '5') даст ответ 10

Вызов функции getMathResult(10, 0) даст ответ 10

Вызов функции getMathResult(20, -5) даст ответ 20 */
function getMathResult(a,b){
   if(typeof(b)==='string'|| b<=0)
   {
      console.log(a);
      return a;
   }
   else
   {
      let result='';
      let space='---';
      let spaceNumber=b-1;
      let currentNum =a;
      for(let i=0; i<b;i++)
      {
         result =result + currentNum;
         if(spaceNumber>0){
            result=result+space;
         }
         currentNum+=a;
         spaceNumber--;
      }
      console.log(result)
      return result;
   }
   
}
getMathResult(15,'a');

//------------Упражнение 7------------
// Место для первой задачи 
/*1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба
 (тоже базовая математика, иногда используется в создании анимаций). 
 Эта функция принимает в себя целое число со значением длины ребра куба. 
Ответ выведите в формате строки, который изображен в примерах.
Если в функцию попал неправильный аргумент или вычислить значения 
невозможно - вернуть строку "При вычислении произошла ошибка" */
function calculateVolumeAndArea(a) {
   if(a<0 || a==NaN || !Number.isInteger(a) )
   {
      console.log("При вычислении произошла ошибка");
   }
   else{
      let S = 0;
      let V = 0;
      V=Math.pow(a,3);
      S=6*(Math.pow(a,2)); 
      console.log(`Объем куба: ${V},`+` площадь всей поверхности: ${S}`);
   }
   
}
calculateVolumeAndArea(5);

// Место для второй задачи
/*
Напишите функцию, которая будет определять номер купе по переданному ей номеру места.
Функция принимает только целое число от 1 до 36.

Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

"Ошибка. Проверьте правильность введенного номера места"

Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

Пример:

getCoupeNumber(33)  => 9

getCoupeNumber(7)  => 2

getCoupeNumber(300)  => "Таких мест в вагоне не существует"

getCoupeNumber(0)  => "Таких мест в вагоне не существует"

getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"

getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"

getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места" */
function getCoupeNumber(seatNum) {
   if(seatNum<0 || seatNum==NaN || !Number.isInteger(seatNum) )
   {
      console.log("Ошибка. Проверьте правильность введенного номера места");
   }
   else if(seatNum==0 ||seatNum>36){
      console.log("Таких мест в вагоне не существует");
   }
   else{
      console.log(Math.ceil(seatNum/4));
   }
}
getCoupeNumber(6);
//------------Упражнение 8------------
// Место для первой задачи
/*Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки.
 (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. 
 Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов).
 Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). 
 Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). 
 Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

Пример:

getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

getTimeFromMinutes(-150) => "Ошибка, проверьте данные" */
function getTimeFromMinutes(NumofMinuts) {
   if(NumofMinuts<0 || NumofMinuts==NaN || !Number.isInteger(NumofMinuts))
   {
      console.log("Ошибка, проверьте данные");
      return 0;
   }
   let hour = Math.floor(NumofMinuts/60);
   let minutes = NumofMinuts - hour*60;
   if(hour ==0 || hour>4 && hour <=10)
      {
            console.log(`Это ${hour} часов и ${minutes} минут`);
      }
   else if(hour >1 && hour <=4 ){
            console.log(`Это ${hour} часа и ${minutes} минут`);
      }
   else{ 
            console.log(`Это ${hour} час и ${minutes} минут`);
      }
}

getTimeFromMinutes(65);

// Место для второй задачи
/*Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
Если один из аргументов не является числом или их меньше 4 - возвращается 0. 
Дробные числа разрешены.

Пример:

findMaxNumber(1, 5, 6.6, 11); =>  11

findMaxNumber(1, 5, '6', '10');  =>  0 */
function findMaxNumber(a,b,c,d) {
   if(typeof(a)===NaN||typeof(b)===NaN|| typeof(c)===NaN|| typeof(d)===NaN){
      console.log(0);
   }
   else{
      console.log(Math.max(a,b,c,d));
      return a,b,c,d;
   }
   
}
findMaxNumber(6, 3, 12, 1);
//------------Упражнение 9------------
/*Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. 
Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи.
 Причем, их количество должно быть равно переданному аргументу.
Если переданный аргумент не число - вернуть пустую строку.
 Решать без применения рекурсии.

Пример:

fib(4) => ''0 1 1 2"

fib(7) => ''0 1 1 2 3 5 8"

fib('7') => ''"

fib(1) => "0"

fib(0) => ''" */
function fib(num) {
   let fibArray = [0,1];
   if(num == NaN || num ==0)
   {
      console.log(" ");
   }
   else if (num ==1)
   {
      console.log("0");
      return 0;
   }
   for(let i =2; i<num ; i++)
   {
      fibArray[i] = fibArray[i-2]+fibArray[i-1];
   } 
   console.log(fibArray+"");
}
fib(7);

//------------Упражнение 10------------
/*1) Напишите функцию showExperience, 
которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

Пример:

showExperience(personalPlanPeter) => '1 month'

P.S. желательно использовать деструктуризацию, но не обязательно

2) Напишите функцию showProgrammingLangs, 
которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

Пример:

showProgrammingLangs(personalPlanPeter)  =>

"Язык js изучен на 20% Язык php изучен на 10%"

Причем функция должна работать вне зависимости от количества языков. 
Если ни один не указан, то возвращается пустая строка.

P.S. Для переноса строки используется \n в конце строки.

3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter.
 При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

Пример:

personalPlanPeter.showAgeAndLangs(personalPlanPeter)
=> 'Мне 29 и я владею языками: RU ENG' */
const personalPlanPeter = {
   name: "Peter",
   age: "29",
   skills: {
       languages: ['ru', 'eng'],
       programmingLangs: {
           js: '20%',
           php: '10%'
       },
       exp: '1 month'
   },
   showAgeAndLangs: function(){
      console.log(`Мне ${personalPlanPeter.age} и я владею языками:${personalPlanPeter.skills.languages}`);
   }
};
const {languages,programmingLangs,exp } = personalPlanPeter.skills;
personalPlanPeter.showAgeAndLangs(personalPlanPeter);
function showExperience(plan) {
   plan = console.log(exp);
   return plan;
}

function showProgrammingLangs(plan) {
   for (key in programmingLangs)
   {
      console.log(`Язык ${key} изучен на ${programmingLangs[key]}`);
   }

}
showExperience(personalPlanPeter);
showProgrammingLangs(showProgrammingLangs);
//------------Упражнение 11------------
/*1) Напишите функцию showFamily,
 которая будет принимать в себя массив строк и 
 возвращать сообщение в нужном формате.

showFamily(family)  => 'Семья состоит из:
 Peter Ann Alex Linda'

Имена подставляются автоматически из массива. 
Если массив пустой, то 
выводится сообщение 'Семья пуста'

2) напишите функцию standardizeStrings,
 которая будет принимать в себя массив строк
  и будет выводить в консоль эти строки 
  в нижнем регистре.

Пример:

standardizeStrings(favoriteCities)  
выведет в консоль
lisbon
rome
milan 
*/

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
   if(arr.length ===0)
   {
      console.log("Семья пуста");
   }
   else{
      arr = family.join(" ");
    console.log(`Семья состоит из: ${arr} `);
   }
}


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
   arr.forEach(city => {
      console.log(city.toLowerCase());
   });
    
}
showFamily(family);
standardizeStrings(favoriteCities);


//------------Упражнение 12------------
/*3) Задача с собеседований. Напишите функцию reverse, 
которая принимает в себя строку и возвращает эту строку в обратном порядке.

Пример:

const someString = 'This is some strange string';
reverse(someString) => 'gnirts egnarts emos si sihT'

Функцию можно применить к любой строке. 
Если в функцию приходит не строка - вернуть сообщение "Ошибка!" */

const someString = 'This is some strange string';

function reverse(str) {
   console.log(str.split('').reverse().join(''));
}
reverse(someString);


/*4) Представьте такую реальную ситуацию.
 У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах.
  Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
Вам нужно создать главную функцию банкомата availableCurr, 
которая принимает два аргумента: первый - это массив со всеми доступными валютами
 из двух банков сразу (сейчас представим, что они не могут повторяться), 
 второй - необязательный аргумент, который указывает ту валюту, 
 которая сейчас закончилась в банкомате. Если массив в первом 
 аргументе пустой - то функция возвращает строку 'Нет доступных валют'. 
 Функция возвращает строку в нужном виде.

Пример:

availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
Вернет строку:

Доступные валюты:
UAH
RUB
Заметьте:

- CNY (юань) исчез из списка валют, значит такая валюта закончилась

- После валюты: стоит перенос строки \n, и после каждой валюты тоже. 
Это важно для тестов

- Данные для первого аргумента должны приходить сразу из двух банков,
 причем сначала baseCurrencies, потом additionalCurrencies по порядку */
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {

   arr.length === 0 ? console.log("Нет доступных валют") : console.log( `Доступные валюты:\n`);
   for( let i =0; i<arr.length; i++){
      if(arr[i]===missingCurr)
      {
         continue;
      }
      else{
         console.log(`${arr[i]}\n`);
      }
   }
}

availableCurr(['UAH', 'RUB', 'CNY'], 'CNY');
//------------Упражнение 13------------
/*У вас есть небольшой кусочек данных о торговом центре,
 которые записаны в объекте shoppingMallData. 
 Они содержат массив с данными о магазинах, 
 где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

Основная задача - это написать функцию isBudgetEnough,
 которая буде возвращать строку.
  Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', 
  если нет - 'Бюджета недостаточно'. */
const shoppingMallData = {
   shops: [
       {
           width: 10,
           length: 5
       },
       {
           width: 15,
           length: 7
       },
       {
           width: 20,
           length: 5
       },
       {
           width: 8,
           length: 10
       }
   ],
   height: 5,
   moneyPer1m3: 30,
   budget: 50000
}

function isBudgetEnough(data) {
   let area =0;
   let volume =0;
   data.shops.forEach(shop =>{
      area += shop.width * shop.length;
   });
   volume = data.height * area;
   let money=data.budget -(volume*data.moneyPer1m3);
   if(money >=0)
   {
      console.log("Бюджета достаточно");
   }
   else{
      console.log("Бюджета недостаточно");
   }
}
isBudgetEnough(shoppingMallData);