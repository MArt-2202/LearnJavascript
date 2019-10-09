document.addEventListener("DOMContentLoaded", function(event) {
    /*
    ============================================================
        TASK-1: Скопирован ли массив?
    ============================================================
    */
    function task1() {
        let result1 = document.querySelector('#section-1 .result'),
            fruits = ["Яблоки", "Груша", "Апельсин"];

        let shoppingCart = fruits;
        shoppingCart.push("Банан");

        // что в fruits?
        // Две ссылки fruits, shoppingCart на один объект 


        result1.textContent = fruits.length;
    }
    task1();

    /*
    ============================================================
        TASK-2: Операции с массивами
    ============================================================
    */
    function task2() {
        let result2 = document.querySelector('#section-2 .result'),
            musicStyles = ['Джаз', 'Блюз'];

        musicStyles.push('Рок-н-ролл');
        musicStyles[(Math.floor(musicStyles.length / 2) - 1)] = 'Классика';
        musicStyles.shift();
        musicStyles.unshift('Рэп', 'Регги');

        result2.textContent = musicStyles.shift();;
    }
    task2();

    /*
    ============================================================
        TASK-3: Вызов в контексте массива
    ============================================================
    */
    function task3() {
        let result3 = document.querySelector('#section-3 .result'),
            arr = ['a', 'b'];

        arr.push(function() {
            return this;
        })

        result3.textContent = arr[2]();
    }
    task3();

    /*
    ============================================================
        TASK-4:  Сумма введённых чисел
    ============================================================
    */
    function task4() {
        let result4 = document.querySelector('#section-4 .result'),
            arr = [],
            sum = 0;

        function sumInput(){
            while(true){
                let a = prompt('Введите число', 0);
                arr.push(+a);

                if (!isFinite(a) || a === null || a === '') break;
            }

            for (let i of arr){
                sum += i;
            }

            //console.log(arr);
            return sum;
        }

        result4.textContent = sumInput();
    }
    //task4();

    /*
    ============================================================
        TASK-5: Подмассив наибольшей суммы
    ============================================================
    */
    function task5() {
        let result5 = document.querySelector('#section-5 .result'),
        sum = 0,
        resArr = [];

        function getMaxSubSum(arr){
            for(let i of arr){
                (i> 0) ? sum += i: sum;
            }

            return sum;
        }

        result5.textContent = getMaxSubSum([100, -9, 2, -3, 5]);
    }
    task5();










}); // END DOCUMENT READY