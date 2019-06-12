import { Component, OnInit, Inject, Input } from "@angular/core"
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog"

export interface DialogData {}
@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit {
  @Input("pokemon") pokemon: any

  constructor(public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {}
}
