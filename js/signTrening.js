
/**
 * Запись на тренировку
 * Клик на закладку (tab) => появился уникальный текст этой закладки
 */
 
 let tabBtn_El = document.querySelectorAll ('.tabBtn')

 let content_El = document.querySelectorAll ('.content')


 //№1. Среди всех табов ищу нажатый и даю ему задание  -что сделать
 tabBtn_El.forEach (function (tabBtn){
     tabBtn.addEventListener ('click', function (event){
         
        //console.log (event.target)
        removeAddClass (event) // В (п.2) ф-ция: удаление + добавление класса 

        content (event)
     })
 })

 // #2/ Ф-ция для двухходовки:
 // 1.1) Удаление у ВСЕХ ТАБов (tabBtn_El) классов 'activeLink'
 // 1.2) добавление класса в сам ТАБ (e.target) */
 function removeAddClass (e){
    for (let i = 0; i < tabBtn_El.length; i++){
        tabBtn_El[i].classList.remove('activeLink')//удалил класс везде
    }

    e.target.classList.add ('activeLink') // создал класс в кликнутом ТАБе
 }

 // #3. Ф-ция для контента: удалил везде, 
 // Если ТАБ содержит класс  'tabBtn activeLink' тогда
 // тексту присвоить класс видимости  'activeContent'
 function content (e) {

    for (let i = 0; i < content_El.length; i++){
        content_El[i].classList.remove ('activeContent') //убрал контент везде

        if (tabBtn_El[i].classList.value == 'tabBtn activeLink'){
            content_El[i].classList.add ('activeContent')
        }
    }

 }


 /**Для АККОРДЕОНА */
 let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
