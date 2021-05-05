'use strict';

 //Вам нужно запросить у пользователя число. Добавить условие при котором число будет выводиться (через alert)
// с правильным словом: «год», «года» или «лет». Т.е. «29 лет» или «4 года».

//Ограничений по возрасту — нет, 0 тоже подходит.

//Также сделайте простую проверку, что пользователь ввел число.

 


let input = document.querySelector('.input');
let btn = document.querySelector('.btn');


function f2 () {
  
  let a  = +input.value;
let b;
b = a % 1000;

  if( b >= 5 && b <= 20){
  
              alert('Вам' +' '+ b + ' ' + 'лет'); 
  
   }else {
     let c;
     c = b % 10;
     if(b == 1){
          alert('Вам'+ ' ' + b + ' ' + 'год');
     }
     
     else if(c >=2 && c <= 4){
           alert('Вам' +' ' + b + ' ' + 'года');
       
 }else if (b == 0) {
   alert('Малыш ты молод!!!');
 }else   {
            alert('Вам' +' '+ b + ' ' + 'лет');
 }
}
}

  document.querySelector('.btn').onclick = f2;



