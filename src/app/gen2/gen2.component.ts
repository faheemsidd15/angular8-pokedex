import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-gen2",
  templateUrl: "./gen2.component.html",
  styleUrls: ["./gen2.component.scss"]
})
export class Gen2Component implements OnInit {
  generation = {
    name: "2nd Generation",
    range: 99,
    offset: 151
  }

  constructor() {}

  ngOnInit() {}
}
