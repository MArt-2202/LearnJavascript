document.addEventListener("DOMContentLoaded", function(event) {
    /*
    ============================================================
        TASK-1: Получите атрибут 
    ============================================================
    */
    function task1() {
        let result1 = document.querySelector('#section-1 .result');

        result1.textContent = document.querySelector('[data-widget-name]').dataset.widgetName;
    }
    task1();

     /*
    ============================================================
        TASK-2: Сделайте внешние ссылки оранжевыми 
    ============================================================
    */
    function task2() {
        let result2 = document.querySelector('#section-2 .result'),
            links = document.querySelectorAll('#section-2 .result a');

        for(let el of links){
            if (el.matches('[href*="://"]') && !el.matches('[href^="http://internal.com"]') ){
                el.style.color = 'orange';
            }
        }
    }
    task2();

}); // END DOCUMENT READY