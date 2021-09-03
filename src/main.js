import { createNavigation } from './view/navigation';
import { createEmptyFilmList } from './view/list-empty';
import { createHeaderAvatar } from './view/header-avatar';
import { createFooterStat } from './footer-stat';
//import { createFilmList } from './view/list-filter';
import { createLoad } from './view/load';
import { showMore } from './show-more';
import { createList } from './view/list';
import { createFilmsArray } from './view/film-array';
//import { createPopup } from './view/popup';
const MAX_FILM_CART = 5;
const MAX_FILM_CART_EXTRA = 2;
const films  = createFilmsArray();

const renderFilmCards = (count) => {
  const result = [];
  for (let index = 0; index < count; index++) {
    result.push(films[index]);
  } return result;
};


const renderComponent = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footerStat = document.querySelector('.footer__statistics');

renderComponent(header, createHeaderAvatar(), 'beforeend');
renderComponent(main, createNavigation(), 'beforeend');
renderComponent(main, createList(), 'beforeend');

const filmList = document.querySelector('.films-list');
const filmListContainer = filmList.querySelector('.films-list__container');
const filmListExtra = document.querySelector('.films-list--extra');
const filmListExtraContainer = filmListExtra.querySelector('.films-list__container');


renderComponent(filmListContainer, renderFilmCards(MAX_FILM_CART), 'beforeend');
renderComponent(filmListExtraContainer, renderFilmCards(MAX_FILM_CART_EXTRA), 'beforeend');


renderComponent(main, createEmptyFilmList(), 'beforeend');


renderComponent(filmList, showMore(), 'beforeend');
renderComponent(filmList, createLoad(), 'beforeend');
// Попап закомичен тк закрывает страницу
//renderComponent(main, createPopup(), 'beforeend');
renderComponent(footerStat, createFooterStat(), 'beforeend');
