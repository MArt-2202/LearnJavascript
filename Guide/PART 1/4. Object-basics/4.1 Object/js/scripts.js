document.addEventListener("DOMContentLoaded", function(event) {
    /*
    ==================================
        TASK-4: Сумма свойств объекта
    ==================================
    */
    function task4() {
        let result4 = document.querySelector('#section-4 .result');

        const salaries = {
            John: 100,
            Ann: 160,
            Pete: 130
        };

        let salariesSum = (obj) => {
            let sum = 0;

            for (let key in obj) {
                if (key !== undefined && salaries[key] !== undefined) {
                    sum += salaries[key];
                }
            }
            result4.textContent = sum;
        }

        salariesSum(salaries);
    }
    task4();

    /*
    =======================================
        TASK-5: Умножаем все числовые свойства на 2
    =======================================
    */
    function task5() {
        let result5 = document.querySelector('#section-5 .result'),
            str = '';

        const menu = {
            width: 200,
            height: 300,
            title: "My menu"
        };

        let multiplyNumeric = (obj) => {
            let key;
            for (key in obj){
                if (typeof obj[key] == 'number'){
                    obj[key] *= 2;
                }

                str += `${key}: ${obj[key]}, `;
            }

            result5.textContent = str;
        }

        multiplyNumeric(menu);
    }
    task5();








}); // END DOCUMENT READY