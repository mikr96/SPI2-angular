import { NgModule } from '@angular/core';
import { ExtraOptions, Routes, RouterModule } from '@angular/router';
import { OutdoorMapComponent } from './pages/outdoor-map/outdoor-map.component';
import { ViewTableComponent } from './pages/view-table/view-table.component';
import { LoginComponent } from './login/login.component';
import { NeedAuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    canActivate: [NeedAuthGuard]
  },
  {
    path: '**',
    redirectTo: 'pages',
    canActivate: [NeedAuthGuard]
  },
  // {
  //   path: 'pages',
  //   loadChildren: 'app/pages/pages.module#PagesModule',
  //   canActivate: [NeedAuthGuard]
  // }
  // {
  //   path: '',
  //   component: OutdoorMapComponent,
  //   canActivate: [NeedAuthGuard]
  // },
  // {
  //   path: 'viewTable',
  //   component: ViewTableComponent,
  //   canActivate: [NeedAuthGuard]
  // },
  // // otherwise redirect to home
  // { path: '**', redirectTo: '' }

];

// const config: ExtraOptions = {
//   useHash: false,
// };

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
