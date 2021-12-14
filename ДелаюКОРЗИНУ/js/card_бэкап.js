let btnToCart = document.querySelector ('.btnToCart')

//№1 клик по ' ВКорзину' вызовет ф-цию extractDescript
btnToCart.addEventListener ('click' , extractDescript)


//№1.1. Перекиент сюда от нажатия на кнопку ' ВКорзину'
function extractDescript (eventExtr){
    // console.log('тест клика по  ВКорзину')

    const descriptDiv = document.querySelector ('.descript');
 
    // 1.2 объект и его сво-ва
    const descriptObj = {
        wrap: descriptDiv,//не ясно-для чего
        name: descriptDiv.children[0].textContent, //имяТовара
        price: descriptDiv.children[2].textContent,//ценаТовара

 
    }


  

    //<hr>: (к ней  привязка - при вставке Новых товаров в Корзину)
    const hr_line = document.querySelector ('.hr_line');

    //1.3. <hr>: выставка HTML-кода: `div c Имя, Цена, Кол-во, Общ.цена`
    hr_line.insertAdjacentHTML ('beforebegin' , `
            <div class="cart_top">
            <div class="prodName"> ${descriptObj.name} </div>
            <div class="size">_XXL_ </div>
            <div class="prodPrice"> ${descriptObj.price} </div>
            <input type="number" class="inputPrice" min="1" max="99" value="1">
            <div class="subPrice">0.00</div> 
            </div>  `)
 
 getSize( );

}//function extractDescript(): end



//обращение к ф-ции Определения размера
//№2. Работа с кликом по кнопке "Размер"            
    function getSize (){

        let sizeBtn = document.querySelectorAll ('.size_btn');
        let sizeEl  = document.querySelector ('.size')
        
        /*Клик по кнопке: Получу ее значение (data-size=...) */ 
        sizeBtn.forEach (function (e){
            e.addEventListener ('click' , function (){
              sizeEl.innerText = e.innerText ;
 
                //return e.dataset.size;
                 //console.log( dataSize);
                
            })
        })

    }





