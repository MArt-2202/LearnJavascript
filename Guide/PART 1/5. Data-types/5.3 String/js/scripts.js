document.addEventListener("DOMContentLoaded", function(event) {
    /*
    ============================================================
        TASK-1: Сделать первый символ заглавным
    ============================================================
    */
    function task1() {
        let result1 = document.querySelector('#section-1 .result');

        function ucFirst(str) {
            if (str) return str = str[0].toUpperCase() + str.slice(1);
            else{
                alert('Введите строку');
            }
        }

        result1.textContent = ucFirst('артём');
    }
    task1();

    /*
    ============================================================
        TASK-2: Проверка на спам
    ============================================================
    */
    function task2() {
        let result2 = document.querySelector('#section-2 .result');

        function checkSpam(str) {
            str = str.toLowerCase();

            if (str.includes('viagra') || str.includes('xxx')) return true;
            else{
                return false;
            }
        }

        result2.textContent = checkSpam('buy ViAgRA now');
    }
    task2();

    /*
    ============================================================
        TASK-3: Усечение строки
    ============================================================
    */
    function task3() {
        let result3 = document.querySelector('#section-3 .result');

        function truncate(str, maxlength) {
            if (str.length > maxlength){
                let lastChar = str[str.length-1] = '...';
                str = str.substr(0,maxlength-1) + lastChar;
            }

            return str;
        }

        result3.textContent = truncate('Вот, что мне хотелось бы сказать на эту тему:', 20);
    }
    task3();

    /*
    ============================================================
        TASK-4: Выделить число
    ============================================================
    */
    function task4() {
        let result4 = document.querySelector('#section-4 .result');

        function extractCurrencyValue(str) {
            return +str.slice(1);
        }

        result4.textContent = extractCurrencyValue('$120');
    }
    task4();








}); // END DOCUMENT READY