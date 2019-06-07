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
    gen: "2nd Generation",
    pokemon: GetGen(152, 251)
  }

  constructor() {}

  ngOnInit() {}
}
