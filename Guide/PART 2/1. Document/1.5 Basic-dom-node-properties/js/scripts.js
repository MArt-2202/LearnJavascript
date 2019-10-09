document.addEventListener("DOMContentLoaded", function(event) {
    /*
    ============================================================
        TASK-1: Считаем потомков  
    ============================================================
    */
    function task1() {
        let result1 = document.querySelector('#section-1 .result'),
            li = document.querySelectorAll('#section-1 li'),
            str = '';

        for (let el of li){
            str += `${el.firstChild.data.trim()} : ${el.getElementsByTagName('li').length}, `;
        }

        result1.textContent = `${str}`;
    }
    task1();

}); // END DOCUMENT READY