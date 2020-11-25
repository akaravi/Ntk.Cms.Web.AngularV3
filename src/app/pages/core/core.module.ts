import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutes } from './core.routing';
import {
  CoreConfigurationService,
  CoreGuideService,
  CoreLocationService,
  CoreModuleService,
  CoreModuleProcessService,
  CoreModuleProcessCustomizeService,
  CoreModuleSiteService,
  CoreSiteService,
  CoreSiteCategoryService,
  CoreSiteCategoryCmsModuleService,
  CoreSiteCategoryModuleService,
} from 'ntk-cms-api';
import { CoreSiteCategorySelectComponent } from './siteCategory/select/select.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutes
  ],
  declarations: [CoreSiteCategorySelectComponent],
  exports: [],
  providers: [

    CoreConfigurationService,
    CoreGuideService,
    CoreLocationService,
    CoreModuleService,
    CoreModuleProcessService,
    CoreModuleProcessCustomizeService,
    CoreModuleSiteService,
    CoreSiteService,
    CoreSiteCategoryService,
    CoreSiteCategoryCmsModuleService,
    CoreSiteCategoryModuleService,
  ],
})
export class CoreModule { }
