import { Component, OnInit } from "@angular/core"
import { GetGen } from "../helpers/getGen"
import { DataService } from "../data.service"
@Component({
  selector: "app-gen6",
  templateUrl: "./gen6.component.html",
  styleUrls: ["./gen6.component.scss"]
})
export class Gen6Component implements OnInit {
  sixthGen = {
    gen: "6th Generation",
    pokemon: []
  }

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getPokemonNames(72, 649).subscribe(data => {
      this.sixthGen.pokemon = data["results"].map((data, index) => {
        const numbers = GetGen(650, 721)
        return {
          name: data.name,
          number: numbers[index],
          url: data.url
        }
      })
    })
  }
}
