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
    gen: "3rd Generation",
    pokemon: GetGen(252, 386)
  }

  constructor() {}

  ngOnInit() {}
}
