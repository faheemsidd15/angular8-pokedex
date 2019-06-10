import { Component, OnInit } from "@angular/core"
import { GetGen } from "../helpers/getGen"
import { DataService } from "../data.service"

@Component({
  selector: "app-gen1",
  templateUrl: "./gen1.component.html",
  styleUrls: ["./gen1.component.scss"]
})
export class Gen1Component implements OnInit {
  imageStyle: boolean = false

  firstGen = {
    gen: "1st Generation",
    pokemon: []
  }

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getPokemonNames(151).subscribe(data => {
      this.firstGen.pokemon = data.results.map((data, index) => {
        const numbers = GetGen(1, 151)
        return {
          name: data.name,
          number: numbers[index],
          url: data.url
        }
      })
    })
  }
}
