import { Component } from '@angular/core';
import { PokemonService } from '../sevices/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {


  
  pokemonList: any[] = [];
  currentIndex:number=0;
  colorArray: any[] = ["grass", "fire", "water", "other"]
  typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#ff0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#efb549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190ff"
};
displayedPokemon: any;
pokemon: any;
  constructor(private apiService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonList()
    

  }
  getPokemonList(){
    this.apiService.getPokemonList().subscribe(
      {
        next: (res: any) => {
          if(res != null)
          {
            this.getPokemonData(res.results)
          }
        }
      }
    );
  }

  getPokemonData(pokemonArray): void {
    this.pokemonList = [];
    for (const pokemon of pokemonArray) {
      const pokemonId = this.extractPokemonId(pokemon.url);
      this.apiService.getPokemonDetails(pokemonId).subscribe(
        (details) => {
          const pokemonData = {
            name: details.name,
            image: details.sprites.other.dream_world
              .front_default,
            hp: details.stats[0].base_stat,
            attack: details.stats[1].base_stat,
            defense: details.stats[2].base_stat,
            speed: details.stats[5].base_stat,
            types: details.types

          };
          this.pokemonList.push(pokemonData);
                    this.generateRandomPokemon()

        },
        (error) => {
          console.error(`Error fetching details for ${pokemon.name}:`, error);
        }
      );
    }
  }

  private extractPokemonId(url: string): number {
    const urlParts = url.split('/');
    return +urlParts[urlParts.length - 2];
  }


  getColor(type) {
    const themeColor = this.typeColor[type];
    return themeColor

  }

  getCardColor(type){
    const color = this.typeColor[type];
    let styleCard = `radial-gradient( circle at 30% 0%, ${color} 26%, #efffff 66%)`;
    return styleCard
  
    
  
  }
  
  generateRandomPokemon(): void {
    
    const randomIndex = Math.floor(Math.random() * this.pokemonList.length);
    this.displayedPokemon = this.pokemonList[randomIndex];


}

  

  



}
