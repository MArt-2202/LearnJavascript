document.addEventListener("DOMContentLoaded", function(event) {
    /*
    =======================================================================
        TASK-1: Фильтрация уникальных элементов массива
    =======================================================================
    */
    function task1() {
        let result1 = document.querySelector('#section-1 .result'),
            uniqueArr = [];

        function unique(arr) {
            let set = new Set(arr);
            for (let el of set){
                uniqueArr.push(el);
            }
            return uniqueArr;

            // или return Array.from(new Set(arr));
        }
        result1.textContent = unique(["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"]);
    }
    task1();

    












}); // END DOCUMENT READY