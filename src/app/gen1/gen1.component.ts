import { Component, OnInit } from "@angular/core"
import { GetGen } from "../helpers/getGen"

@Component({
  selector: "app-gen1",
  templateUrl: "./gen1.component.html",
  styleUrls: ["./gen1.component.scss"]
})
export class Gen1Component implements OnInit {
  imageStyle: boolean = false

  firstGen = {
    generation: "1st Generation",
    location: "assets/images/pokemon/",
    pokemon: GetGen(1, 151),
    someFunction: number => {
      console.log(number)
      this.imageStyle = !this.imageStyle
    }
  }

  constructor() {}

  ngOnInit() {}
}
