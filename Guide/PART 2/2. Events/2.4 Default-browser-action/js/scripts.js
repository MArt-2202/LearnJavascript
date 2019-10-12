document.addEventListener("DOMContentLoaded", function(event) {
    /*
    ============================================================
        TASK-2: Поймайте переход по ссылке
    ============================================================
    */
    function task2() {
        document.querySelector('.contents').onclick = function(e){
            let target = e.target,
                modal = confirm('Желаете покинуть сайт ?'),
                href = target.href || target.closest('a').href;

            if (!modal) return false;
            if(target.tagName == 'A' || target.closest('a')) window.location = href;
        }  
    }
    task2();

     /*
    ============================================================
        TASK-3: Галерея изображений
    ============================================================
    */
    function task3() {
        document.querySelector('.thumbs').onclick = function(e){
            let target = e.target.closest('a'),
                items = document.querySelectorAll('.thumbs__list a'),
                imgBig = document.querySelector('.thumbs__img img');

            if (!target) return;
            e.preventDefault();

            for (el of items){
                el.classList.remove('thumbs__checked');
            }

            imgBig.src = target.href;
            target.classList.add('thumbs__checked');  
        }  
    }
    task3();

}); // END DOCUMENT READY