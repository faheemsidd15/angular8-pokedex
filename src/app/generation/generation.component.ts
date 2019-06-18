import { Component, OnInit, Input } from "@angular/core"
import { DataService } from "../data.service"
import { GetGen } from "../helpers/getGen"

@Component({
  selector: "app-generation",
  templateUrl: "./generation.component.html",
  styleUrls: ["./generation.component.scss"]
})
export class GenerationComponent implements OnInit {
  @Input("generation") generation: any

  pokemon: []
  loading = true

  constructor(private data: DataService) {}

  ngOnInit() {
    const { range, offset } = this.generation
    this.data.getPokemonNames(range, offset).subscribe(data => {
      this.pokemon = data["results"].map((data, index) => {
        const numbers = GetGen(offset + 1, range + offset)
        return {
          name: data.name,
          number: numbers[index],
          url: data.url
        }
      })
      this.loading = false
    })
  }
}
