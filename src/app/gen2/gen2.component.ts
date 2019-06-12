import { Component, OnInit } from "@angular/core"
import { GetGen } from "../helpers/getGen"
import { DataService } from "../data.service"

@Component({
  selector: "app-gen2",
  templateUrl: "./gen2.component.html",
  styleUrls: ["./gen2.component.scss"]
})
export class Gen2Component implements OnInit {
  imageStyle: boolean = false

  secondGen = {
    gen: "2nd Generation",
    pokemon: []
  }

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getPokemonNames(99, 151).subscribe(data => {
      this.secondGen.pokemon = data["results"].map((data, index) => {
        const numbers = GetGen(152, 251)
        return {
          name: data.name,
          number: numbers[index],
          url: data.url
        }
      })
    })
  }
}
