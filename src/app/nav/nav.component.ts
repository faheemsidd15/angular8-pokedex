import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  mainLogo: string = "assets/images/pokemon/pokemonLogo.png"

  constructor() {}

  ngOnInit() {}
}
