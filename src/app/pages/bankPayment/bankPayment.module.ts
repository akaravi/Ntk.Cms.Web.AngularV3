import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BankPaymentRoutes } from "./bankPayment.routing";
import { TreeModule } from "angular-tree-component";

import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { NgxQueryBuilderModule } from "ngx-query-builder";
import { FormsModule } from "@angular/forms";

import { QuillModule } from "ngx-quill";
import { CmsSharedModule } from "app/@cms/shared/cmsShared.module";
import { BankPaymentTransactionLogEditComponent } from './transactionLog/edit/bankPaymentTransactionLogEdit.component';
import { BankPaymentPrivateSiteConfigAddComponent } from './privateSiteConfig/add/bankPaymentPrivateSiteConfigAdd.component';
import { BankPaymentPrivateSiteConfigDeleteComponent } from './privateSiteConfig/delete/bankPaymentPrivateSiteConfigDelete.component';
import { BankPaymentPrivateSiteConfigEditComponent } from './privateSiteConfig/edit/bankPaymentPrivateSiteConfigEdit.component';
import { BankPaymentPrivateSiteConfigListComponent } from './privateSiteConfig/list/bankPaymentPrivateSiteConfigList.component';
import { BankPaymentPrivateSiteConfigSelectComponent } from './privateSiteConfig/select/bankPaymentPrivateSiteConfigSelect.component';
import { BankPaymentTransactionAddComponent } from './transaction/add/bankPaymentTransactionAdd.component';
import { BankPaymentTransactionEditComponent } from './transaction/edit/bankPaymentTransactionEdit.component';
import { BankPaymentTransactionListComponent } from './transaction/list/bankPaymentTransactionList.component';
import { BankPaymentTransactionLogListComponent } from './transactionLog/list/bankPaymentTransactionLogList.component';
import { BankPaymentPublicConfigAddComponent } from './publicConfig/add/bankPaymentPublicConfigAdd.component';
import { BankPaymentPublicConfigDeleteComponent } from './publicConfig/delete/bankPaymentPublicConfigDelete.component';
import { BankPaymentPublicConfigEditComponent } from './publicConfig/edit/bankPaymentPublicConfigEdit.component';
import { BankPaymentPublicConfigListComponent } from './publicConfig/list/bankPaymentPublicConfigList.component';
import { BankPaymentPublicConfigSelectComponent } from './publicConfig/select/bankPaymentPublicConfigSelect.component';
import { BankPaymentPrivateSiteConfigService, BankPaymentPublicConfigService, BankPaymentTransactionService, BankPaymentTransactionLogService } from 'ntk-cms-api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BankPaymentRoutes,
    NgxDatatableModule,
    TreeModule.forRoot(),
    //NgxQueryBuilderModule,

    QuillModule,
    CmsSharedModule,
  ],
  declarations: [
    //
    BankPaymentPublicConfigAddComponent,
    BankPaymentPublicConfigEditComponent,
    BankPaymentPublicConfigDeleteComponent,
    BankPaymentPublicConfigListComponent,
    BankPaymentPublicConfigSelectComponent,
    //
    BankPaymentPrivateSiteConfigAddComponent,
    BankPaymentPrivateSiteConfigEditComponent,
    BankPaymentPrivateSiteConfigDeleteComponent,
    BankPaymentPrivateSiteConfigListComponent,
    BankPaymentPrivateSiteConfigSelectComponent,
    //
    BankPaymentTransactionAddComponent,
    BankPaymentTransactionEditComponent,
    BankPaymentTransactionListComponent,
    //
    BankPaymentTransactionLogEditComponent,
    BankPaymentTransactionLogListComponent,
  ],
  exports: [],
  providers: [
    BankPaymentPrivateSiteConfigService,
    BankPaymentPublicConfigService,
    BankPaymentTransactionService,
    BankPaymentTransactionLogService,
  ],
  //,schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class BankPaymentModule { }
