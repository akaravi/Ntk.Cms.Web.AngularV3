import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CoreAuthRoutes } from './auth.routing';
import { ForgotPasswordComponent } from './forgotPassword/forgotPassword.component';


@NgModule({
    imports: [
        CommonModule,
        CoreAuthRoutes,
        NgbModule,
        FormsModule,
        
    ],
    exports: [],
    declarations: [
      LoginComponent,
      RegisterComponent,
      ForgotPasswordComponent,
    ],
    providers: [],
})
export class CoreAuthModule { }

