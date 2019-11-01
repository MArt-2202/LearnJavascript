document.addEventListener("DOMContentLoaded", function(event) {
    /*
    ============================================================
        TASK-1: Перепишите класс
    ============================================================
    */
    let btn = document.querySelector('#section-1 .btn');
    btn.addEventListener('click', task1);

    function task1() {
        class Clock {
            constructor({ template }) {
                this.template = template;
            }

            render() {
                let date = new Date(),
                    hours = date.getHours(),
                    minutes = date.getMinutes(),
                    seconds = date.getSeconds();

                if (hours < 10) {
                    hours = `0${hours}`;
                }
                if (minutes < 10) {
                    minutes = `0${minutes}`;
                }
                if (seconds < 10) {
                    seconds = `0${seconds}`;
                }

                let startClock = this.template
                    .replace('h', hours)
                    .replace('m', minutes)
                    .replace('s', seconds);

                console.log(startClock);
            }

            start() {
                this.timer = setInterval(() => this.render(), 1000);
            }

            stop() {
                setTimeout(() => {
                    clearInterval(this.timer);
                }, 10000)

            }
        }

        let clock = new Clock({ template: 'h:m:s' });
        clock.start();
        clock.stop();
    }

}); // END DOCUMENT READY