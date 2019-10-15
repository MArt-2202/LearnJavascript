document.addEventListener("DOMContentLoaded", function(event) {
    /*
    ============================================================
        TASK-1: Добавьте пункт к выпадающему списку
    ============================================================
    */
    function task1() {
        let result1 = document.querySelector('#section-1 .result'),
            select = document.querySelector('#genres'),
            option = new Option('Классика', 'classic', true, true);

        select.append(option);
        option.selected = true;

        result1.textContent = `Значение и текст выбранного пункта: ${select.value}`;
   
    }
    task1();

}); // END DOCUMENT READY