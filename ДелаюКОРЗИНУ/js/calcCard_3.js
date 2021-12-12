
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
//console.log (amount);
 

// Кол-во штук прилетает в КРУЖОК
let spanCircle_div = document.querySelector ('.spanCircle')
spanCircle_div.innerText = amount;

}


// внутри КОРЗИНЫ
//№ 1.1. В случае смены цифр внутри окошка "ШТУК" - нужен пересчет: в Кружке и в Цене
//  Сдеано функцией, т.к. её вставляю  в файл card_1.js
function reCalcAmount ( ){

    document.querySelectorAll ('.inputPrice').forEach (function (event){

        //Пересчет в кружочке: как реакция на мышку
   event.addEventListener ('mousemove', calcAmount )
   event.addEventListener  ('change' , calcAmount)

        //Пересчет в столбце 'Цена': как реакция на мышку
    event.addEventListener  ('mousemove' , calcSubPrice )
    event.addEventListener  ('change' , calcSubPrice )

      //  Пересчет в строке 'Итого': как реакция на мышку
    event.addEventListener  ('mousemove' , calcTotalPrice )
    event.addEventListener  ('change' , calcTotalPrice )

})

}


// №2. Счетчик  ЦЕНЫ за кол-во ШТУК товара (руб*штук = цена одного товара)

function calcSubPrice( ){

    //ссылки на Цена / Штук / Цена
    let prodPriceDiv = document.querySelectorAll('.prodPrice') ;
    let inputValue = document.querySelectorAll ('.inputPrice');
    let subPriceDiv = document.querySelectorAll('.subPrice') ;

    let price = 0;

    for (let i = 0; i < inputValue.length; i++){
        price = parseInt(prodPriceDiv[i].innerText)  * inputValue[i].value  ;
        subPriceDiv[i].innerText = `${price}`
    
    }

}

// №3. Считает 'ИТОГО' за все выбранные товары

function calcTotalPrice( ){

    //ссылки на ...ЦенаШтукТовара / ЦенаВсейПокупки
    let subPriceDiv = document.querySelectorAll('.subPrice') ;    
    let total = document.querySelector ('.totalPrice') ;

    let priceTotal = 0;    

    for (let i = 0; i < subPriceDiv.length; i++){
        priceTotal = parseInt(priceTotal) + parseInt (subPriceDiv[i].innerText);
        total.innerText = `${priceTotal}` ;
    }

}



