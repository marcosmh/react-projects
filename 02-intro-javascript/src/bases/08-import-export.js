//import { heroes } from './data/heroes.js'
//import {heroes} from './data/heroes'

import { heroes } from './data/heroes'

console.log(heroes);


const getHeroesById = (id) => {
    return heroes.find( (heroes) => heroes.id === id);
}

const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

console.log( getHeroesById(2) );

console.log( getHeroesByOwner('Marvel') );