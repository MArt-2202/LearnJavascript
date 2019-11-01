document.addEventListener("DOMContentLoaded", function(event) {
    /*
    ============================================================
        TASK-1: Вывод каждую секунду
    ============================================================
    */
    let btn1 = document.querySelector('#btn-1'),
        btn2 = document.querySelector('#btn-2');

    btn1.addEventListener('click', printNumbers1);
    btn2.addEventListener('click', printNumbers2);

    function printNumbers1(){
        let start = 1,
            end = 10;

        setTimeout(function show(){
            console.log(start);

            start++;

            if ( start < end){
                setTimeout(show, 1000);
            }
            
        }, 1000);
    }

    function printNumbers2(){
        let start = 1,
            end = 10,
            timeId =  setInterval(function show(){
            console.log(start);

            start++;

            if ( start === end){
                clearInterval(timeId);
            } 
        }, 1000);
    }

}); // END DOCUMENT READY