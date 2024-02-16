import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private httpClient:HttpClient ) {

  }
  getPokemonList(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}?limit=10`);
  }

  getPokemonDetails(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/${id}`);
  }

}


