import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  CoreEnumService,
  CoreModuleTagCategoryService,
  CoreModuleTagService,
} from 'ntk-cms-api';

import { TreeviewModule } from 'ngx-treeview';
import { NgxPersianModule } from 'ngx-persian';
import { CoreModuleRoutingModule } from './coreModule-routing.module';
import { CoreModuleComponent } from './coreModule.component';
import { CoreModuleTagListComponent } from './tag/list/list.component';
import { CoreModuleTagCategoryDeleteComponent } from './tagCategory/delete/delete.component';
import { CoreModuleTagCategoryEditComponent } from './tagCategory/edit/edit.component';
import { CoreModuleTagCategorySelectComponent } from './tagCategory/select/select.component';
import { CoreModuleTagEditComponent } from './tag/edit/edit.component';
import { CoreModuleTagListResolver } from './tag/list/list.resolver';
import { CoreModuleTagDeleteComponent } from './tag/delete/delete.component';
import { SharedModule } from 'src/app/core/shared/shared.module';


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
    FormsModule,
    ReactiveFormsModule,
    TreeviewModule.forRoot(),
    NgxPersianModule,
    SharedModule.forRoot(),
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
