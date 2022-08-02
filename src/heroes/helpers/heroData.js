import { heroes } from '../data/heroes'


export const getHeroesByPublisher = (publisher) => {
    return heroes.filter((hero) => {
        return hero.publisher == publisher
    })
}

export const getHeroeById = (id) => {
    return heroes.find((hero) => hero.id == id)
}

export const getPublishers = () => {
    const contadores = {};

    for (var i = 0; i < heroes.length; i++) {
        if (!contadores.hasOwnProperty(heroes[i].publisher)) {
            contadores[heroes[i].publisher] = 0;
        }
        contadores[heroes[i].publisher]++;
    }

    return contadores
}

export const getHeroByName = (name = '') => {
    name = name.toLowerCase().trim();

    if (name.length === 0) return []

    return heroes.filter((hero) => {
        const superHero = hero.superhero.toLowerCase();
        return superHero.includes(name)
    })


}