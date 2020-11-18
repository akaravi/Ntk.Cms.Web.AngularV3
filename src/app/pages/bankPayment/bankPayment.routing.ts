import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { BankPaymentPrivateSiteConfigAddComponent } from "./privateSiteConfig/add/bankPaymentPrivateSiteConfigAdd.component";
import { BankPaymentPrivateSiteConfigEditComponent } from "./privateSiteConfig/edit/bankPaymentPrivateSiteConfigEdit.component";
import { BankPaymentPrivateSiteConfigListComponent } from "./privateSiteConfig/list/bankPaymentPrivateSiteConfigList.component";
import { BankPaymentPublicConfigAddComponent } from "./publicConfig/add/bankPaymentPublicConfigAdd.component";
import { BankPaymentPublicConfigEditComponent } from "./publicConfig/edit/bankPaymentPublicConfigEdit.component";
import { BankPaymentPublicConfigListComponent } from "./publicConfig/list/bankPaymentPublicConfigList.component";
import { BankPaymentTransactionAddComponent } from "./transaction/add/bankPaymentTransactionAdd.component";
import { BankPaymentTransactionEditComponent } from "./transaction/edit/bankPaymentTransactionEdit.component";
import { BankPaymentTransactionListComponent } from "./transaction/list/bankPaymentTransactionList.component";
import { BankPaymentTransactionLogEditComponent } from './transactionLog/edit/bankPaymentTransactionLogEdit.component';
import { BankPaymentTransactionLogListComponent } from './transactionLog/list/bankPaymentTransactionLogList.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "publicconfig",
        children: [
          {
            path: "",
            component: BankPaymentPublicConfigListComponent,
            data: {
              title: "login to Panle",
            },
          },
          {
            path: "list",
            component: BankPaymentPublicConfigListComponent,
            data: {
              title: "login to Panle",
            },
          },
          {
            path: "add",
            component: BankPaymentPublicConfigAddComponent,
            data: {
              title: "Register New Acount",
            },
          },
          {
            path: "edit",
            component: BankPaymentPublicConfigEditComponent,
            data: {
              title: "forgot password You Acount",
            },
          },
        ],
      },
      {
        path: "privatesiteconfig",
        children: [
          {
            path: "",
            component: BankPaymentPrivateSiteConfigListComponent,
            data: {
              title: "login to Panle",
            },
          },
          {
            path: "list",
            component: BankPaymentPrivateSiteConfigListComponent,
            data: {
              title: "login to Panle",
            },
          },
          {
            path: "add",
            component: BankPaymentPrivateSiteConfigAddComponent,
            data: {
              title: "Register New Acount",
            },
          },
          {
            path: "edit",
            component: BankPaymentPrivateSiteConfigEditComponent,
            data: {
              title: "forgot password You Acount",
            },
          },
        ],
      },
      {
        path: "transaction",
        children: [
          {
            path: "",
            component: BankPaymentTransactionListComponent,
            data: {
              title: "login to Panle",
            },
          },
          {
            path: "list",
            component: BankPaymentTransactionListComponent,
            data: {
              title: "login to Panle",
            },
          },
          {
            path: "add",
            component: BankPaymentTransactionAddComponent,
            data: {
              title: "Register New Acount",
            },
          },
          {
            path: "edit",
            component: BankPaymentTransactionEditComponent,
            data: {
              title: "forgot password You Acount",
            },
          },
        ],
      },
      {
        path: "transactionlog",
        children: [
          {
            path: "",
            component: BankPaymentTransactionLogListComponent,
            data: {
              title: "login to Panle",
            },
          },
          {
            path: "list",
            component: BankPaymentTransactionLogListComponent,
            data: {
              title: "login to Panle",
            },
          },

          {
            path: "edit",
            component: BankPaymentTransactionLogEditComponent,
            data: {
              title: "forgot password You Acount",
            },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankPaymentRoutes { }
