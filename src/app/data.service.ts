import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPokemonNames(range, offset) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/?limit=${range}&offset=${offset}`)
  }
  getPokemon(url) {
    return this.http.get(url)
  }
}
