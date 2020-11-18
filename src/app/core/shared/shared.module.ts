﻿import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { CmsExportContentListComponent } from './cmsExportContentList/cmsExportContentList.component';
import { CmsStatistContentListComponent } from './cmsStatistContentList/cmsStatistContentList.component';
import { CmsSearchContentListComponent } from './cmsSearchContentList/cmsSearchContentList.component';
import { NgxQueryBuilderModule } from 'ngx-query-builder';
import { PersianDate } from '../common/pipe/PersianDatePipe/persian-date.pipe';
import { TruncatePipe } from '../common/pipe/truncate.pipe';
import { TreeModule } from '@circlon/angular-tree-component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    TreeModule,
    NgxQueryBuilderModule,
   
  ],
  entryComponents: [
    // All components about to be loaded "dynamically" need to be declared in the entryComponents section.
  ],
  declarations: [
    // common and shared components/directives/pipes between more than one module and components will be listed here.
    TruncatePipe,
    CmsSearchContentListComponent,
    CmsStatistContentListComponent,
    CmsExportContentListComponent,
    PersianDate,

  ],
  exports: [
    // common and shared components/directives/pipes between more than one module and components will be listed here.
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    TreeModule,
    TruncatePipe,
    PersianDate,
    CmsSearchContentListComponent,
    CmsStatistContentListComponent,
    CmsExportContentListComponent
  ],
  /* No providers here! Since they’ll be already provided in AppModule. */
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    // Forcing the whole app to use the returned providers from the AppModule only.
    return {
      ngModule: SharedModule,
      providers: [
        /* All of your services here. It will hold the services needed by `itself`. */
      ],
    };
  }
}
