import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreUserRoutes } from "./coreUser.routing";
import { CoreUserProfileComponent } from "./profile/profile.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreUserRoutes,

  ],
  declarations: [CoreUserProfileComponent],
})
export class CoreUserModule {}
