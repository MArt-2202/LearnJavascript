document.addEventListener("DOMContentLoaded", function(event) {
    /*
    ============================================================
        TASK-1: Переделать строку
    ============================================================
    */
    let result1 = document.querySelector('#section-2 .result');

    function changeStr() {
        let str = 'aaabbccdda',
            totalStr = '',
            counter = 1;

        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) !== str.charAt(i + 1)) {
                totalStr += counter + str.charAt(i);
                counter = 1;
            } else {
                counter++;
            }
        }

        return totalStr;

    }

    changeStr();

    result1.textContent = changeStr();

}); // END DOCUMENT READY