import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { OutdoorMapComponent } from './outdoor-map/outdoor-map.component';
import { ViewTableComponent } from './view-table/view-table.component';
import { NeedAuthGuard } from '../auth.guard';
import { AlertComponent } from './alert/alert.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: OutdoorMapComponent
    },
    {
      path: 'path-management',
      component: ViewTableComponent
    },
    // {
    //   path: 'alert-management',
    //   component: AlertComponent
    // }
  ],
  canActivate: [NeedAuthGuard]
},
{
  path: '**',
  redirectTo: 'dashboard',
  canActivate: [NeedAuthGuard]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
