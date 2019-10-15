document.addEventListener("DOMContentLoaded", function(event) {
    /*
    ============================================================
        TASK-1: Депозитный калькулятор
    ============================================================
    */
    function task1() {
        // initial: начальная сумма денег
        // interest: проценты, например, 0.05 означает 5% в год
        // years: сколько лет ждать
        //let result = Math.round(initial * (1 + interest * years)),
        let form = document.querySelector('.deposite-calculator__data');

        function depositeCalculator(){
            let totalResult = document.querySelector('#height-after'),
                initial = +form.money.value,
                interest = form.interest.value * 0.01,
                years = form.months.value / 12,
                result = Math.round(initial * (1 + interest * years)),
                moneyBefore = document.querySelector('#money-before'),
                moneyAfter = document.querySelector('#money-after'),
                diagramH = result / form.money.value * 100 + 'px';

                totalResult.style.height = diagramH;
                moneyBefore.textContent = initial;
                moneyAfter.textContent = result;
        } 

        depositeCalculator();

        form.money.addEventListener('input', depositeCalculator);
        form.interest.addEventListener('input', depositeCalculator);
        form.months.addEventListener('change', depositeCalculator);




    }
    task1();

}); // END DOCUMENT READY