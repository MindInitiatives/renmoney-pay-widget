import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { RenmoneyPayEdetialsComponent } from './renmoney-pay-edetials.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "",
    component: RenmoneyPayEdetialsComponent
  }
];

@NgModule({
  declarations: [RenmoneyPayEdetialsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class RenmoneyPayEdtialsModule { }
