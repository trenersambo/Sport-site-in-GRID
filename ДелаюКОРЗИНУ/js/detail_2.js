/**Скрипт для кнопки "ПОДРОБНЕЕ" в гл.№3 (файл html)
 * 'ДРУГИЕ Карточки ТОВАРОВ' (other_item)
 * 
 * 1. ссылка на кнопки "ПОДРОБНЕЕ" и их перебор в поиске кликнутой
 * 2. даю задачу (function) кликнутой кнопке 
 *  2.1. создаю объект выбранного товара
 *  2.2. удалаяю "старый" блок товара
 *  2.3. вместо удаленного - вставлю выбранный товар
 * 3. Подключил ф-цию для нового товара "В корзину"
 * */

 //№1. Ссылка на кнопку "ПОДРОБНЕЕ"
 let btn_detail = document.querySelectorAll ('.btn_detail');

 // #1.1. Перебор (т.к. одноименныъ кнопок много)
 // Клик по кнопке "ПОДРОБНЕЕ" вызывает ф-цию,
 // которая заползает внутрь нужного div'a!
 btn_detail.forEach (function(btn_detail){
    btn_detail.addEventListener ('click' , function (event){
        
        fromOther (event) // см. п 1.3.
    }) ;
 
 })


 //№2. Что делает функция от клика:
 // а). создать ссылки с которыми надо работать
 // б). создать Объект карточку товара
 // в). привязка к местоположению: куда-что вставить
 function fromOther (clickBtnEvent){

    // покажет содержание целевого div'a (на котор. кликнул кнопкой!)
    //  console.log( clickBtnEvent.target.parentNode)
    //  console.log( event.target.parentNode)

   
    // a1) ссылка на  class="item" 
    // (удаляем тег "item" от нажатия кнопки "ПОДРОБНЕЕ")
    // так происходит смена блоков  с выбранным товаром 
    let itemDiv = document.querySelector('.item');
    itemDiv.remove( );

    // б). объект и его сво-ва из выбранного "ДругогоТовара"!
    // *) Это нужно для вставки в Карточку ТОВАРА (div с фото)
    // *) Это нужно для вставки в Карточку ТОВАРА (div с Имя, Размер, Цена)
    // все ссылки - Относительно кликнутой Кнокпи:
    let obj_insert = {
                              
 wrap:  event.target.parentNode,// родительский div, в который оборнуты потомки (фото, имя, цена...)
 foto: clickBtnEvent.target.parentNode.firstElementChild.attributes[1].value,  // Фото_Товара: "img/foto-1.jpg"
 name: event.target.parentNode.querySelector ('.name'),    //имя_Товара: "*Товар_1"
size: clickBtnEvent.target.parentNode.children[2].innerHTML ,// Размер_Товара
 price: event.target.parentNode.querySelector ('.price'),  //цена_Товара: "*100   "
 write: event.target.parentNode.querySelector ('.write'), //Описание_Товара: "*Товар_№1:  Lorem ipsum ..."
  prew:event.target.parentNode.querySelector ('.preview_Item'),//3_фото_Для_Предпросмотра
           }
  // console.log (obj_insert.wrap)
   
 
   //а2). ссылка на тег, перед которым вставляю вновь выбранный Товар из "Других" 
   let targetTag_div = document.querySelector('.targetTag');

    // в). На выбранный tag вставляю HTML-код  
   // - Путь указываю через ${ данные из Объекта.свойства }
   targetTag_div.insertAdjacentHTML   ('beforebegin' , 
 
   
   `   
    <div class="item">
        <!--2.1 ячейка Товар_фото -->
       <div class="item_img">
           <img class="foto_item" src="${obj_insert.foto} " alt="">

       </div>

       <!-- 2.2 ячейка ОПИСАНИЕ  -->
       <div class="descript">

            <div class="name">${obj_insert.name.innerText}  </div>

            <div class="size"> ${obj_insert.size}  </div>

            <div class="price">${obj_insert.price.innerText}    </div>
            <div class="write"> ${obj_insert.write.innerText} </div>
            </div>

       <!-- 2.3 ячейка Превью Товара Мини-фото(preview)-->
       <div class="preview_Item"> ${obj_insert.prew.innerHTML} </div>

       <!--2.4. Кнопка В КОРЗИНУ  (AddToCart)-->
        <div class="toCart">
            <button type="submit" class="btnToCart">В корзину</button>
        </div>

        </div>
   
    `)
        
        // АВТОСКРОЛЛ на верх (после попадания выбранного товара из "Другой" в "Выбранный")
        // ToDo: доделать, чтоб была плавная прокуртка вверх
        scroll(0,0); 

 
        // №3.Только так работает кнопка "В корзину", когда сменил Карточку Товар
        ButtonAddToCart()

 }

  