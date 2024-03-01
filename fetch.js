const APIKEY = "8a93b3615f876af850d759c7ff217f98";
const listURL = "https://api.themoviedb.org/3/tv/changes"

async function fetchMovies() {
  const response = await fetch(`https://api.themoviedb.org/3/movie/1895?api_key=${APIKEY}`)
  const data = await response.json()

  console.log(`Titre : ${data.title} \nPoster : https://image.tmdb.org/t/p/original${data.poster_path}`);
}

fetchMovies()

async function fetchPokemon() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/25`)
  const data =  await response.json()

  console.log(`Nom : ${data.name} \nImage : ${data.sprites.other['official-artwork'].front_default}`);
}

fetchPokemon()