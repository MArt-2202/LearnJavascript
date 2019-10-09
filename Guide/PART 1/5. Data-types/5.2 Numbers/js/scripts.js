document.addEventListener("DOMContentLoaded", function(event) {
    /*
    ============================================================
        TASK-1: Создайте скрипт,
        который запрашивает ввод двух чисел (используйте prompt)
        и после показывает их сумму.
    ============================================================
    */
    function task1() {
        let result1 = document.querySelector('#section-1 .result'),
            a = +prompt('Введите первое число', 0),
            b = +prompt('Введите второе число', 0),
            sum = 0;

        sum = a + b;

        result1.textContent = sum;
    }
    //task1();

    /*
    ===========================================
        TASK-2: Почему 6.35.toFixed(1) == 6.3?
    ===========================================
    */
    function task2() {
        let result2 = document.querySelector('#section-2 .result'),
        a;

        a = 6.35.toFixed(2);
        result2.textContent = a;
    }
    task2();

    /*
    =======================================
        TASK-3: ВВод числового значения
    =======================================
    */
    function task3() {
        let result3 = document.querySelector('#section-3 .result'),
            a;

        function readNumber(){
            do {
                a = prompt('Введите число', 0);
            } while (!isFinite(a));

            if (a === null || a === ''){
                return null;
            }

            return +a;
        }
        
        result3.textContent = readNumber();
    }
    //task3();

    /*
    =========================================
        TASK-5: Случайное число от min до max
    =========================================
    */
    function task5() {
        let result5 = document.querySelector('#section-5 .result');

        function random(min,max){
            return min + Math.random() * (max - min);
        }
        
        result5.textContent = random(1,10);
    }
    task5();

    /*
    ===============================================
        TASK-6: Случайное целое число от min до max
    ===============================================
    */
    function task6() {
        let result6 = document.querySelector('#section-6 .result');

        function randomInteger(min,max){
            let num = min + Math.random() * (max - min + 1);
            return  Math.floor(num);
        }
        
        result6.textContent = randomInteger(1,3);
    }
    task6();








}); // END DOCUMENT READY