import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenmoneyPayIntroComponent } from './components/renmoney-pay-intro/renmoney-pay-intro.component';
import { RenmoneyPayElcheckComponent } from './components/renmoney-pay-elcheck/Renmoney-pay-elcheck.component';
import { RenmoneyPayPdetailsComponent } from './components/renmoney-pay-pdetails/renmoney-pay-pdetails.component';
import { RenmoneyPayEdetialsComponent } from './components/renmoney-pay-edetials/renmoney-pay-edetials.component';
import {createCustomElement} from '@angular/elements';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RenmoneyPayIntroComponent,
    RenmoneyPayElcheckComponent,
    RenmoneyPayPdetailsComponent,
    RenmoneyPayEdetialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents: []
})
export class AppModule { 
  constructor(
    private injector: Injector
  ) {
  }

  // tslint:disable-next-line:typedef
  // ngDoBootstrap() {
  //   const weathercomponent = createCustomElement(WeatherComponent, {injector: this.injector});
  //   customElements.define('app-weather', weathercomponent);
  // }
 }
