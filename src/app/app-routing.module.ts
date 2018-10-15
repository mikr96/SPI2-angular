import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutdoorMapComponent } from './pages/outdoor-map/outdoor-map.component';
import { ViewTableComponent } from './pages/view-table/view-table.component';

const routes: Routes = [
  // {
  //   path: 'Login',
  //   component: LoginComponent
  // },
  {
    path: 'outdoorMap',
    component: OutdoorMapComponent
  },
  {
    path: 'viewTable',
    component: ViewTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
