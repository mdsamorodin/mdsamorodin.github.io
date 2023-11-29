import tabs from './modules/tabs';
import timer from './modules/timer';
import modals from './modules/modals';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';
import calculator from './modules/calculator';

document.addEventListener('DOMContentLoaded', () => {
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active')
    timer('.timer', '2023-10-20')
    modals('[data-modal]', '.modal')
    cards()
    forms('form')
    slider('.offer__slider-wrapper')
    calculator()
})