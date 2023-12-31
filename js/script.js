"use strict";

// Практика Условия и Циклы
// Упражнение 3
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

// Упражнение 4*
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
// Упражнение 5**
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