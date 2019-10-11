document.addEventListener("DOMContentLoaded", function(event) {
    /*
    ============================================================
        TASK-1: Скрыть элемент по нажатию кнопки
    ============================================================
    */
    function task1() {
        let btn = document.querySelector('#section-1 .btn');

        btn.onclick = hideEl;

        function hideEl() {
            document.querySelector('#text').hidden = true;
        }
    }
    task1();

    /*
    ============================================================
        TASK-2: Спрятать себя
    ============================================================
    */
    function task2() {
        let btn = document.querySelector('#section-2 .btn');

        btn.onclick = hideYourself;

        function hideYourself() {
            this.style.display = 'none';
        }
    }
    task2();

    /*
    ============================================================
        TASK-4: Создать раскрывающееся меню
    ============================================================
    */
    function task4() {
        let navToggleBtn = document.querySelector('.nav span'),
            navWr = document.querySelector('.nav'),
            navList = document.querySelector('.nav ul');

        document.addEventListener('click', function(e) {
            let target = e.target;

            if (target == navWr || target == navToggleBtn) navWr.classList.toggle('nav-open');
            if (!target.closest('.nav')) navWr.classList.remove('nav-open');
        });

    }
    task4();

    /*
    ============================================================
        TASK-5: Добавить кнопку закрытия
    ============================================================
    */
    function task5() {
        let messageListItems = document.querySelectorAll('.message-list li');

        messageListItems.forEach(
            (el) => {
                el.insertAdjacentHTML('beforeend', `<span class="message-close">✖</span>`);
                el.querySelector('.message-close').onclick = () => el.remove();
            }
        );

    }
    task5();

    /*
    ============================================================
        TASK-6: Карусель
    ============================================================
    */
    function carousel({ width = 128, step = 3 }) {
        let carouselList = document.querySelector('.carousel ul'),
            carouselLeftBtn = document.querySelector('.arrow-left'),
            carouselRightBtn = document.querySelector('.arrow-right'),
            carouselItems = [...document.querySelectorAll('.carousel li')],
            pos = 0,
            totalW = 0;

        for (el of carouselItems) {
            totalW += el.offsetWidth;
        }

        carouselLeftBtn.onclick = (e) => {
            pos -= width * step;

            carouselRightBtn.classList.remove('disabled');

            if (pos < -totalW) {
                pos = 0;
            }

            if (carouselItems.length % step == 0) {
                if (pos < -totalW + ((step + 1) * width)) {
                    carouselLeftBtn.classList.add('disabled');
                }
            }

            if (pos < -totalW + (carouselItems.length % step + width)) {
                carouselLeftBtn.classList.add('disabled');
            }

            carouselList.style.left = `${pos}px`;
        }

        carouselRightBtn.onclick = () => {
            if (pos != 0) {
                pos += width * step;
                carouselLeftBtn.classList.remove('disabled');
                carouselRightBtn.classList.remove('disabled');
            } else {
                carouselRightBtn.classList.add('disabled');
            }

            carouselList.style.left = `${pos}px`;
        }
    }
    carousel({});
    
}); // END DOCUMENT READY