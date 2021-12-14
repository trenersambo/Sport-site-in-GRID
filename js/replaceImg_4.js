
/*Скрипт для: 
*клик по превью (маленькоеФото) -> становится БольшимФото
* а большоеФото -> становится маленькоеФото
*/

function replace (){


//#1. ссылки на БОЛЬШОЕ_ФОТО и ПРЕВЬЮ
let fotoTopDiv = document.querySelectorAll('.item_img') ; 
let fotoPrewDiv = document.querySelectorAll('.preview_Item') ; 

//#2.Перебор клика по ПРЕВЬЮ -> вызов ф-ции
fotoPrewDiv.forEach (function (preview_Item) {
    preview_Item.addEventListener ('click' , function (event){
        replaceTopToPrew (event)   
        fotoClick (event) 
    })
}) 

//#3. замена картинки: ПРЕВЬЮ --улетает в--> БОЛЬШОЕ_ФОТО
function fotoClick (e) {
    //вместо БОЛЬШОЕ_ФОТО ставим ПРЕВЬЮ
    fotoTopDiv[0].children[0].attributes[1].value = `${e.target.attributes[1].value}`
   
    //ПРЕВЬЮ удалить, чтоб освободить место для вставки вместо ее БОЛЬШОЕ_ФОТО
    e.target.remove()
}



//#4. замена (replacement) БОЛЬШОЕ_ФОТО --улетает в--> ПРЕВЬЮ
function replaceTopToPrew (e) {
   // console.log ('test 2')
   fotoPrewDiv[0].insertAdjacentHTML('beforeEnd',   `
   <img class = "pre_foto" src="${fotoTopDiv[0].children[0].attributes[1].value}" alt="">
   `)

}

} //function replace(): end

//срабатывает на один раз - при первичном открытии страницы,
// потом эту ф-цию перехватывает файл detail_2.js (см. в нем внизу)
replace ()