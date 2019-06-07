import { Component, OnInit } from "@angular/core"
import { GetGen } from "../helpers/getGen"

@Component({
  selector: "app-gen7",
  templateUrl: "./gen7.component.html",
  styleUrls: ["./gen7.component.scss"]
})
export class Gen7Component implements OnInit {
  seventhGen = {
    gen: "7th Generation",
    pokemon: GetGen(722, 809)
  }

  constructor() {}

  ngOnInit() {}
}
