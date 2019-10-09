document.addEventListener("DOMContentLoaded", function(event) {
    /*
    =======================================================================
        TASK-1: Дочерние элементы в DOM
    =======================================================================
    */
    /*
    <body>
          <div>Пользователи:</div>
          <ul>
            <li>Джон</li>
            <li>Пит</li>
          </ul>
        </body>
    */
    function task1() {
        let result1 = document.querySelector('#section-1 .result');

        result1.textContent = `document.body.firstChild,
                               document.body.firstChild.nextElementSibling,
                               document.children[1].lastElementChild;`;
    }
    task1();

    /*
    =======================================================================
        TASK-2: Вопрос о соседях
    =======================================================================
    */
    function task2() {
        let result2 = document.querySelector('#section-2 .result');

        result2.textContent = `1. elem.lastChild последний, без узла nextSibling
                                2. Перед elem.children[0] может быть текстовый узел`;
    }
    task2();

    /*
    =======================================================================
        TASK-3: Выделите ячейки по диагонали
    =======================================================================
    */
    function task3() {
        let tableRows = document.querySelectorAll('#section-3 tr');
        tableRows.forEach(
            (el, index) => el.cells[index].style.background = 'red'
        );
    }
    task3();

}); // END DOCUMENT READY