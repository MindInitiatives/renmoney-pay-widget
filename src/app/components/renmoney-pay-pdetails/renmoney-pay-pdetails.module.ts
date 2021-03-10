import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { RenmoneyPayPdetailsComponent } from './renmoney-pay-pdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "",
    component: RenmoneyPayPdetailsComponent
  }
];

@NgModule({
  declarations: [RenmoneyPayPdetailsComponent],
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class RenmoneyPayPdetailsModule { }
