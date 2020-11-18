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

@NgModule({
  imports: [
    CommonModule,
    CoreRoutes
  ],
  declarations: [],
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
