import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTableComponent } from './view-table/view-table.component';
import { OutdoorMapComponent } from './outdoor-map/outdoor-map.component';
import { IndoorMapComponent } from './indoor-map/indoor-map.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NeedAuthGuard } from '../auth.guard';
import { MatSliderModule } from "@angular/material/slider";
import { FormsModule } from '@angular/forms';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatSliderModule,
    FormsModule
  ],
  declarations: [
    ViewTableComponent,
    OutdoorMapComponent,
    IndoorMapComponent,
    SidebarComponent,
    ...PAGES_COMPONENTS
  ],
  providers: [NeedAuthGuard],
})

export class PagesModule { }
