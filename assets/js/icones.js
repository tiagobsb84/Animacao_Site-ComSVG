class Icones {
    constructor() {
        this.icon = document.querySelectorAll('.icone');
    }

    animaIcons() {
        TweenMax.to(this.icon, 0.5, { scale: 0.95, repeat: -1, yoyo: true })
    }
}

export { Icones };