import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { DetailsComponent } from './details/details.component';
import { DataComponent } from './data/data.component';
import { TableComponent } from './table/table.component';
import { MapsComponent } from './maps/maps.component';

const routes: Routes = [
  {
    path: '',
    component: DataComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'maps',
    component: MapsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
