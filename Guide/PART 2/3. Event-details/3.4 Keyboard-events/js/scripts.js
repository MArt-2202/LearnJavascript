document.addEventListener("DOMContentLoaded", function(event) {
    /*
    ============================================================
        TASK-1: Отследить одновременное нажатие
    ============================================================
    */
    function runOnKeys(func, ...keyCodes){
        let codes = {};

         document.addEventListener('keydown', (e) =>{
            codes[e.code] = true;

            for (let i = 0; i < keyCodes.length; i++){
                if(!codes[keyCodes[i]]){
                    return;
                }
                else{
                    delete codes[e.code];
                }
            }

            func();
        });

        document.addEventListener('keyup', function (e) {
            delete codes[e.code];
        });
    }

    runOnKeys(
      () => alert(`"Q" и "W" нажаты одновременно`),
      "KeyQ",
      "KeyW"
    );

}); // END DOCUMENT READY