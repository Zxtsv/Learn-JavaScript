fetch('https://pokeapi.co/api/v2/pokemon/39/')
.then(respuesta => respuesta.json())
.then(pokemon => {
  let element = document.getElementById('elemento1')
  element.innerHTML = `<p> Nombre: ${pokemon.name}<p>
  <img src='${pokemon.sprites.front_default}'><p> Height:${pokemon.height}<p><p> Weight: ${pokemon.weight}<p><p>ID: ${pokemon.id}<p>`;
  console.log(pokemon)
})
.catch(err=>console.log(err))

fetch('https://pokeapi.co/api/v2/pokemon/77/')
.then(response => response.json())
.then(pokemon2 => {
  let element2 = document.getElementById('elemento2')
  element2.innerHTML = `<p> Nombre: ${pokemon2.name}<p>
  <img src='${pokemon2.sprites.front_default}'><p>Height: ${pokemon2.height}<p><p> Weight: ${pokemon2.weight}<p><p>ID: ${pokemon2.id}<p>`;
  console.log(pokemon2)
})
.catch(err=>console.log(err))

fetch('https://pokeapi.co/api/v2/pokemon/173/')
.then(response => response.json())
.then(pokemon3 => {
  let element3 = document.getElementById('elemento3')
  element3.innerHTML = `<p> Nombre: ${pokemon3.name}<p>
  <img src='${pokemon3.sprites.front_default}'><p>Height: ${pokemon3.height}<p><p> Weight: ${pokemon3.weight}<p><p>ID: ${pokemon3.id}<p>`;
  console.log(pokemon3)
})
.catch(err=>console.log(err))