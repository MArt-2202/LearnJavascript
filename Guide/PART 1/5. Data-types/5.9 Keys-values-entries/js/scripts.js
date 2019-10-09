document.addEventListener("DOMContentLoaded", function(event) {
    /*
    =======================================================================
        TASK-1: Сумма свойств объекта
    =======================================================================
    */
    function task1() {
        let result1 = document.querySelector('#section-1 .result'),
            salaries = {
                "John": 100,
                "Pete": 300,
                "Mary": 250
            };

        function sumSalaries(sumSalaries) {
            let sum = 0;
            for(let el of Object.values(salaries)){
                sum += el;
            }

            return sum;
        }
        result1.textContent = sumSalaries(sumSalaries);
    }
    task1();

    /*
    =======================================================================
        TASK-2: Подсчёт количества свойств объекта
    =======================================================================
    */
    function task2() {
        let result2 = document.querySelector('#section-2 .result'),
            user = {
                name: 'John',
                age: 30
            };

        function count(user) {
            return Object.keys(user).length;
        }
        result2.textContent = count(user);
    }
    task2();














}); // END DOCUMENT READY