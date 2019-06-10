import { Component, OnInit } from "@angular/core"
import { GetGen } from "../helpers/getGen"
import { DataService } from "../data.service"
@Component({
  selector: "app-gen4",
  templateUrl: "./gen4.component.html",
  styleUrls: ["./gen4.component.scss"]
})
export class Gen4Component implements OnInit {
  fourthGen = {
    gen: "4th Generation",
    pokemon: []
  }
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getPokemonNames(107, 386).subscribe(data => {
      this.fourthGen.pokemon = data.results.map((data, index) => {
        const numbers = GetGen(387, 493)
        return {
          name: data.name,
          number: numbers[index],
          url: data.url
        }
      })
    })
  }
}
