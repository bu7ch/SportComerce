import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { PaymentComponent } from './components/payment/payment.component';
import { StoreComponent } from './components/store/store.component';

const routes: Routes = [
  {path:'', pathMatch:"full", component:StoreComponent},
  {path:'cart', component:CartDetailsComponent},
  {path:'payment', component:PaymentComponent},
  {path:'**', redirectTo:''},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
