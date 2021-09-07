import { createHeaderAvatar } from './view/header-avatar';
import { createNavigation } from './view/navigation';
import { createStatistic } from './view/statistic';
import { createFilmListSort } from './view/list-sort';
import { createFooterStat } from './footer-stat';
import { createListExtra } from './view/list-extra';
import { showMore } from './show-more';
import { createList } from './view/list';
import { createFilmsCard } from './view/film-card';
import { createPopup } from './view/popup';
import { createComment } from './view/popup-comment';

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
  ALL_MOVIES: {
    title: 'There are no movies in our database',
  },
  WATCH_LIST: {
    title: 'There are no movies to watch now',
  },
  HISTORY: {
    title: 'There are no watched movies now',
  },
  FAVORITES: {
    title: 'There are no favorite movies now',
  },
  LOADING: {
    title: 'Loading...',
  },
};

const MAX_FILM_CART = 5;
const MAX_FILM_CART_EXTRA = 2;
const COMMENTS_COUNT = 4;


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
renderComponent(main, createStatistic());
renderComponent(main, createFilmListSort());
renderComponent(main, createList(FilmListTypes.ALL_FILMS.title));

const filmList = document.querySelector('.films-list');
const filmListContainer = filmList.querySelector('.films-list__container');

renderFilmCards(filmListContainer, MAX_FILM_CART);
renderComponent(filmList, showMore());

renderComponent(filmList, createListExtra(FilmListTypes.TOP_MOVIES.title));
renderComponent(filmList, createListExtra(FilmListTypes.COMMENTED_MOVIES.title));
const filmListExtraContainer = document.querySelectorAll('.films-list--extra .films-list__container');
for (let index = 0; index < MAX_FILM_CART_EXTRA; index++) {
  renderFilmCards(filmListExtraContainer[index], MAX_FILM_CART_EXTRA);
}

renderComponent(main, createPopup());
const renderedCommentsCount = main.querySelector('.film-details__comments-count');
renderedCommentsCount.textContent = COMMENTS_COUNT;
const commentContainer = main.querySelector('.film-details__comments-list');
for (let index = 0; index < COMMENTS_COUNT; index++){
  renderComponent(commentContainer, createComment());
}


renderComponent(footerStat, createFooterStat());
