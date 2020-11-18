import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreSiteCategoryRoutes } from './coreSiteCategory.routing';
import { CoreSiteCategoryAddComponent } from './add/coreSiteCategoryAdd.component';
import { CoreSiteCategoryEditComponent } from './edit/coreSiteCategoryEdit.component';
import { CoreSiteCategoryListComponent } from './list/coreSiteCategoryList.component';

@NgModule({
  imports: [
    CommonModule,
    CoreSiteCategoryRoutes
  ],
  declarations: [
    CoreSiteCategoryAddComponent,
    CoreSiteCategoryEditComponent,
    CoreSiteCategoryListComponent,
  ]
})
export class CoreSiteCategoryModule { }
