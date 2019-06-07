import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { HomeComponent } from "./home/home.component"
import { Gen1Component } from "./gen1/gen1.component"
import { Gen2Component } from "./gen2/gen2.component"
import { Gen3Component } from "./gen3/gen3.component"
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "gen1", component: Gen1Component },
  { path: "gen2", component: Gen2Component },
  { path: "gen3", component: Gen3Component }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
