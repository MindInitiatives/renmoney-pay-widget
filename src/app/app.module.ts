import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenmoneyPayIntroComponent } from './components/renmoney-pay-intro/renmoney-pay-intro.component';
import { createCustomElement } from '@angular/elements';
import { Router } from "@angular/router";
import { Location } from "@angular/common";

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RenmoneyPayService } from './services/renmoney-pay.service';
import { DataService } from './services/data.service';
import { RenmoneyPayPdetailsComponent } from './components/renmoney-pay-pdetails/renmoney-pay-pdetails.component';
import { RenmoneyPayElcheckComponent } from './components/renmoney-pay-elcheck/Renmoney-pay-elcheck.component';
import { RenmoneyPayEdetialsComponent } from './components/renmoney-pay-edetials/renmoney-pay-edetials.component';

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
  providers: [RenmoneyPayService, DataService],
  // bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector,
    private router: Router,
    private location: Location) {
    const myElement = createCustomElement(AppComponent, { 
      injector: this.injector });
      
    customElements.define('app-element', myElement);

    //init router with starting path
    this.router.navigateByUrl(this.location.path(true));

    //on every route change tell router to navigate to defined route
    this.location.subscribe(data => {
      this.router.navigateByUrl(data.url);
    });
  }

  ngDoBootstrap() {
  }
  
 }
