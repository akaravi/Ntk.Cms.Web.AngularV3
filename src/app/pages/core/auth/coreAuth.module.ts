import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CoreAuthRoutes } from './coreAuth.routing';
import { ForgotPasswordComponent } from './forgotPassword/forgotPassword.component';
import { SharedModule } from 'src/app/core/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CoreAuthRoutes,
    NgbModule,
    FormsModule,
    SharedModule,
  ],
  exports: [],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
  ],
  providers: [
  ],
})
export class CoreAuthModule { }

