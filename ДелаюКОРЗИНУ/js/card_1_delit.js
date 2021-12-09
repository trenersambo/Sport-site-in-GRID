
function delit(){

let btnToCart = document.querySelectorAll ('.btnToCart')

btnToCart.forEach(function (btnToCart){
    //№1 клик по ' ВКорзину' вызовет ф-цию extractDescript
btnToCart.addEventListener ('click' , function (event){
    extractDescript (event)
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


