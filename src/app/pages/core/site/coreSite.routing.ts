import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreSiteSelectComponent } from './select/select.component';
import { CoreSiteEditComponent } from './edit/coreSiteEdit.component';
import { CoreSiteListComponent } from './list/coreSiteList.component';
import { CoreSiteAddComponent } from './add/coreSiteAdd.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: CoreSiteListComponent,
        data: {
          title: 'login to Panle',
        },
      },
      {
        path: 'add',
        component: CoreSiteAddComponent,
        data: {
          title: 'Register New Acount',
        },
      },
      {
        path: 'edit',
        component: CoreSiteEditComponent,
        data: {
          title: 'forgot password You Acount',
        },
      },
      {
        path: 'select',
        component: CoreSiteSelectComponent,
        data: {
          title: 'forgot password You Acount',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreSiteRoutes {}
