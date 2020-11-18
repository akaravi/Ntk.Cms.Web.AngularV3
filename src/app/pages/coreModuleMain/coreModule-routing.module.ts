import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CoreModuleComponent } from './coreModule.component';
import { CoreModuleTagListComponent } from './tag/list/list.component';
import { CoreModuleTagListResolver } from './tag/list/list.resolver';


const routes: Routes = [
  {
    path: 'coremodule',
    component: CoreModuleComponent,
    children: [
      {
        path: 'tag',
        component: CoreModuleTagListComponent,
        resolve: {list: CoreModuleTagListResolver}
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreModuleRoutingModule {
}
