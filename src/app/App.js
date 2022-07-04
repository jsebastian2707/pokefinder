import React , { Component } from 'react';
import PokeForm from './components/PokeForm';
import PokeInfo from './components/PokeInfo';
class App extends Component {
  state = {
    pokenum: '19',
    pokename: 'rattata',
    pokeimg: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
    pokeimg2: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png`,
    pokedesc: 'Vive allí donde haya comida disponible. Busca todo\nel día, sin descanso, algo comestible.',
  }

  async getPokemon(pokenum) {
    // funcion para hacer la peticion a la api
    const base_url = `https://pokeapi.co/api/v2/pokemon/${pokenum}`;
    const res = await fetch(base_url);
    const data = await res.json();
    const res2 = await fetch(data.species.url);
    const data2 = await res2.json();
    let imgn=""+pokenum;
    while(imgn.length<3){
      imgn="0"+imgn;
    }
    this.setState({
      pokenum: data.id,
      pokename: data.name,
      pokeimg: data.sprites.front_default,
      pokeimg2: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imgn}.png`,
      pokedesc: this.desc_selector(data2),
    }); 
  }

  desc_selector = (data) => {
    let desc;
    data.flavor_text_entries.forEach(element => {
      if(element.language.name=="es"){
        console.log(element.flavor_text);
        desc = element.flavor_text;
      }
    });
    if(desc==undefined){
      desc = data.flavor_text_entries[0].flavor_text;
    }
    return desc;
  }
  
  formTrigger = e => {
    //el evento del form
    e.preventDefault();
    const pokenum =(e.target.elements[0].value);
    this.getPokemon(pokenum);
  }
  ramdonPokemon = () => {
    // retorna un valor aleatorio valido para pokemons
    let pokenum = Math.floor(Math.random() * 898) + 1;
    this.getPokemon(pokenum);
  }
  render() {
    return (
      <div className='container p-4'>
          <div className='row'>
              <div className='col-md-6 mx-auto'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/archive/9/98/20110819041634%21International_Pokémon_logo.svg" alt="poke" />
                <PokeForm formTrigger={this.formTrigger} ramdonPokemon={this.ramdonPokemon}/>
                <PokeInfo {... this.state} />
              </div>
          </div>
      </div>
    );  
  }
}
export default App;

//   ▄▀▀▄ ▀▀▄  ▄▀▀▄ ▄▀▀▄  ▄▀▀▀▀▄  ▄▀▀█▄▄▄▄ 
//  █   ▀▄ ▄▀ █   █    █ █ █   ▐ ▐  ▄▀   ▐ 
//  ▐     █   ▐  █    █     ▀▄     █▄▄▄▄▄  
//        █     █    █   ▀▄   █    █    ▌  
//      ▄▀       ▀▄▄▄▄▀   █▀▀▀    ▄▀▄▄▄▄   
//      █                 ▐       █    ▐   
//      ▐                         ▐   
