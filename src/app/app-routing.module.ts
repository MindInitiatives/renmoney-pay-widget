import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RenmoneyPayEdetialsComponent } from './components/renmoney-pay-edetials/renmoney-pay-edetials.component';
import { RenmoneyPayElcheckComponent } from './components/renmoney-pay-elcheck/Renmoney-pay-elcheck.component';
import { RenmoneyPayIntroComponent } from './components/renmoney-pay-intro/renmoney-pay-intro.component';
import { RenmoneyPayPdetailsComponent } from './components/renmoney-pay-pdetails/renmoney-pay-pdetails.component';

const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: 'intro', component: RenmoneyPayIntroComponent},
  // {
  //   path: 'eligibility-check',
  //   component: RenmoneyPayElcheckComponent,
  //   loadChildren: () =>
  //     import(`./components/renmoney-pay-elcheck/Renmoney-pay-elcheck.module`).then(
  //       (m) => m.RenmoneyPayElcheckModule
  //     ),
  // },
  {
    path:'eligibility-check', component: RenmoneyPayElcheckComponent
  },
  // {
  //   path: 'personal-details',
  //   component: RenmoneyPayPdetailsComponent,
  //   loadChildren: () =>
  //     import(`./components/renmoney-pay-pdetails/Renmoney-pay-pdetails.module`).then(
  //       (m) => m.RenmoneyPayPdetailsModule
  //     ),
  // },
  { path: 'personal-details', component: RenmoneyPayPdetailsComponent},
  { path: 'employment-details', component: RenmoneyPayEdetialsComponent },
  // {
  //   path: 'employment-details',
  //   component: RenmoneyPayEdetialsComponent,
  //   loadChildren: () =>
  //     import(`./components/renmoney-pay-edetials/renmoney-pay-edtials.module`).then(
  //       (m) => m.RenmoneyPayEdtialsModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
