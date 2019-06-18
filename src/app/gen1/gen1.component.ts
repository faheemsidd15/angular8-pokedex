import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-gen1",
  templateUrl: "./gen1.component.html",
  styleUrls: ["./gen1.component.scss"]
})
export class Gen1Component implements OnInit {
  generation = {
    name: "1st Generation",
    range: 151,
    offset: 0
  }

  constructor() {}

  ngOnInit() {}
}
