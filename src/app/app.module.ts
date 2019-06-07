import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Gen1Component } from './gen1/gen1.component';
import { HomeComponent } from './home/home.component';
import { Gen2Component } from './gen2/gen2.component';
import { Gen3Component } from './gen3/gen3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Gen1Component,
    HomeComponent,
    Gen2Component,
    Gen3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
