import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from "./app-routing.module"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { MatDialogModule } from "@angular/material/dialog"
import { AppComponent } from "./app.component"
import { NavComponent } from "./nav/nav.component"
import { Gen1Component } from "./gen1/gen1.component"
import { HomeComponent } from "./home/home.component"
import { Gen2Component } from "./gen2/gen2.component"
import { Gen3Component } from "./gen3/gen3.component"
import { PokemonImagesComponent } from "./pokemon-images/pokemon-images.component"
import { Gen4Component } from "./gen4/gen4.component"
import { Gen5Component } from "./gen5/gen5.component"
import { Gen6Component } from "./gen6/gen6.component"
import { Gen7Component } from "./gen7/gen7.component"
import { Gen8Component } from "./gen8/gen8.component"
import { ModalComponent } from "./modal/modal.component"

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Gen1Component,
    HomeComponent,
    Gen2Component,
    Gen3Component,
    PokemonImagesComponent,
    Gen4Component,
    Gen5Component,
    Gen6Component,
    Gen7Component,
    Gen8Component,
    ModalComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MatDialogModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule {}
