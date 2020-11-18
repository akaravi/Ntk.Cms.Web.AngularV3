import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoreUserProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profile',
        component: CoreUserProfileComponent,
        data: {
          title: 'profile to Panle',
        },
      },
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreUserRoutes {}
