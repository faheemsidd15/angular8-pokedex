import { Component, OnInit } from "@angular/core"
@Component({
  selector: "app-gen4",
  templateUrl: "./gen4.component.html",
  styleUrls: ["./gen4.component.scss"]
})
export class Gen4Component implements OnInit {
  fourthGen = {
    gen: "4th Generation",
    pokemon: []
  }

  generation = {
    name: "4th Generation",
    range: 107,
    offset: 386
  }

  constructor() {}

  ngOnInit() {}
}
