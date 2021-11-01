"use strict";

// const now = new Date(); // текущие дата и время

const now = new Date();

//new.Date.parse();

//МЕТОДЫ СЕТЕРЫ (set) ЗАДАЕТ ВРЕМЕННЫЕ ЗНАЧЕНИЯ
console.log(now.setHours(18));
console.log(now);

//МЕТОДЫ ГЕТЕРЫ (get) ДЛЯ ПОЛУЕНИЯ ВРЕМЕНИ
console.log(now.getFullYear()); // начало с 1 января 1970 года
console.log(now.getMonth()); // январь = 0, февраль = 1...декабрь = 11
console.log(now.getDate()); // вывод дня месяца, от 1 до 31
console.log(now.getDay()); // день недели
console.log(now.getHours()); //местное время
console.log(now.getUTCHours()); //время по UTC

console.log(now.getTimezoneOffset()); //разника между местным временем и временем по Гринвичу UTC
console.log(now.getTime()); //колличество миллисекунд, которые уже прошли от начали заданного времени (т.е. от01.01.1970)


let start = new Date();

for (let i=0; i<100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);