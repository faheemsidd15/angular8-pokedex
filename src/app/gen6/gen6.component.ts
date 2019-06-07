import { Component, OnInit } from "@angular/core"
import { GetGen } from "../helpers/getGen"
@Component({
  selector: "app-gen6",
  templateUrl: "./gen6.component.html",
  styleUrls: ["./gen6.component.scss"]
})
export class Gen6Component implements OnInit {
  sixthGen = {
    gen: "6th Generation",
    pokemon: GetGen(650, 721)
  }

  constructor() {}

  ngOnInit() {}
}
