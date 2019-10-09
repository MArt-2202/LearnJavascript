document.addEventListener("DOMContentLoaded", function(event) {
    /*
    ============================================================
        TASK-1: Создать уведомление
    ============================================================
    */
    function task1() {
        let btn = document.querySelector('#section-1 .btn');

        btn.onclick = showNotification;

        function showNotification({top = 10, right = 10, className = '', text = 'Текст сообщения'}){
            let message = document.createElement('div');
            message.className = 'message';
            document.body.append(message);

            message.style.top = `${top}px`;
            message.style.right = `${right}px`;
            message.textContent = text;

            if (className) message.classList.add(className);

            setTimeout(
                () => message.hidden = true, 1500
            );
        }
    }
    task1();

}); // END DOCUMENT READY


