import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTableComponent } from './view-table/view-table.component';
import { OutdoorMapComponent } from './outdoor-map/outdoor-map.component';
import { IndoorMapComponent } from './indoor-map/indoor-map.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ViewTableComponent, OutdoorMapComponent, IndoorMapComponent, LoginComponent]
})
export class PagesModule { }
