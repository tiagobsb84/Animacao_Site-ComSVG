import { Cards } from './cards.js';

window.onload = () => {
    let animaCards = new Cards();

    document.addEventListener('scroll', animaCards.scrollCards.bind(animaCards));
}