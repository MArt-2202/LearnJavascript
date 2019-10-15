document.addEventListener("DOMContentLoaded", function(event) {
    /*
    ============================================================
        TASK-1: Модальное диалоговое окно с формой
    ============================================================
    */
    function task1() {
        let btn = document.querySelector('.run-code'),
            formWr = document.querySelector('.prompt-form-container'), 
            form = document.querySelector('.prompt-form');

        btn.addEventListener('click', () => {
                showPrompt('Введите текст в поле ввода', (value) => {
                alert("Вы ввели: " + value);  
            });
        });

        function showPrompt(html, callback){
            document.querySelector('.modal-overlay').classList.add('show');
            document.body.style.overflowY = 'hidden';
            document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;  

            document.querySelector('.prompt-message').innerHTML = html;
            form.text.value = '';
            form.text.focus(); // Почему поле не получает сразу фокус ?

            let firstElem = form.elements[0],
                lastElem = form.elements[form.elements.length - 1];

            firstElem.addEventListener('keydown', function(e){
                if (e.key == 'Tab' && !e.shiftKey) {
                    lastElem.focus();
                    return false;
                }
            });

            lastElem.addEventListener('keydown', function(e){
                if (e.key == 'Tab' && !e.shiftKey) {
                    firstElem.focus();
                    return false;
                }
            });

            document.addEventListener('keydown', function(e){
                if (e.key == 'Escape'){
                    value = null;
                    callback(value);

                    document.querySelector('.modal-overlay').classList.remove('show');
                    document.body.style.overflowY = '';
                    document.body.style.paddingRight = ''; 
                    return false; // Послу нажатия "ESC" окно закрылось, но нажимаю опять "ESC" и появляется опять ALERTY ?
                } 
            });

            form.addEventListener('submit', function(){
                let value = form.text.value;
                if(value == '') return false; // Почему форма перегружается ?

                callback(value);
                return false;
            });
        }

        document.querySelector('.modal-overlay').addEventListener('click', function(e){
            let target = e.target;

            if(!target.closest('.modal__content') || target.className === 'modal__close'){
                document.querySelector('.modal-overlay').classList.remove('show');
                document.body.style.overflowY = '';
                document.body.style.paddingRight = ''; 
            } 
        });
    }
    task1();

}); // END DOCUMENT READY