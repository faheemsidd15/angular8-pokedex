import { Component, OnInit } from "@angular/core"
import { GetGen } from "../helpers/getGen"
@Component({
  selector: "app-gen4",
  templateUrl: "./gen4.component.html",
  styleUrls: ["./gen4.component.scss"]
})
export class Gen4Component implements OnInit {
  fourthGen = {
    gen: "4th Generation",
    pokemon: GetGen(387, 493)
  }
  constructor() {}

  ngOnInit() {}
}
