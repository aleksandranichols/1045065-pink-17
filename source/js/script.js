var mainNav = document.querySelector('.main-navigation');
var mainHeader = document.querySelector('.main-header');
var mainNavToggle = document.querySelector('.main-navigation__toggle');

  mainNav.classList.remove('main-navigation--nojs');
  mainNav.classList.remove('main-header--nojs');

  mainNavToggle.addEventListener('click', function() {
    if (mainNav.classList.contains('main-navigation--closed')) {
      mainNav.classList.remove('main-navigation--closed');
      mainHeader.classList.remove('main-header--closed');
      mainNav.classList.add('main-navigation--opened');
      mainHeader.classList.add('main-header--opened');
    } else {
      mainNav.classList.add('main-navigation--closed');
      mainHeader.classList.add('main-header--closed');
      mainNav.classList.remove('main-navigation--opened');
      mainHeader.classList.remove('main-header--opened');
    }
  });
