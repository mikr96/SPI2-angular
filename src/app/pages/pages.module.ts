import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OutdoorMapComponent } from "./outdoor-map/outdoor-map.component";
import { IndoorMapComponent } from "./indoor-map/indoor-map.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AppRoutingModule } from "../app-routing.module";
import { PagesComponent } from "./pages.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { NeedAuthGuard } from "../auth.guard";
import { MatSliderModule } from "@angular/material/slider";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { PathManagementComponent } from "./path-management/path-management.component";
import { AddPathComponent } from "./path-management/add-path/add-path.component";
import { EditPathComponent } from "./path-management/edit-path/edit-path.component";
import { SensorManagementComponent } from "./sensor-management/sensor-management.component";
import { EditSensorComponent } from "./sensor-management/edit-sensor/edit-sensor.component";
import { AddSensorComponent } from "./sensor-management/add-sensor/add-sensor.component";
import { ViewSensorComponent } from './sensor-management/view-sensor/view-sensor.component';

const PAGES_COMPONENTS = [PagesComponent];

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatSliderModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  declarations: [
    OutdoorMapComponent,
    IndoorMapComponent,
    SidebarComponent,
    ...PAGES_COMPONENTS,
    PathManagementComponent,
    AddPathComponent,
    EditPathComponent,
    SensorManagementComponent,
    EditSensorComponent,
    AddSensorComponent,
    ViewSensorComponent
  ],
  providers: [NeedAuthGuard]
})
export class PagesModule {}
