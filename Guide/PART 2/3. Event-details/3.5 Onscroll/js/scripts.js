document.addEventListener("DOMContentLoaded", function(event) {
    /*
    ============================================================
        TASK-1: Бесконечная страница
    ============================================================
    */
    function task1(){
        let container = document.querySelector('.infinity-scroll');

        function infinityPage(e){
     
                if (container.scrollTop >= container.scrollHeight - container.offsetHeight){

                    container.insertAdjacentHTML('beforeend',`<p>${new Date()}</p>`);
               
            }
        }

        container.addEventListener('scroll', infinityPage);
    }

    task1();

    /*
    ============================================================
        TASK-2: Кнопка вверх
    ============================================================
    */
    function task2(){
        let scrollTopBtn = document.createElement('span'),
            scrollTopContainer = document.querySelector('.scroll-top-container'),
            windowH = document.documentElement.clientHeight;

        scrollTopBtn.style.left = `${scrollTopContainer.getBoundingClientRect().left }px`;
        scrollTopBtn.classList.add('scroll-top');
        scrollTopBtn.hidden = true;

        document.querySelector('.scroll-top-container').append(scrollTopBtn);

        document.addEventListener('scroll', (e) => {
            if (pageYOffset >= document.documentElement.clientHeight) scrollTopBtn.hidden = false; 
            else{
                scrollTopBtn.hidden = true; 
            } 
                       
        });

        scrollTopBtn.addEventListener('click', (e) => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    task2();

    /*
    ============================================================
        TASK-3: Загрузка видимых изображений
    ============================================================
    */
    function task3(){
        function lazyLoadImages(){
            let images = document.querySelectorAll('img[data-src]'),
                windowH = document.documentElement.clientHeight;

            images.forEach(el => {
                let imgCoords = el.getBoundingClientRect(),
                    imgAttr = el.getAttribute('data-src');

                if (imgCoords.top < windowH) el.src = imgAttr;
            });
        }

        lazyLoadImages();

        document.addEventListener('scroll', lazyLoadImages);
    }

    task3();

}); // END DOCUMENT READY