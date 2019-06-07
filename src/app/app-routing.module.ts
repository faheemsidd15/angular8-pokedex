import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { HomeComponent } from "./home/home.component"
import { Gen1Component } from "./gen1/gen1.component"
import { Gen2Component } from "./gen2/gen2.component"
import { Gen3Component } from "./gen3/gen3.component"
import { Gen4Component } from "./gen4/gen4.component"
import { Gen5Component } from "./gen5/gen5.component"
import { Gen6Component } from "./gen6/gen6.component"
import { Gen7Component } from "./gen7/gen7.component"
import { Gen8Component } from "./gen8/gen8.component"

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "gen1", component: Gen1Component },
  { path: "gen2", component: Gen2Component },
  { path: "gen3", component: Gen3Component },
  { path: "gen4", component: Gen4Component },
  { path: "gen5", component: Gen5Component },
  { path: "gen6", component: Gen6Component },
  { path: "gen7", component: Gen7Component },
  { path: "gen8", component: Gen8Component }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
