import { Component, OnInit } from "@angular/core"
import { GetGen } from "../helpers/getGen"

@Component({
  selector: "app-gen3",
  templateUrl: "./gen3.component.html",
  styleUrls: ["./gen3.component.scss"]
})
export class Gen3Component implements OnInit {
  imageStyle: boolean = false
  thirdGen = {
    generation: "3rd Generation",
    location: "assets/images/pokemon/",
    pokemon: GetGen(252, 386),
    someFunction: number => {
      console.log(number)
      this.imageStyle = !this.imageStyle
    }
  }

  constructor() {}

  ngOnInit() {}
}
