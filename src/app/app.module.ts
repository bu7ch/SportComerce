import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './components/store/store.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { PaymentComponent } from './components/payment/payment.component';

import { HttpClientModule } from '@angular/common/http';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    CartDetailsComponent,
    PaymentComponent,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
