/**
 * Файл для: 
 * 1. Обработака кнопки "В КОРЗИНУ"
 * 2. Отрисовка строк с Товаром внутри Корзины
 * 3. Видна /  не видна Корзина
 */

 /*
 *  чтоб все работало - начинаю с обертки в ф-цию ButtonAddToCart()
 *  Иначе не срабатывла кнопка "В корзину" при смене товара,
 *  скрипт которой написан в файле detail_2.js
 */

ButtonAddToCart()

function ButtonAddToCart(){

let btnToCart = document.querySelectorAll ('.btnToCart')

btnToCart.forEach(function (btnToCart){
    //№1 клик по ' ВКорзину' вызовет ф-цию extractDescript
btnToCart.addEventListener ('click' , function (event){
    extractDescript (event);

  // Ф-ции из файла calcCard_3.js (математика): 
  // а).клик "ВКорзину" -> посчитает в кружочке, 
    calcAmount ( )

  // б). клик в окшке (увелич. кол-ва ШТУК) -> п/считает в кружочке,
    reCalcAmount ( )

    // в). Считает сумму за цена*товар только 1 раз 
    // (при первичном клике 'ВКорзину')
     calcSubPrice( )

     // г). Считает строку 'Итого' только 1 раз 
    // (при первичном клике 'ВКорзину')
     calcTotalPrice( )

    })
})


//№1.1. Перекиент сюда от нажатия на кнопку ' ВКорзину'
function extractDescript (eventExtr){
     console.log('тест клика по  ВКорзину')

    const descriptDiv = document.querySelector ('.descript');
 
    // 1.2 объект и его сво-ва
    const descriptObj = {
        wrap: descriptDiv,//обертка для тегов имя, цена, размер
        name: descriptDiv.children[0].textContent, //имяТовара
        price: descriptDiv.children[2].textContent,//ценаТовара

        // size: descriptDiv.children[1].children[0].value // Выбранный Размер(v.1)
        size:descriptDiv.children[1].firstElementChild.value // Выбранный Размер(v.2)
    }

    
    //<hr>: (к ней  привязка - при вставке Новых товаров в Корзину)
    const hr_line = document.querySelector ('.hr_line');

    //1.3. <hr>: выставка HTML-кода: `div c Имя, Цена, Кол-во, Общ.цена`
    hr_line.insertAdjacentHTML ('beforebegin' , `
            <div class="cart_top">
            <div class="prodName"> ${descriptObj.name} </div>
            <div class="size"> ${descriptObj.size}  </div>
            <div class="prodPrice"> ${descriptObj.price} </div>
            <input type="number" class="inputPrice" min="1" max="99" value="1">
            <div class="subPrice">0.00</div> 
            </div>  `)

}//function extractDescript(): end


}


/*№2. Без кода этой главы  - корзина ВСЕГДА видна */
function cartShowHidden ( ){
  let cartDiv = document.querySelector('.cart')
  cartDiv.classList.toggle ('cart_ShowHidden')
}

document.querySelector ('.top_band').addEventListener('click' , cartShowHidden)

