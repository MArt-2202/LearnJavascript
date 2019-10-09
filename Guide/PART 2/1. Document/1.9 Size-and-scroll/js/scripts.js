document.addEventListener("DOMContentLoaded", function(event) {
    /*
    ============================================================
        TASK-1: Найти размер прокрутки снизу
    ============================================================
    */
    function task1() {
        let result1 = document.querySelector('#section-1 .result');

        result1.textContent = `elem.scrollHeight - elem.scrollTop - elem.clientHeight`;
    }
    task1();

    /*
    ============================================================
        TASK-2: Узнать ширину полосы прокрутки
    ============================================================
    */
    function task2() {
        let result2 = document.querySelector('#section-2 .result');

        result2.textContent = `elem.offsetWidth - elem.clientWidth`;
    }
    task2();

    /*
    ============================================================
        TASK-3: Поместите мяч в центр поля
    ============================================================
    */
    function task3() {
        let result3 = document.querySelector('#section-3 .result'),
            field, // поле
            ball;  // мяч

        result3.textContent = `
            field.style.left = (field.clientWidth/2 - ball.clientWidth/2) + 'px'; 
            field.style.top = (field.clientHeight/2 - ball.clientHeight/2) + 'px';
        `;
    }
    task3();

}); // END DOCUMENT READY


