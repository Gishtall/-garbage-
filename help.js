var message; // коментарии a-z. A_Z message2 (с цыфры имя начинать нельзя а заканчивать можно )
var myNomber = 10.30 // цыфры без ковычек
var myString = "текст в ковычках как текст"
var myBoolean = true // false
var myNull =  null;
var myUndefined = undefined
var myObject= {
    name:"изя",
    age: 25
};

// числа 
var resault = 40 + 10;
alert(resault);
 myNomber += 10
 //числа с плавоющей точкой
 console.log(Math.round) // округляет 
 console.log(Math.ceil)// округляет в большую
 console.log(Math.floor)//округляет в меньшую

 //кол-во знаков после точки
 var newNumber = 4.567
 console.log(newNumber.toFixed(3)) // кол-во знаков после точки + округление

 //Строки

console.log("40")//число в ковычках читаеться как строка) 
console.log(toLowerCase) // выводит строку маленькими буквами
console.log(muString.toUpperCase) // заглавные

// массивы
var names = [Изя, Петя. Женя] // квадратные скобки, нумерация с нуля,
 console.log(names[0])
 names. push ("новое имя"); // добавить в массив новый элемент


 // условия
if (10>5) //("некое условие")
 {
console.log("условие выполнилось / или не выполнилось")
}
//=== три знака равенства строгое сравнение
// || знак "или", для двух значений которые могут выполниться и не выполниться


//цикл
for (var i = 0; i < 10; i++){
    console.log (i);
}
//принудительный выход из цикла
for (var i = 0; i < 10; i++){
    if(i == 5) {
        break;
}
// прирыв итерации (повторения) (пропускает заданую цифру) 
for (var i = 0; i< 10; i++){
    if(i == 5) {
        continue;
}
console.log(i);
}

// функции
function sum(x.y) {
    console.log(x + y);
}
sum (10,59);

// обекты
var myObject = {
    name: "изя",
    surname: "Шмунц"
    age: 25,
    getFullName: function name() {
        
    }
};
myObject.name = 
