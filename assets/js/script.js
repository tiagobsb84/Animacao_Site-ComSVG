import { Cards } from './cards.js';
import { Icones } from './icones.js';
import { Footer } from './Footer.js';

window.onload = () => {
    let animaCards = new Cards();

    document.addEventListener('scroll', animaCards.scrollCards.bind(animaCards));

    let icones = new Icones();
    icones.animaIcons();

    let footer = new Footer();
    footer.efeitoOnda();
}