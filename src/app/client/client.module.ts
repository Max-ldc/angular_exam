import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { AddressComponent } from './address/address.component';
import { InfosComponent } from './infos/infos.component';
import { AppRoutingModule } from '../app-routing.module';
import { OrderComponent } from './infos/order/order.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ClientComponent,
    AddressComponent,
    InfosComponent,
    OrderComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class ClientModule { }
