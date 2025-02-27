import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  pokemonImage: string = '';
  pokemonImage2: string = '';
  pokemonId:          string | number = 0;
  pokemonName:        string         = '';
  pokemonType:        string         = '';
  pokemonDescription: string         = '';
  mostrarPokemon=false;
  // ngOnInit() {
  //   this.getPokemonWithFetch();
  // }

  getPokemonWithFetch(id:number|string) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(response => response.json())
      .then(data => {
        this.mostrarPokemon=true;
        this.pokemonImage = data.sprites.front_default;
        this.pokemonName = data.name;
        this.pokemonType = data.types[0].type.name;
        this.pokemonId = data.id;
        this.pokemonImage2 = data.sprites.other.dream_world.front_default

        console.log('Fetch:', data)
      })
      .catch(error =>{
        console.error('Error con Fetch:', error);
        this.mostrarPokemon=false;
      } )
  }

}
