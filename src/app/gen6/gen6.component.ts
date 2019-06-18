import { Component, OnInit } from "@angular/core"
@Component({
  selector: "app-gen6",
  templateUrl: "./gen6.component.html",
  styleUrls: ["./gen6.component.scss"]
})
export class Gen6Component implements OnInit {
  generation = {
    name: "6th Generation",
    range: 72,
    offset: 649
  }

  constructor() {}

  ngOnInit() {}
}
