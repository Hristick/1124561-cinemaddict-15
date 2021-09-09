import { createHeaderAvatar } from './view/header-avatar';
import { createNavigation } from './view/navigation';
//import { createStatistic } from './view/statistic';
import { createFilms } from './view/films';
import { createFilmListSort } from './view/list-sort';
import { createFooterStat } from './view/footer-stat';
import { showMore } from './view/show-more';
import { createList } from './view/list';
import { createFilmsCard } from './view/film-card';
//import { createPopup } from './view/popup';
//import { createComment } from './view/popup-comment';

const FilmListTypes = {
  ALL_FILMS: {
    title: 'All movies. Upcoming',
    isHidden: true,
    isExtra: false,
  },
  TOP_MOVIES: {
    title: 'Top rated',
    isHidden: false,
    isExtra: true,
  },
  COMMENTED_MOVIES: {
    title: 'Most commented',
    isHidden: false,
    isExtra: true,
  },
};

const MAX_FILM_CART = 5;
const MAX_FILM_CART_EXTRA = 2;

const renderComponent = (container, template, place = 'beforeend') => {
  container.insertAdjacentHTML(place, template);
};

const renderFilmCards = (container, count) => {
  for (let index = 0; index < count; index++) {
    renderComponent(container, createFilmsCard());
  }
};

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footerStat = document.querySelector('.footer__statistics');

renderComponent(header, createHeaderAvatar());
renderComponent(main, createNavigation());
//renderComponent(main, createStatistic());
renderComponent(main, createFilmListSort());
renderComponent(main, createFilms());
const films = document.querySelector('.films');

renderComponent(films, createList(FilmListTypes.ALL_FILMS));
const filmListContainer = films.querySelector('.films-list__container');
const filmList = document.querySelector('.films-list');
renderFilmCards(filmListContainer, MAX_FILM_CART);
renderComponent(filmList, showMore());
renderComponent(films, createList(FilmListTypes.TOP_MOVIES));
renderComponent(films, createList(FilmListTypes.COMMENTED_MOVIES));

const filmListExtraContainer = document.querySelectorAll('.films-list--extra .films-list__container');
renderFilmCards(filmListExtraContainer[0],MAX_FILM_CART_EXTRA);
renderFilmCards(filmListExtraContainer[1],MAX_FILM_CART_EXTRA);

//renderComponent(main, createPopup());
//const commentContainer = main.querySelector('.film-details__comments-list');
//for (let index = 0; index < COMMENTS_COUNT; index++){
// renderComponent(commentContainer, createComment());
//}


renderComponent(footerStat, createFooterStat());
