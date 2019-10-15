document.addEventListener("DOMContentLoaded", function(event) {
    /*
    ============================================================
        TASK-1: Выделяемый список
    ============================================================
    */
    function task1() {
        document.addEventListener('click', (e) =>{
            let target = e.target;

            if (target.tagName !== 'LI') return;

            if (e.ctrlKey || e.metaKey) toggleSelect(target);
            addSelect(target);
            
            function addSelect(node){
                let selectedItems = document.querySelectorAll('.list .selected');

                for(let el of selectedItems){
                    el.classList.remove('selected');
                }
                node.classList.add('selected');
            }

            function toggleSelect(node){
                node.classList.toggle('selected');
            }
        });
    }
    task1();

}); // END DOCUMENT READY