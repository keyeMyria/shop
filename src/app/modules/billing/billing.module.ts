import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BillingMainComponent } from './components/billing-main/billing-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewBillingComponent } from './components/new-billing/new-billing.component';
import { BillingFormComponent } from './components/billing-form/billing-form.component';
import { BillingInfoComponent } from './components/billing-info/billing-info.component';

export const billingRoutes: Routes = [
  {
    path: '', component: BillingMainComponent,
    children: [
      { path: '',   redirectTo: 'new', pathMatch: 'prefix' },
      // { path: 'list', component: ProductsListComponent },
      { path: 'new', component: NewBillingComponent }
    ]
  },
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(billingRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [BillingMainComponent, NewBillingComponent, BillingFormComponent, BillingInfoComponent]
})
export class BillingModule { }
