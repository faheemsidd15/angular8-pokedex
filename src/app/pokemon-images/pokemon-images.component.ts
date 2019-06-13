import { Component, OnInit, Input } from "@angular/core"
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material"
import { DataService } from "../data.service"
import { ModalComponent } from "../modal/modal.component"
import { resolve } from "url"
import { never } from "rxjs"

@Component({
  selector: "app-pokemon-images",
  templateUrl: "./pokemon-images.component.html",
  styleUrls: ["./pokemon-images.component.scss"]
})
export class PokemonImagesComponent implements OnInit {
  @Input("pokemon") pokemon: any

  imageStyle: boolean = false
  location: string = "assets/images/pokemon/"

  constructor(public dialog: MatDialog, private data: DataService) {}

  getPokemon(url, number) {
    this.data.getPokemon(url).subscribe(data => {
      const newData = { image: `${this.location}/${number}.png`, ...data }
      this.dialog.open(ModalComponent, {
        width: "70%",
        closeOnNavigation: true,
        data: newData
      })
    })
  }

  ngOnInit() {}
}
