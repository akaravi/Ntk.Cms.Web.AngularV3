import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgotPassword/forgotPassword.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'login to Panle'
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'Register New Acount'
        }
      },
      {
        path: 'forgotpassword',
        component: ForgotPasswordComponent,
        data: {
          title: 'forgot password You Acount'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreAuthRoutes { }
