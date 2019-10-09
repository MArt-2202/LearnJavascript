document.addEventListener("DOMContentLoaded", function(event) {
    /*
    =======================================================================
        TASK-1: Работа с прототипами
    =======================================================================
    */
    function task1() {
        let result1 = document.querySelector('#section-1 .result');

        let animal = {
            jumps: null
        };
        let rabbit = {
            __proto__: animal,
            jumps: true
        };

        console.log(`Задача 1: rabbit.jumps вывод ${rabbit.jumps}`);
        delete rabbit.jumps;

        console.log(`Задача 1: delete rabbit.jumps вывод ${rabbit.jumps}`);
        delete animal.jumps;

        console.log(`Задача 1: delete animal.jumps вывод ${rabbit.jumps}`);

        result1.textContent = 'Вывод в консоль';
    }
    task1();

    /*
    =======================================================================
        TASK-2: Алгоритм поиска
    =======================================================================
    */
    function task2() {
        let result2 = document.querySelector('#section-2 .result');

        let head = {
            glasses: 1
        };

        let table = {
            pen: 3,
            __proto__: head

        };

        let bed = {
            sheet: 1,
            pillow: 2,
            __proto__: table
        };

        let pockets = {
            money: 2000,
            __proto__: bed,
        };

        result2.textContent = `pockets.pen: ${pockets.pen}, bed.glasses: ${bed.glasses}, table.money: ${table.money}`;
    }
    task2();

    /*
    =======================================================================
        TASK-3: Куда будет произведена запись?
    =======================================================================
    */
    function task3() {
        let result3 = document.querySelector('#section-3 .result');

        let animal = {
            eat() {
                this.full = true;
            }
        };

        let rabbit = {
            __proto__: animal
        };

        result3.textContent = `Объект rabbit получит свойство full при вызове rabbit.eat()`;
    }
    task3();

}); // END DOCUMENT READY