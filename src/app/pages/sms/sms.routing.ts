import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SmsMainApiPathAddComponent } from './mainApiPath/add/smsMainApiPathAdd.component';
import { SmsMainApiPathEditComponent } from './mainApiPath/edit/smsMainApiPathEdit.component';
import { SmsMainApiPathListComponent } from './mainApiPath/list/smsMainApiPathList.component';
import { SmsMainApiPathCompanyAddComponent } from './mainApiPathCompany/add/smsMainApiPathCompanyAdd.component';
import { SmsMainApiPathCompanyEditComponent } from './mainApiPathCompany/edit/smsMainApiPathCompanyEdit.component';
import { SmsMainApiPathCompanyListComponent } from './mainApiPathCompany/list/smsMainApiPathCompanyList.component';
import {SmsMainApiPathSuperSederListComponent} from './mainApiPathSuperSeder/list/smsMainApiPathSuperSederList.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'apipath',
        children: [
          {
            path: '',
            component: SmsMainApiPathListComponent,
            data: {
              title: 'login to Panle',
            },
          },
          {
            path: 'list',
            component: SmsMainApiPathListComponent,
            data: {
              title: 'login to Panle',
            },
          },
          {
            path: 'add',
            component: SmsMainApiPathAddComponent,
            data: {
              title: 'Register New Acount',
            },
          },
          {
            path: 'edit',
            component: SmsMainApiPathEditComponent,
            data: {
              title: 'forgot password You Acount',
            },
          }
        ],

      },
      {
        path: 'apipathcompany',
        children: [
          {
            path: '',
            component: SmsMainApiPathCompanyListComponent,
            data: {
              title: 'login to Panle',
            },
          },
          {
            path: 'list',
            component: SmsMainApiPathCompanyListComponent,
            data: {
              title: 'login to Panle',
            },
          },
          {
            path: 'add',
            component: SmsMainApiPathCompanyAddComponent,
            data: {
              title: 'Register New Acount',
            },
          },
          {
            path: 'edit',
            component: SmsMainApiPathCompanyEditComponent,
            data: {
              title: 'forgot password You Acount',
            },
          }
        ],
      },
      {
        path: 'superSide',
        children: [
          {
            path: '',
            component: SmsMainApiPathSuperSederListComponent
          }
        ]
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmsRoutes {}
