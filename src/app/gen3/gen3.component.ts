import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-gen3",
  templateUrl: "./gen3.component.html",
  styleUrls: ["./gen3.component.scss"]
})
export class Gen3Component implements OnInit {
  generation = {
    name: "3rd Generation",
    range: 135,
    offset: 251
  }

  constructor() {}

  ngOnInit() {}
}
