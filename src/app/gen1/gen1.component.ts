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
    gen: "1st Generation",
    pokemon: GetGen(1, 151)
  }

  constructor() {}

  ngOnInit() {}
}
