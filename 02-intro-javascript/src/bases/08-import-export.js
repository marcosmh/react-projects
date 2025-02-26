//import { heroes } from './data/heroes.js'
//import {heroes} from './data/heroes'

import { heroes } from '../data/heroes'

//console.log(heroes);


export const getHeroesById = (id) => {
    return heroes.find( (heroes) => heroes.id === id);
}

export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

//console.log( getHeroesById(2) );

//console.log( getHeroesByOwner('Marvel') );