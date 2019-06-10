import { Component, OnInit } from "@angular/core"
import { GetGen } from "../helpers/getGen"
import { DataService } from "../data.service"

@Component({
  selector: "app-gen7",
  templateUrl: "./gen7.component.html",
  styleUrls: ["./gen7.component.scss"]
})
export class Gen7Component implements OnInit {
  seventhGen = {
    gen: "7th Generation",
    pokemon: []
  }

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getPokemonNames(86, 721).subscribe(data => {
      this.seventhGen.pokemon = data.results.map((data, index) => {
        const numbers = GetGen(722, 809)
        return {
          name: data.name,
          number: numbers[index],
          url: data.url
        }
      })
    })
  }
}
