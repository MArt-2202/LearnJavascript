document.addEventListener("DOMContentLoaded", function(event) {
    /*
    =======================================================================
        TASK-1: Создайте дату
    =======================================================================
    */
    function task1() {
        let result1 = document.querySelector('#section-1 .result');
        
        function func1() {
            return new Date(2012, 1, 20, 3, 12);
        }
        result1.textContent = func1();
    }
    task1();

    /*
    =======================================================================
        TASK-2: Покажите день недели
    =======================================================================
    */
    function task2() {
        let result2 = document.querySelector('#section-2 .result'),
            date = new Date(2019, 9, 5);

        function getWeekDay(date) {
            let day = date.getDay(),
                dayName = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

            return dayName[day];
        }
        result2.textContent = getWeekDay(date);
    }
    task2();

    /*
    =======================================================================
        TASK-3: День недели в европейской нумерации
    =======================================================================
    */
    function task3() {
        let result3 = document.querySelector('#section-3 .result'),
            date = new Date(2019, 9, 5);

        function getLocalDay(date) {
            let day = date.getDay();
                
            if (day == 0) day = 7;
            return day;
        }
        result3.textContent = getLocalDay(date);
    }
    task3();

    /*
    =======================================================================
        TASK-4: Какой день месяца был много дней назад?
    =======================================================================
    */
    function task4() {
        let result4 = document.querySelector('#section-4 .result'),
            date = new Date(2015, 0, 2),
            days = 20;

        function getDateAgo(date, days) {
            let dateClone = new Date(date);

            dateClone.setDate(date.getDate() - days);
            return dateClone.getDate();
        }
        result4.textContent = getDateAgo(date, days);
    }
    task4();

    /*
    =======================================================================
        TASK-5: Последнее число месяца?
    =======================================================================
    */
    function task5() {
        let result5 = document.querySelector('#section-5 .result');

        function getLastDayOfMonth(year, month) {
            let date = new Date(year, month + 1, 0);
            return date.getDate();
        }
        result5.textContent = getLastDayOfMonth(2019, 9);
    }
    task5();

     /*
    =======================================================================
        TASK-6: Сколько сегодня прошло секунд?
    =======================================================================
    */
    function task6() {
        let result6 = document.querySelector('#section-6 .result');

        function getSecondsToday() {
            let dateNow = new Date(),
                dateToday = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());

            return Math.round((dateNow - dateToday) / 1000); 
        }
        result6.textContent = getSecondsToday();
    }
    task6();

    /*
    =======================================================================
        TASK-7: Сколько секунд осталось до завтра?
    =======================================================================
    */
    function task7() {
        let result7 = document.querySelector('#section-7 .result');

        function getSecondsToTomorrow() {
            let dateNow = new Date(),
                dateTomorrow = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() + 1),
                secTomorrow = Math.round((dateTomorrow - dateNow) / 1000);

            return secTomorrow;
        }
        result7.textContent = getSecondsToTomorrow();
    }
    task7();















}); // END DOCUMENT READY