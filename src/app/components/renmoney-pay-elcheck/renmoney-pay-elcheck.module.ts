import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { RenmoneyPayElcheckComponent } from './Renmoney-pay-elcheck.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "",
    component: RenmoneyPayElcheckComponent
  }
];

@NgModule({
  declarations: [RenmoneyPayElcheckComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class RenmoneyPayElcheckModule { }
