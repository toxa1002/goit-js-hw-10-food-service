import './sass/main.scss';
import cardInfo from './menu.json';
import cardTemplate from './data-menu-markup/menu-markup.hbs';
const cardListRef = document.querySelector('.menu');
const markup = cardTemplate(cardInfo);
cardListRef.insertAdjacentHTML('afterbegin' , markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const toggleBtn = document.querySelector('input');
toggleBtn.addEventListener('change' , onToggleBtnClick);

if (localStorage.getItem('theme') === null || localStorage.getItem('theme') === Theme.LIGHT) {
  bodyRef.classList.add(Theme.LIGHT);
}

if(localStorage.getItem('theme') === Theme.DARK){
  toggleBtn.setAttribute('checked','checked');
  bodyRef.classList.add(Theme.DARK);
}else{
  bodyRef.classList.remove(Theme.DARK);
  toggleBtn.removeAttribute('checked');
}


function onToggleBtnClick(evt){
  if(evt.target.checked){
    bodyRef.classList.add(Theme.DARK)
    localStorage.setItem('theme' , Theme.DARK)
    bodyRef.classList.remove(Theme.LIGHT);
  }else{
    localStorage.setItem('theme' , Theme.LIGHT)
    bodyRef.classList.add(Theme.LIGHT)
    bodyRef.classList.remove(Theme.DARK)
  }
}