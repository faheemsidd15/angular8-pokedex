import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-gen7",
  templateUrl: "./gen7.component.html",
  styleUrls: ["./gen7.component.scss"]
})
export class Gen7Component implements OnInit {
  generation = {
    name: "7th Generation",
    range: 86,
    offset: 721
  }

  constructor() {}

  ngOnInit() {}
}
