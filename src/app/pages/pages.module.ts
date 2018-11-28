import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ViewTableComponent } from "./view-table/view-table.component";
import { OutdoorMapComponent } from "./outdoor-map/outdoor-map.component";
import { IndoorMapComponent } from "./indoor-map/indoor-map.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AppRoutingModule } from "../app-routing.module";
import { PagesComponent } from "./pages.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { NeedAuthGuard } from "../auth.guard";
import { AlertComponent } from "./alert/alert.component";
import { PlotlyModule } from "angular-plotly.js";
import { MatSliderModule } from "@angular/material/slider";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { DataTablesModule } from "angular-datatables";

const PAGES_COMPONENTS = [PagesComponent];

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    PlotlyModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  declarations: [
    ViewTableComponent,
    OutdoorMapComponent,
    IndoorMapComponent,
    SidebarComponent,
    ...PAGES_COMPONENTS,
    AlertComponent
  ],
  providers: [NeedAuthGuard]
})
export class PagesModule {}
