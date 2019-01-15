import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";
import { OutdoorMapComponent } from "./outdoor-map/outdoor-map.component";
import { NeedAuthGuard } from "../auth.guard";
import { IndoorMapComponent } from "./indoor-map/indoor-map.component";
import { PathManagementComponent } from "./path-management/path-management.component";
import { AddPathComponent } from "./path-management/add-path/add-path.component";
import { EditPathComponent } from "./path-management/edit-path/edit-path.component";
import { SensorManagementComponent } from "./sensor-management/sensor-management.component";
import { AddSensorComponent } from "./sensor-management/add-sensor/add-sensor.component";
import { EditSensorComponent } from "./sensor-management/edit-sensor/edit-sensor.component";
import { ViewSensorComponent } from "./sensor-management/view-sensor/view-sensor.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      //add new page here
      {
        path: "dashboard",
        component: OutdoorMapComponent
      },
      {
        path: "indoor-heatmap",
        component: IndoorMapComponent
      },
      {
        path: "path-management",
        component: PathManagementComponent
      },
      {
        path: "add-path",
        component: AddPathComponent
      },
      {
        path: "edit-path",
        component: EditPathComponent
      },
      {
        path: "sensor-management",
        component: SensorManagementComponent
      },
      {
        path: "add-sensor",
        component: AddSensorComponent
      },
      {
        path: "edit-sensor",
        component: EditSensorComponent
      },
      {
        path: "view-sensor",
        component: ViewSensorComponent
      }
    ],
    canActivate: [NeedAuthGuard]
  },
  {
    path: "**",
    redirectTo: "dashboard",
    canActivate: [NeedAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
