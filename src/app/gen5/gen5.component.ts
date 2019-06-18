import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-gen5",
  templateUrl: "./gen5.component.html",
  styleUrls: ["./gen5.component.scss"]
})
export class Gen5Component implements OnInit {
  generation = {
    name: "5th Generation",
    range: 156,
    offset: 493
  }
  constructor() {}

  ngOnInit() {}
}
