document.addEventListener("DOMContentLoaded", function (event) {
    /*
    ============================================================
        TASK-1: Сумма чисел
    ============================================================
    */
    document.querySelector('#btn-1').addEventListener('click', ()=>{
        console.log(sumNumbers(4)); // 10
        // console.log(sumTo(4));   // 10
    });

    // Вариант - 1
    const sumNumbers = (n, acc = 0) =>{
        if (n === 0 ) {
            return acc;
        }
        return sumNumbers(n-1, acc + n);
    }

    // Вариант - 2
    const sumTo = (n)=>{
        if (n === 1) return n;
        return n + sumTo(n-1);
    }

    /*
    ============================================================
        TASK-2: Вывести елементы массива
    ============================================================
    */
    document.querySelector('#btn-2').addEventListener('click', ()=>{
        arrayElements(['a', 'b', 'c', 'd', 'f']);
    });

    let i = 0;

    const arrayElements = (arr) => {
        console.log(arr[i]);
        i++;
        if (i < arr.length) arrayElements(arr);
        return arr[i];
    }

    // Вариант - 2
    /*
    let ArrayElements = (arr) =>{
        console.log(arr.shift());
      
        if (arr.length !== 0){
        ArrayElements(arr); 
      }
    }
    */
    // ArrayElements([1,2,3]);

    /*
    ============================================================
        TASK-3: Вывести сумму елементов массива
    ============================================================
    */
    document.querySelector('#btn-3').addEventListener('click', ()=>{
        console.log(arraySum([1,2,3,4,5]));
    });

    const arraySum = (arr, sum = 0) => {
        sum += arr.shift();
  
        if(arr.length !== 0){
            sum = arraySum(arr,sum);
        }
        return sum;
    }

    /*
    ============================================================
        TASK-4: Вывести диапазон чисел
    ============================================================
    */
    document.querySelector('#btn-4').addEventListener('click', ()=>{
        numbersDiapazone(1, 10);
    });

    const numbersDiapazone = (start, end) => {
        console.log(start);
        start++;
  
        if (start === end) {
            console.log(end);
            return end;
        }
        return numbersDiapazone(start, end);
    }

    /*
    ============================================================
        TASK-5: Число Фибоначи
    ============================================================
    */
    document.querySelector('#btn-5').addEventListener('click', ()=>{
        console.log(fib(5)); // 5
    });

    const fib = (n) =>{
        if ( n < 2 ) return n;
        return fib(n-1) + fib(n-2);
    }

    /*
    ============================================================
        TASK-6: Факториал
    ============================================================
    */
    document.querySelector('#btn-6').addEventListener('click', ()=>{
        console.log(factorial(4)); // 24
    });

    const factorial = (n) =>{
        if (n === 1) {
            return n;
        }
        return n * factorial(n - 1);
    }

    /*
    ============================================================
        TASK-7: Возведение в степень
    ============================================================
    */
    document.querySelector('#btn-7').addEventListener('click', ()=>{
        console.log(pow(5,3)); // 125
    });

    const pow = (x, n) =>{
        if (n === 1) {
            return x
        }

        return x * pow(x,n - 1);
    }

    /*
    ============================================================
        TASK-8: Выведите все числа от 1 до n
    ============================================================
    */
    document.querySelector('#btn-8').addEventListener('click', ()=>{
        console.log(recurs(10)); 
    });

    const recurs = (n) => {
        // Базовый случай
        if (n == 1) {
            return 1;
        }
        // Шаг рекурсии / рекурсивное условие
        return recurs(n - 1) + ' ' + n;
    }

    // ВАРИАНТ-2
    /*
    const recurs = (n) => {
        console.log(n)
        if (n === 1) return n
        recurs(n - 1)
    }

    recurs(10);
    */

    /*
    ============================================================
        TASK-9: Вывод чисел от a до b
    ============================================================
    */
    document.querySelector('#btn-9').addEventListener('click', ()=>{
        showNumbers(20, 10);
        showNumbers(1, 9); 
    });

    const showNumbers = (a,b) => { 
        console.log(a);
        if (a === b){
            return a;
        }
        if(a > b){
            return showNumbers(a - 1, b);
        }
        else{
            return showNumbers(a + 1, b);
        }
    }

    /*
    ============================================================
        TASK-10: Вывод всех нечетных чисел от n до 1
    ============================================================
    */
    document.querySelector('#btn-10').addEventListener('click', ()=>{
        f(18); 
    });

    const f = (n) =>{
        if (n > 0 ){
            if (n > 0 &&n %2 == 1) console.log(n);
            f(n-1);
        } 
    }

}); // END DOCUMENT READY