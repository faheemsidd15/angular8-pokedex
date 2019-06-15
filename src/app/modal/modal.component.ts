import { Component, OnInit, Inject, Input } from "@angular/core"
import { GetTypes, GetSprites } from "../helpers/GetPokemonInfo"
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog"

export interface DialogData {}
@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit {
  pokemon = {
    name: "",
    type: [],
    sprites: {}
  }

  constructor(public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
    this.pokemon.type = GetTypes(this.data["types"])
    this.pokemon.name = this.data["name"]
    this.pokemon.sprites = GetSprites(this.data["sprites"])
    console.log("data", this.data)
    console.log("this.pokemon", this.pokemon)
  }

  ngOnDestroy(): void {
    console.clear()
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
