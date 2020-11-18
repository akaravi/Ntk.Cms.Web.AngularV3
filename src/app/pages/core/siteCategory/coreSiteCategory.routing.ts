import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoreSiteCategoryListComponent } from './list/coreSiteCategoryList.component';
import { CoreSiteCategoryAddComponent } from './add/coreSiteCategoryAdd.component';
import { CoreSiteCategoryEditComponent } from './edit/coreSiteCategoryEdit.component';
import { CoreSiteCategorySelectComponent } from './select/select.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: CoreSiteCategoryListComponent,
        data: {
          title: 'login to Panle',
        },
      },
      {
        path: 'add',
        component: CoreSiteCategoryAddComponent,
        data: {
          title: 'Register New Acount',
        },
      },
      {
        path: 'edit',
        component: CoreSiteCategoryEditComponent,
        data: {
          title: 'forgot password You Acount',
        },
      },
      {
        path: 'select',
        component: CoreSiteCategorySelectComponent,
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
export class CoreSiteCategoryRoutes {}
