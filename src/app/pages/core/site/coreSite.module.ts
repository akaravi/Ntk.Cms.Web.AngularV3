import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { CoreSiteRoutes } from './coreSite.routing';
import { CoreSiteListComponent } from './list/coreSiteList.component';
import { CoreSiteAddComponent } from './add/coreSiteAdd.component';
import { CoreSiteEditComponent } from './edit/coreSiteEdit.component';
import { CoreSiteSelectComponent } from './select/select.component';
import {PersianTimeAgoPipe} from 'persian-time-ago-pipe';
import {JdatePipe} from 'ngx-persian';
import { ArchwizardModule } from 'angular-archwizard';
import { CoreSiteCategorySelectComponent } from '../siteCategory/select/select.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PersianDate } from 'app/@cms/cmsCommon/pipe/PersianDatePipe/persian-date.pipe';


@NgModule({
  imports: [
    CommonModule,
    CoreSiteRoutes,
    NgbModule,
    FormsModule,
    ArchwizardModule,
    NgSelectModule,
    NgxDatatableModule
  ],
  declarations: [
    CoreSiteListComponent,
    CoreSiteAddComponent,
    CoreSiteEditComponent,
    CoreSiteSelectComponent,
    PersianDate,
    PersianTimeAgoPipe,
    JdatePipe,
    CoreSiteCategorySelectComponent,

  ]
})
export class CoreSiteModule { }
