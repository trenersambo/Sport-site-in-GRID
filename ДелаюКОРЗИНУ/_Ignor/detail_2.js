/**Скрипт для кнопки "ПОДРОБНЕЕ" в гл.№3
 * ДРУГИЕ Карточки ТОВАРОВ (other_item)
 * 
 * I. Ход (убираю катрточку ВЫБРАННОГО ТОВАРА): 
 * 1.сбор данных в obj ={св-тва}
 * 2.obj вставляю в конец списка 
 * ДРУГИХ Карточек ТОВАРОВ
 * 3. Классу item присвоить display: none
 * 
 * II. Ход (Карточку из ПОДРОБНЕЕ добавить в ВыбранныйТовар)
 * 1.(?) сбор свойств в obj
 * 2. (?)вставка в блок ВЫБРАННЫЙ ТОВАР*/

 //№1. Ссылка на кнопку "ПОДРОБНЕЕ"
 let btn_detail = document.querySelectorAll ('.btn_detail');

 // #2. Перебор (т.к. одноименныъ кнопок много)
 // Клик по кнопке "ПОДРОБНЕЕ" вызывает ф-цию,
 // которая заползает внутрь нужного div'a!
 btn_detail.forEach (function(btn_detail){
    btn_detail.addEventListener ('click' , function (event){
    fromOther (event)
    }) ;
 })
 
 //№2.1. Что делает функция от клика:
 // а). создать ссылки с которыми надо работать
 // б). создать Объект карточку товара
 // в). привязка к местоположению: куда-что вставить
 function fromOther (clickBtnEvent){

    //покажет содержание целевого div'a (на котор. кликнул кнопкой!)
    console.log( clickBtnEvent.target.parentNode)
    console.log( event.target.parentNode)

    
    // +а1) ссылка на выбранную 'ДругуюКарточку' с  class="other_item_img 
    //( фото, имя, размер, цена -> в Карточку ТОВАРА)
    //let otherDiv = document.querySelectorAll ('.other_item_img');


    // +а2) ссылка на  class="insertCart" 
    // (тег, после которого будет вставляться Карточка_Товара, 
    // у которой нажал кнопку "ПОДРОБНЕЕ")
    let insertCartDiv = document.querySelector('.insertCart');


    // Б). объект и его сво-ва из выбранного ДругогоТовара!
    // *) Это нужно для вставки в Карточку ТОВАРА (div с фото)
    // *) Это нужно для вставки в Карточку ТОВАРА (div с Имя, Размер, Цена)
   
    let obj_insert = {

 wrap:  event.target.parentNode,// родительский div, в который оборнуты потомки (фото, имя, цена...)
 foto: clickBtnEvent.target.parentNode.firstElementChild.attributes[1].value,  // Фото_Товара: "img/foto-1.jpg"
 name: event.target.parentNode.querySelector ('.name'),    //имя_Товара: "*Товар_1"
 size:  event.target.parentNode.querySelector ('.size'), // Размер_Товара: "*Размер S_ M_ L_ XXL_↵" 
 price: event.target.parentNode.querySelector ('.price'),  //цена_Товара: "*100   "
 write: event.target.parentNode.querySelector ('.write'), //Описание_Товара: "*Товар_№1:  Lorem ipsum ..."
       
           }
   console.log (obj_insert.foto)
   
 

    // В). На выбранный tag вставляю HTML-код
   // - дописать ${   } 
   insertCartDiv.insertAdjacentHTML   ('afterend' , 
 
   
   `<div class="item">

        <!--2.1 ячейка Товар_фото -->
       <div class="item_img">
           <img class="foto_item" src="${obj_insert.foto} " alt="">

       </div>

       <!-- 2.2 ячейка ОПИСАНИЕ  -->
       <div class="descript">

            <div class="name">${obj_insert.name.innerText}  </div>

            <div class="size">*Размер 
                <select name="size" class="sizeSelect">
                    <option value="xl_1">1XL</option>
                    <option value="xl_2">2XL</option>
                </select>

            <!-- <div class="size_btn" >M</div>
            <div class="size_btn" >XL</div> -->
            </div>

            <div class="price">${obj_insert.price.innerText}    </div>
            <div class="write"> ${obj_insert.write.innerText} </div>
            </div>

       <!-- 2.3 ячейка Превью Товара Мини-фото(preview)-->
       <div class="preview_Item"> 
           <img class = "pre_foto" src="img/pf_501.jpg" alt="">
           <img class = "pre_foto" src="img/pf_502.jpg" alt="">
           <img class = "pre_foto" src="img/pf_503.jpg" alt="">
       </div>

       <!--2.4. Кнопка В КОРЗИНУ  (AddToCart)-->
        <div class="toCart">
            <button type="submit" class="btnToCart">В корзину</button>
        </div>

        
    </div>
   
    `)
 


 }
 
  