import { Component, OnInit } from "@angular/core"
import { GetGen } from "../helpers/getGen"
import { DataService } from "../data.service"

@Component({
  selector: "app-gen5",
  templateUrl: "./gen5.component.html",
  styleUrls: ["./gen5.component.scss"]
})
export class Gen5Component implements OnInit {
  fifthGen = {
    gen: "5th Generation",
    pokemon: []
  }
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getPokemonNames(156, 493).subscribe(data => {
      this.fifthGen.pokemon = data.results.map((data, index) => {
        const numbers = GetGen(494, 649)
        return {
          name: data.name,
          number: numbers[index],
          url: data.url
        }
      })
    })
  }
}
