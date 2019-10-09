document.addEventListener("DOMContentLoaded", function(event) {
    /*
    =======================================================================
        TASK-1: Напишите деструктурирующее присваивание
    =======================================================================
    */
    function task1() {
        let result1 = document.querySelector('#section-1 .result'),
            str = '';
        user = {
            name: "John",
            years: 30
        };

        function func1() {
            let { name, years: age, isAdmin = false } = user;
            return str = `name: ${name}, age: ${age}, isAdmin: ${isAdmin}`;
        }
        result1.textContent = func1();
    }
    task1();

    /*
    =======================================================================
        TASK-2: Максимальная зарплата
    =======================================================================
    */
    function task2() {
        let result2 = document.querySelector('#section-2 .result'),
            salaries = {
                "John": 100,
                "Pete": 300,
                "Mary": 250
            };

        function topSalary(salaries) {
            let max = 0,
            maxName = null,
            str = '';

            for(let [name, salary] of Object.entries(salaries)){
                if (max < salary) {
                    max = salary;
                    maxName = name;
                }
                str = `Сотрудник ${maxName} с наибольшей зарплатой ${max}`;
            }
            return str;
        }
        result2.textContent = topSalary(salaries);
    }
    task2();














}); // END DOCUMENT READY