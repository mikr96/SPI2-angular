import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { IndoorMapComponent } from '../pages/indoor-map/indoor-map.component';
import { OutdoorMapComponent } from '../pages/outdoor-map/outdoor-map.component';
import { PathManagementComponent } from '../pages/path-management/path-management.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, IndoorMapComponent, OutdoorMapComponent, PathManagementComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
