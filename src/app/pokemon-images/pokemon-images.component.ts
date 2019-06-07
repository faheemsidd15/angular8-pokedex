import { Component, OnInit, Input } from "@angular/core"

@Component({
  selector: "app-pokemon-images",
  templateUrl: "./pokemon-images.component.html",
  styleUrls: ["./pokemon-images.component.scss"]
})
export class PokemonImagesComponent implements OnInit {
  @Input("pokemon") pokemon: any

  imageStyle: boolean = false
  location: string = "assets/images/pokemon/"

  someFunction(pokemon) {
    console.log(pokemon)
  }

  constructor() {}

  ngOnInit() {}
}
