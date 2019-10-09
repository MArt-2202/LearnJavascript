document.addEventListener("DOMContentLoaded", function(event) {
    /*
    =======================================================================
        TASK-1: Переведите текст вида border-left-width в borderLeftWidth
    =======================================================================
    */
    function task1() {
        let result1 = document.querySelector('#section-1 .result');

        function camelize(str) {
            return str.split('-')
                .map((el, index) => {
                    return (index == 0) ? el : el[0].toUpperCase() + el.slice(1);
                })
                .join('');
        }
        result1.textContent = camelize('list-style-image');
    }
    task1();

    /*=======================================================================
        TASK-2: Фильтрация по диапазону
    =======================================================================
    */
    function task2() {
        let result2 = document.querySelector('#section-2 .result');

        function filterRange(arr, a, b) {
            return arr.filter(item => (item > a && item < b));
        }

        result2.textContent = filterRange([5, 3, 100, 8, 1], 0, 6);
    }
    task2();

    /*=======================================================================
        TASK-4: Сортировать в обратном порядке
    =======================================================================
    */
    function task4() {
        let result4 = document.querySelector('#section-4 .result'),
            arr = [5, 2, 1, -10, 8];

        arr.sort(
            (a, b) => b - a
        );

        result4.textContent = arr;
    }
    task4();

    /*=======================================================================
        TASK-5: Скопировать и отсортировать массив
    =======================================================================
    */
    function task5() {
        let result5 = document.querySelector('#section-5 .result'),
            arr = ["HTML", "JavaScript", "CSS"];

        function copySorted(arr) {
            return arr.slice().sort();
        }

        result5.textContent = copySorted(arr);
    }
    task5();

    /*=======================================================================
        TASK-9: Отсортировать пользователей по возрасту
    =======================================================================
    */
    function task9() {
        let result9 = document.querySelector('#section-9 .result'),
            vasya = { name: "Вася", age: 25 },
            petya = { name: "Петя", age: 30 },
            masha = { name: "Маша", age: 28 },
            arr = [ vasya, petya, masha ];

        function sortByAge(arr) {
            return arr.sort((a,b) => (a.age > b.age) ? 1 : -1);
        }

        console.log(arr);
    }
    task9();

    /*=======================================================================
        TASK-10: Перемешайте массивы
    =======================================================================
    */
    function task10() {
        let result10 = document.querySelector('#section-10 .result'),
            arr = [1,2,3];

        function shuffle(arr) {
            return arr.sort(() => Math.random() - 0.5);
        }

        result10.textContent = shuffle(arr);
    }
    task10();

    /*=======================================================================
        TASK-11: Получить средний возраст
    =======================================================================
    */
    function task11() {
        let result11 = document.querySelector('#section-11 .result'),
            vasya = { name: "Вася", age: 10 },
            petya = { name: "Петя", age: 30 },
            masha = { name: "Маша", age: 20 },
            arr = [ vasya, petya, masha ];

        function getAverageAge(arr) {
            return arr.reduce((a,b) => a + b.age, 0) / arr.length;
        }
        result11.textContent = getAverageAge(arr);
    }
    task11();

     /*=======================================================================
        TASK-12: Оставить уникальные элементы массива
    =======================================================================
    */
    function task12() {
        let result12 = document.querySelector('#section-12 .result'),
            arr = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

        function unique(arr) {
            let arrUnique = [];

            for (let el of arr){
                if (!arrUnique.includes(el)) arrUnique.push(el);
            }

            return arrUnique;
        }
        result12.textContent = unique(arr);
    }
    task12();













}); // END DOCUMENT READY