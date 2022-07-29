'use strict';


    const btn = document.getElementById('btn')
    
    btn.addEventListener('click',()=>{
        // const results = ['ち','ん','ぽ'];
        // const n =Math.floor(Math.random()*3);
        // btn.textContent = results[n];
        // switch (n){
        //     case 0:
        //         btn.textContent = 'ち'
        //         break;
        //     case 1:
        //         btn.textContent = 'ん'
        //         break;
        //     case 2:
        //         btn.textContent = 'ぽ'
        //         break;
        // }
        const n = Math.random();
        if(n < 0.01){
            btn.textContent = 'ぽ';
        } else if (n < 0.001){
            btn.textContent = 'ちんぽ!!';
        } else if (n < 0.4){
            btn.textContent = 'ん';
        } else {
            btn. textContent = 'ち';
        }
    });