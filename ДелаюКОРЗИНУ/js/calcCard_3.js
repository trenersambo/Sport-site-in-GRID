
/**
 * Файл для калькуляции (расчетов) внутри КОРЗИНЫ
  * Математику делаю тут: 
 * 1). Счетчик в кружочке (кол-во добавленных товаров)
 * 2). цена*цена = сумма одного вида товара
 * 3). общая цена всех товаров* 
 * 
 * PS.:Корзина заполняется значениями из выбранных товаров
 * через кнопку "В корзину" (файл card_1.js).
 * 
 */

// #1. Счетчик в кружочке (кол-во добавленных товаров)

 //ф-ция подсчета в КРУЖОЧКЕ
calcAmount ( )

function calcAmount ( ){

    //ссылка на Окошко "Штук"
let inputValue = document.querySelectorAll ('.inputPrice');

let  amount = 0 ; // amount = колич-во ШТУК (eng) (в окошке Корзины)

for (let i = 0; i < inputValue.length; i++){
    //сумма цифр в окошках "Штук"
    amount = +amount + +inputValue[i].value;

}
console.log (amount);
 

// Кол-во штук прилетает в КРУЖОК
let spanCircle_div = document.querySelector ('.spanCircle')
spanCircle_div.innerText = amount;

}



//№ 1.1. В случае смены цифр внутри окошка "ШТУК" - нужен пересчет
// именно в виде функции, т.к. этот п/счет нужен будет в файле card_1.js
function reCalcAmount ( ){

    document.querySelectorAll ('.inputPrice').forEach (function (event){
   event.addEventListener ('mousemove', calcAmount )
     event.addEventListener  ('change' , calcAmount)
})

}


