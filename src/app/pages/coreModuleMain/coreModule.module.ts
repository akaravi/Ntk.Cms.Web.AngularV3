import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { HeaderModule } from '../../shared/resuable-module/header/header.module';
import { TagInputModule } from 'ngx-chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {
  CoreEnumService,
  CoreModuleTagCategoryService,
  NewsCommentService,
  NewsConfigurationService,

  CoreModuleTagService,

  NewsShareMainAdminSettingService,
  NewsShareReciverCategoryService,
  NewsShareServerCategoryService
} from 'ntk-cms-api';

import { TreeviewModule } from 'ngx-treeview';
import { NgxPersianModule } from 'ngx-persian';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarModule } from '../../shared/resuable-module/sidebar/sidebar.module';
import { CoreModuleRoutingModule } from './coreModule-routing.module';
import { CoreModuleComponent } from './coreModule.component';
import { CoreModuleTagListComponent } from './tag/list/list.component';
import { CoreModuleTagCategoryDeleteComponent } from './tagCategory/delete/delete.component';
import { CoreModuleTagCategoryEditComponent } from './tagCategory/edit/edit.component';
import { CoreModuleTagCategorySelectComponent } from './tagCategory/select/select.component';
import { CoreModuleTagEditComponent } from './tag/edit/edit.component';
import { CoreModuleTagListResolver } from './tag/list/list.resolver';
import { CoreModuleTagDeleteComponent } from './tag/delete/delete.component';


@NgModule({
  declarations: [
    CoreModuleComponent,
    CoreModuleTagListComponent,
    CoreModuleTagCategoryEditComponent,
    CoreModuleTagCategorySelectComponent,
    CoreModuleTagCategoryDeleteComponent,
    CoreModuleTagEditComponent,
    CoreModuleTagDeleteComponent
  ],
  imports: [
    CommonModule,
    CoreModuleRoutingModule,
    HeaderModule,
    TagInputModule,
    FormsModule,
    LeafletModule,
    ReactiveFormsModule,
    TreeviewModule.forRoot(),
    NgxPersianModule,
    SharedModule.forRoot(),
    SidebarModule,


  ],
  providers: [
    CoreModuleTagCategoryService,
    CoreModuleTagService,
    ToastrService,
    CoreEnumService,
    CoreModuleTagListResolver

  ],
  entryComponents: [CoreModuleTagCategoryEditComponent, CoreModuleTagEditComponent]
})
export class CoreModuleModule {
}
