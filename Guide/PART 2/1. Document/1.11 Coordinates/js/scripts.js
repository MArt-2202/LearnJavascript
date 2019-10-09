document.addEventListener("DOMContentLoaded", function(event) {
    /*
    ============================================================
        TASK-2: Узнать ширину полосы прокрутки
    ============================================================
    */
    function task2() {
       let anchor = document.querySelector('blockquote');

        function positionAt(anchor, position, text){ 
            let cordes = anchor.getBoundingClientRect();
                noteElem = document.createElement('div');

            noteElem.classList.add('note');
            noteElem.textContent = text;
            document.body.append(noteElem);

            if (position == 'top'){
                noteElem.style.top = cordes.top - noteElem.clientHeight + 'px';
                noteElem.style.left = cordes.left + 'px';
            }

            if (position == 'bottom'){
                noteElem.style.top = cordes.bottom - noteElem.clientHeight + 'px';
                noteElem.style.left = cordes.left + 'px';
            }

            if (position == 'right'){
                noteElem.style.top = cordes.top - noteElem.clientHeight + 'px';
                noteElem.style.left = cordes.right - noteElem.clientWidth + 'px';
            }
        }

        positionAt(anchor, 'top', 'Заметка');

        console.log('ggg');
        
    }
    task2();

}); // END DOCUMENT READY


