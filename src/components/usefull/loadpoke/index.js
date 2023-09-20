import { convertNum } from '../convertNum'

export const loadPoke = async () => {
  const pokemonsfetch = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1015&offset=0')
  const [pokemonsAWAIT] = await Promise.all([pokemonsfetch])
  const pokemonsJSON = await pokemonsAWAIT.json()
  const poke_complete = pokemonsJSON['results'].map((obj, index) => {
    return {
      ...obj,
      img: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${convertNum(index)}.png`,
      id: index
    }
  })
  return poke_complete
}