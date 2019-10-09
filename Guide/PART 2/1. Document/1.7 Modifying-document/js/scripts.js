document.addEventListener("DOMContentLoaded", function(event) {
    /*
    ============================================================
        TASK-1: createTextNode vs innerHTML vs textContent
    ============================================================
    */
    function task1() {
        let result1 = document.querySelector('#section-1 .result');

        result1.textContent = `elem.append(document.createTextNode(text)) и elem.textContent = text добавляют текст`;
    }
    task1();

    /*
    ============================================================
        TASK-2: Очистите элемент 
    ============================================================
    */
    function task2() {
        let result2 = document.querySelector('#section-2 .result'),
            btn = document.querySelector('#section-2 .btn');

        btn.onclick = function(e){
            e.preventDefault();

            document.querySelector('#section-2 .result ol').innerHTML = '';

            this.onclick = null;
        }
    }
    task2();

    /*
    ============================================================
        TASK-4: Создайте список 
    ============================================================
    */
    function task4() {
        let result4 = document.querySelector('#section-4 .result'),
            btn = document.querySelector('#section-4 .btn'),
            list = document.createElement('ul');

        result4.append(list);

        btn.onclick = function(e){
            e.preventDefault();

            while(true){
                let listItemText = prompt('Введите содержимое пункта меню', '');
                
                if (!listItemText) break;

                listItem = document.createElement('li');
                listItem.textContent = listItemText;
                list.append(listItem);
            }

            this.onclick = null;
        }

    }
    task4();

    /*
    ============================================================
        TASK-8: Вставьте HTML в список
    ============================================================
    */
    function task8() {
        function clock(){
            let clock = document.getElementById('.clock'),
                hoursDisplay = document.getElementById('hours'),
                minutesDisplay = document.getElementById('minutes'),
                secondsDisplay = document.getElementById('seconds'),
                date = new Date(),
                hours = date.getHours(),
                minutes = date.getMinutes(),
                seconds = date.getSeconds();

                if (hours < 10) hours += '0';
                if (minutes < 10) minutes += '0';
                if (seconds < 10) seconds += '0';

                hoursDisplay.textContent = hours;
                minutesDisplay.textContent = minutes;
                secondsDisplay.textContent = seconds;
        }

        setInterval(clock, 1000);
        
    }
    task8();

    /*
    ============================================================
        TASK-9: Вставьте HTML в список
    ============================================================
    */
    function task9() {
        let result9 = document.querySelector('#section-9 .result'),
            btn = document.querySelector('#section-9 .btn');

        btn.onclick = function(e){
            e.preventDefault();

            document.querySelector('#section-9 #one').insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

            this.onclick = null;
        }
    }
    task9();

}); // END DOCUMENT READY


