document.addEventListener("DOMContentLoaded", function (event) {
    /*
    ============================================================
        TASK-1: Напишите функцию highlight
    ============================================================
    */
    function highlight() {
        let tr = document.querySelectorAll('.teachers tr'),
            td = document.querySelectorAll('.teachers td');

        tr.forEach(
            el => {
                /*
                    Проставить property hidden, если такого атрибута нет вообще
                */
                // (!el.hidden) ? el.setAttribute('hidden', true): el.removeAttribute('hidden');

                td.forEach(
                    elTd => {
                        /* Проставить класс available/unavailable,
                            в зависимости от значения атрибута data-available у ячейки
                        */
                        if (elTd.hasAttribute('data-available')) {
                            if (elTd.dataset.available == 'true') elTd.closest('tr').classList.add('available');
                            if (elTd.dataset.available == 'false') elTd.closest('tr').classList.add('unavailable');
                        }

                        /*
                            Проставить класс male/female, в зависимости от содержимого ячейки Gender
                        */
                        if (elTd.textContent == 'm') elTd.classList.add('male');
                        if (elTd.textContent == 'f') elTd.classList.add('female');

                        /*
                            Установить inline-стиль style="text-decoration: line-through", 
                            если значение ячейки Age меньше 18
                        */
                        if (elTd.matches(':nth-child(2)')) {
                            if (+elTd.textContent < 18) {
                                elTd.style.textDecoration = 'line-through';
                            }
                        }
                    }
                );
            }
        );
    }

    highlight();

}); // END DOCUMENT READY