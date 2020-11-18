import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { CoreSiteRoutes } from './coreSite.routing';
import { CoreSiteListComponent } from './list/coreSiteList.component';
import { CoreSiteAddComponent } from './add/coreSiteAdd.component';
import { CoreSiteEditComponent } from './edit/coreSiteEdit.component';
import { CoreSiteSelectComponent } from './select/select.component';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { PersianPipeModule } from 'src/app/core/common/pipe/PersianDatePipe/persianPipe.module';


@NgModule({
  imports: [
    CommonModule,
    CoreSiteRoutes,
    NgbModule,
    FormsModule,
    SharedModule,
    PersianPipeModule,
    // NgSelectModule,
    // NgxDatatableModule
  ],
  declarations: [
    CoreSiteListComponent,
    CoreSiteAddComponent,
    CoreSiteEditComponent,
    CoreSiteSelectComponent,
  ]
})
export class CoreSiteModule { }
