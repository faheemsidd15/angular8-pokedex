import { Component, OnInit } from "@angular/core"
import { GetGen } from "../helpers/getGen"

@Component({
  selector: "app-gen5",
  templateUrl: "./gen5.component.html",
  styleUrls: ["./gen5.component.scss"]
})
export class Gen5Component implements OnInit {
  fifthGen = {
    gen: "5th Generation",
    pokemon: GetGen(494, 649)
  }
  constructor() {}

  ngOnInit() {}
}
