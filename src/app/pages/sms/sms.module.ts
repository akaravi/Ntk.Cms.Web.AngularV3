import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmsRoutes } from './sms.routing';
import { TreeModule } from 'angular-tree-component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { CmsSharedModule } from 'app/@cms/shared/cmsShared.module';
import { SmsMainApiPathAddComponent } from './mainApiPath/add/smsMainApiPathAdd.component';
import { SmsMainApiPathDeleteComponent } from './mainApiPath/delete/smsMainApiPathDelete.component';
import { SmsMainApiPathEditComponent } from './mainApiPath/edit/smsMainApiPathEdit.component';
import { SmsMainApiPathListComponent } from './mainApiPath/list/smsMainApiPathList.component';
import { SmsMainApiPathSelectComponent } from './mainApiPath/select/smsMainApiPathSelect.component';
import { SmsMainApiPathCompanyAddComponent } from './mainApiPathCompany/add/smsMainApiPathCompanyAdd.component';
import { SmsMainApiPathCompanyDeleteComponent } from './mainApiPathCompany/delete/smsMainApiPathCompanyDelete.component';
import { SmsMainApiPathCompanyEditComponent } from './mainApiPathCompany/edit/smsMainApiPathCompanyEdit.component';
import { SmsMainApiPathCompanyListComponent } from './mainApiPathCompany/list/smsMainApiPathCompanyList.component';
import { SmsMainApiPathCompanySelectComponent } from './mainApiPathCompany/select/smsMainApiPathCompanySelect.component';
import { SmsMainApiPathPermissionAddComponent } from './mainApiPathPermission/add/smsMainApiPathPermissionAdd.component';
import { SmsMainApiPathPermissionDeleteComponent } from './mainApiPathPermission/delete/smsMainApiPathPermissionDelete.component';
import { SmsMainApiPathPermissionEditComponent } from './mainApiPathPermission/edit/smsMainApiPathPermissionEdit.component';
import { SmsMainApiPathPermissionListComponent } from './mainApiPathPermission/list/smsMainApiPathPermissionList.component';
import { SmsMainApiPathPermissionSelectComponent } from './mainApiPathPermission/select/smsMainApiPathPermissionSelect.component';
import { SmsMainApiPathPriceServiceAddComponent } from './mainApiPathPriceService/add/smsMainApiPathPriceServiceAdd.component';
import { SmsMainApiPathPriceServiceDeleteComponent } from './mainApiPathPriceService/delete/smsMainApiPathPriceServiceDelete.component';
import { SmsMainApiPathPriceServiceEditComponent } from './mainApiPathPriceService/edit/smsMainApiPathPriceServiceEdit.component';
import { SmsMainApiPathPriceServiceListComponent } from './mainApiPathPriceService/list/smsMainApiPathPriceServiceList.component';
import { SmsMainApiPathPriceServiceSelectComponent } from './mainApiPathPriceService/select/smsMainApiPathPriceServiceSelect.component';
import { SmsMainApiPathPrivateSiteConfigAddComponent } from './mainApiPathPrivateSiteConfig/add/smsMainApiPathPrivateSiteConfigAdd.component';
import { SmsMainApiPathPrivateSiteConfigDeleteComponent } from './mainApiPathPrivateSiteConfig/delete/smsMainApiPathPrivateSiteConfigDelete.component';
import { SmsMainApiPathPrivateSiteConfigEditComponent } from './mainApiPathPrivateSiteConfig/edit/smsMainApiPathPrivateSiteConfigEdit.component';
import { SmsMainApiPathPrivateSiteConfigListComponent } from './mainApiPathPrivateSiteConfig/list/smsMainApiPathPrivateSiteConfigList.component';
import { SmsMainApiPathPrivateSiteConfigSelectComponent } from './mainApiPathPrivateSiteConfig/select/smsMainApiPathPrivateSiteConfigSelect.component';
import { SmsMainApiPathProcessFlowAddComponent } from './mainApiPathProcessFlow/add/smsMainApiPathProcessFlowAdd.component';
import { SmsMainApiPathProcessFlowDeleteComponent } from './mainApiPathProcessFlow/delete/smsMainApiPathProcessFlowDelete.component';
import { SmsMainApiPathProcessFlowEditComponent } from './mainApiPathProcessFlow/edit/smsMainApiPathProcessFlowEdit.component';
import { SmsMainApiPathProcessFlowListComponent } from './mainApiPathProcessFlow/list/smsMainApiPathProcessFlowList.component';
import { SmsMainApiPathProcessFlowSelectComponent } from './mainApiPathProcessFlow/select/smsMainApiPathProcessFlowSelect.component';
import { SmsMainApiPathProcessFlowLogEditComponent } from './mainApiPathProcessFlowLog/edit/smsMainApiPathProcessFlowLogEdit.component';
import { SmsMainApiPathProcessFlowLogListComponent } from './mainApiPathProcessFlowLog/list/smsMainApiPathProcessFlowLogList.component';
import { SmsMainApiPathPublicConfigAddComponent } from './mainApiPathPublicConfig/add/smsMainApiPathPublicConfigAdd.component';
import { SmsMainApiPathPublicConfigDeleteComponent } from './mainApiPathPublicConfig/delete/smsMainApiPathPublicConfigDelete.component';
import { SmsMainApiPathPublicConfigEditComponent } from './mainApiPathPublicConfig/edit/smsMainApiPathPublicConfigEdit.component';
import { SmsMainApiPathPublicConfigListComponent } from './mainApiPathPublicConfig/list/smsMainApiPathPublicConfigList.component';
import { SmsMainApiPathPublicConfigSelectComponent } from './mainApiPathPublicConfig/select/smsMainApiPathPublicConfigSelect.component';
import { SmsMainApiPathSuperSederAddComponent } from './mainApiPathSuperSeder/add/smsMainApiPathSuperSederAdd.component';
import { SmsMainApiPathSuperSederDeleteComponent } from './mainApiPathSuperSeder/delete/smsMainApiPathSuperSederDelete.component';
import { SmsMainApiPathSuperSederEditComponent } from './mainApiPathSuperSeder/edit/smsMainApiPathSuperSederEdit.component';
import { SmsMainApiPathSuperSederListComponent } from './mainApiPathSuperSeder/list/smsMainApiPathSuperSederList.component';
import { SmsMainApiPathSuperSederSelectComponent } from './mainApiPathSuperSeder/select/smsMainApiPathSuperSederSelect.component';
import { SmsMainCustomerNumberAddComponent } from './mainCustomerNumber/add/smsMainCustomerNumberAdd.component';
import { SmsMainCustomerNumberDeleteComponent } from './mainCustomerNumber/delete/smsMainCustomerNumberDelete.component';
import { SmsMainCustomerNumberEditComponent } from './mainCustomerNumber/edit/smsMainCustomerNumberEdit.component';
import { SmsMainCustomerNumberListComponent } from './mainCustomerNumber/list/smsMainCustomerNumberList.component';
import { SmsMainCustomerNumberSelectComponent } from './mainCustomerNumber/select/smsMainCustomerNumberSelect.component';
import {CoreEnumService, SmsMainApiPathCompanyService, SmsMainApiPathService, SmsMainApiPathSuperSederService} from 'ntk-cms-api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SmsRoutes,
    NgxDatatableModule,
    TreeModule.forRoot(),
    QuillModule,
    CmsSharedModule
  ],
  declarations: [
    //
    SmsMainApiPathListComponent,
    SmsMainApiPathAddComponent,
    SmsMainApiPathEditComponent,
    SmsMainApiPathDeleteComponent,
    SmsMainApiPathSelectComponent,
    //
    SmsMainApiPathCompanyListComponent,
    SmsMainApiPathCompanyAddComponent,
    SmsMainApiPathCompanyEditComponent,
    SmsMainApiPathCompanyDeleteComponent,
    SmsMainApiPathCompanySelectComponent,
    //
    SmsMainApiPathPermissionListComponent,
    SmsMainApiPathPermissionAddComponent,
    SmsMainApiPathPermissionEditComponent,
    SmsMainApiPathPermissionDeleteComponent,
    SmsMainApiPathPermissionSelectComponent,
    //
    SmsMainApiPathPriceServiceListComponent,
    SmsMainApiPathPriceServiceAddComponent,
    SmsMainApiPathPriceServiceEditComponent,
    SmsMainApiPathPriceServiceDeleteComponent,
    SmsMainApiPathPriceServiceSelectComponent,
    //
    SmsMainApiPathPrivateSiteConfigListComponent,
    SmsMainApiPathPrivateSiteConfigAddComponent,
    SmsMainApiPathPrivateSiteConfigEditComponent,
    SmsMainApiPathPrivateSiteConfigDeleteComponent,
    SmsMainApiPathPrivateSiteConfigSelectComponent,
    //
    SmsMainApiPathProcessFlowListComponent,
    SmsMainApiPathProcessFlowAddComponent,
    SmsMainApiPathProcessFlowEditComponent,
    SmsMainApiPathProcessFlowDeleteComponent,
    SmsMainApiPathProcessFlowSelectComponent,
    //
    SmsMainApiPathProcessFlowLogListComponent,
    SmsMainApiPathProcessFlowLogEditComponent,
    //
    SmsMainApiPathPublicConfigListComponent,
    SmsMainApiPathPublicConfigAddComponent,
    SmsMainApiPathPublicConfigEditComponent,
    SmsMainApiPathPublicConfigDeleteComponent,
    SmsMainApiPathPublicConfigSelectComponent,
    //
    SmsMainApiPathSuperSederListComponent,
    SmsMainApiPathSuperSederAddComponent,
    SmsMainApiPathSuperSederEditComponent,
    SmsMainApiPathSuperSederDeleteComponent,
    SmsMainApiPathSuperSederSelectComponent,
    //
    SmsMainCustomerNumberListComponent,
    SmsMainCustomerNumberAddComponent,
    SmsMainCustomerNumberEditComponent,
    SmsMainCustomerNumberDeleteComponent,
    SmsMainCustomerNumberSelectComponent,

  ],
  providers: [SmsMainApiPathCompanyService, SmsMainApiPathService, CoreEnumService, SmsMainApiPathSuperSederService],
})
export class SmsModule { }
