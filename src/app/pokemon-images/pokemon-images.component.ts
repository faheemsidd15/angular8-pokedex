import { Component, OnInit, Input } from "@angular/core"
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material"
import { DataService } from "../data.service"
import { ModalComponent } from "../modal/modal.component"

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

  getPokemon(url) {
    this.data.getPokemon(url).subscribe(data => {
      console.log(data)
    })
    this.dialog.open(ModalComponent)
    //create modal here an pass the data
  }

  ngOnInit() {}
}
