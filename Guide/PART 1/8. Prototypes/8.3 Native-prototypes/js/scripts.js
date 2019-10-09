document.addEventListener("DOMContentLoaded", function(event) {
    /*
    =======================================================================
        TASK-1: Добавить функциям метод "f.defer(ms)"
    =======================================================================
    */
    function task1() {
        let result1 = document.querySelector('#section-1 .result');

        Function.prototype.defer = function(ms){
            setTimeout(this, ms);
        }

        function f() {
            return 'Для Function добавлено метод defer';
        }

        f.defer(1000);
       
        result1.textContent = f();

    }
    task1();

}); // END DOCUMENT READY