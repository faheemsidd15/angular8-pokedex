import { Component, OnInit } from "@angular/core"
import { GetGen } from "../helpers/getGen"
import { DataService } from "../data.service"

@Component({
  selector: "app-gen3",
  templateUrl: "./gen3.component.html",
  styleUrls: ["./gen3.component.scss"]
})
export class Gen3Component implements OnInit {
  imageStyle: boolean = false
  thirdGen = {
    gen: "3rd Generation",
    pokemon: []
  }

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getPokemonNames(135, 251).subscribe(data => {
      this.thirdGen.pokemon = data["results"].map((data, index) => {
        const numbers = GetGen(252, 386)
        return {
          name: data.name,
          number: numbers[index],
          url: data.url
        }
      })
    })
  }
}
