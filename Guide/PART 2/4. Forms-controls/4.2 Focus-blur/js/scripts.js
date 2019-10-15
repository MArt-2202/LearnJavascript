document.addEventListener("DOMContentLoaded", function(event) {
    /*
    ============================================================
        TASK-1: Редактируемый div
    ============================================================
    */
    function task1() {
        let view = document.querySelector('.view'),
            textarea = null;

        function f1(){
            textarea = document.createElement('textarea');
            view.replaceWith(textarea);
            textarea.value = view.textContent;

            textarea.addEventListener('blur', f2);
            textarea.addEventListener('keydown', (e) =>{
                if(e.key == 'Enter'){
                    e.target.blur();
                }
            });
        }

        function f2(){
            view.textContent = textarea.value;
            textarea.replaceWith(view);
        }

        view.addEventListener('click', f1);
    }
    task1();

     /*
    ============================================================
        TASK-3: Мышь, управляемая клавиатурой
    ============================================================
    */
    function task3() {
        let mouse = document.querySelector('#mouse');
            mouse.tabIndex = 0;

        function mousePos(e){
            this.style.position = 'fixed';
            this.style.left = `${this.getBoundingClientRect().left}px`;
            this.style.top = `${this.getBoundingClientRect().top}px`;
        }

         function mouseStartPos(e){
            this.style.position = '';
            this.style.left = `${this.getBoundingClientRect().left}px`;
            this.style.top = `${this.getBoundingClientRect().top}px`;
        }

        function mouseMove(step){
            return function(e){
                switch(e.code){
                    case 'ArrowUp':
                    this.style.top = parseInt(this.style.top) - step + 'px';
                    return false;

                    case 'ArrowDown':
                    this.style.top = parseInt(this.style.top) + step + 'px';
                    return false;

                    case 'ArrowLeft':
                    this.style.left = parseInt(this.style.left) - step + 'px';
                    return false;

                    case 'ArrowRight':
                    this.style.left = parseInt(this.style.left) + step + 'px';
                    return false; 
                }
            }
        }

        mouse.addEventListener('focus', mousePos);
        mouse.addEventListener('blur', mouseStartPos);
        mouse.addEventListener('keydown', mouseMove(10));

    }
    task3();

}); // END DOCUMENT READY