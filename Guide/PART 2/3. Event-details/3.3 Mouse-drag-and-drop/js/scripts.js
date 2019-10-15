document.addEventListener("DOMContentLoaded", function(event) {
    /*
    ============================================================
        TASK-1: Слайдер
    ============================================================
    */
    function task1() {
        let slider = document.querySelector('.slider'),
            thumb = document.querySelector('.thumb'),
            rail = document.querySelector('.slider span');
            
        thumb.addEventListener('mousedown', (e) => { 
            e.preventDefault();
            let shiftX = e.clientX - thumb.getBoundingClientRect().left;

            function mouseMove(e) {
                let left = e.clientX - shiftX - slider.getBoundingClientRect().left,
                    right = slider.offsetWidth - thumb.offsetWidth;    

                if( left < 0 ) left = 0;
                if( left > right ) left = right; 

                thumb.style.left = `${left}px`;
                rail.style.width = `${left}px`;
            }

            function mouseUp() {
                document.removeEventListener('mouseup', mouseUp);
                document.removeEventListener('mousemove', mouseMove);
            }

            document.addEventListener('mousemove', mouseMove);
            document.addEventListener('mouseup', mouseUp);
        });

        thumb.addEventListener('dragstart', () => { return false });
    }
    task1();

}); // END DOCUMENT READY