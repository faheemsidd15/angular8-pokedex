import { Component, OnInit } from "@angular/core"
import { GetGen } from "../helpers/getGen"

@Component({
  selector: "app-gen2",
  templateUrl: "./gen2.component.html",
  styleUrls: ["./gen2.component.scss"]
})
export class Gen2Component implements OnInit {
  imageStyle: boolean = false

  secondGen = {
    generation: "2nd Generation",
    location: "assets/images/pokemon/",
    pokemon: GetGen(152, 251),
    someFunction: number => {
      console.log(number)
      this.imageStyle = !this.imageStyle
    }
  }

  constructor() {}

  ngOnInit() {}
}
