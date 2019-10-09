document.addEventListener("DOMContentLoaded", function(event) {
    /*
    ==================================
        TASK-4: Создайте калькулятор
    ==================================
    */
    /*
    Создайте объект calculator (калькулятор) с тремя методами:
        read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
        sum() (суммировать) возвращает сумму сохранённых значений.
        mul() (умножить) перемножает сохранённые значения и возвращает результат.
    */
    function task4() {
        let result4 = document.querySelector('#section-4 .result'),
            a = +prompt('Введите первое число', 0),
            b = +prompt('Введите второе число', 0);

        if (isNaN(a) || isNaN(b)) {

            alert('Введите число !');
            window.location.reload();
        } else {
            let calculator = {
                read() {
                    a; // или this.a = a
                    b; // или this.b = b
                },
                sum() {
                    return a + b;
                },
                mul() {
                    return a * b;
                },
            };

            calculator.read();
            result4.textContent = `Сумма чисел: ${calculator.sum()}, Результат умножения: ${calculator.mul()}`;
        }
    }
    task4();










}); // END DOCUMENT READY