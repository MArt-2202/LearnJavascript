document.addEventListener("DOMContentLoaded", function(event) {
    /*
    ============================================================
        TASK-1: Спрячьте сообщения с помощью делегирования
    ============================================================
    */
    function task1() {
        let messageList = document.querySelector('.message-list'),
            messageListItems = document.querySelectorAll('.message-list li');

        messageListItems.forEach(
            (el) => {
                el.insertAdjacentHTML('beforeend', `<span class="message-close">✖</span>`);
            }
        );

        messageList.addEventListener(
            'click', (e) => {
                let target = e.target;

                if (!target.classList.contains('message-close')) return;
                target.closest('li').remove();
            }
        );
    }
    task1();

    /*
    ============================================================
        TASK-2: Раскрывающееся дерево
    ============================================================
    */
    function task2() {
        let tree = document.querySelector('.tree');

        tree.addEventListener(
            'click', (e) => {
                let target = e.target;

                if (target.tagName != 'SPAN' && !target.nextElementSibling) return;
                if (target.tagName == 'SPAN') {
                    let toggleMenu = target.nextElementSibling;
                    toggleMenu.hidden = !toggleMenu.hidden;
                }
            }
        );
    }
    task2();

    /*
    ============================================================
        TASK-3: Сортируемая таблица
    ============================================================
    */
    function task3() {
        document.querySelector('.sort-table').addEventListener(
            'click', (e) => {
                let target = e.target;

                if (target.tagName != 'TH') return;

                sortFunc(target.cellIndex, target.dataset.type);
            }
        );

        function sortFunc(index, type) {
            let rows = [...document.querySelectorAll('.sort-table tbody tr')],
                compare;

            if (type === 'age') compare = (a, b) => a.cells[index].textContent - b.cells[index].textContent;
            if (type === 'name') compare = (a, b) => (a.cells[index].textContent > b.cells[index].textContent) ? 1 : -1;

            rows.sort(compare);
            document.querySelector('.sort-table tbody').append(...rows);
        }
    }
    task3();

}); // END DOCUMENT READY