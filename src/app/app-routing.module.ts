import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ClientComponent } from './client/client/client.component';
import { Error404Component } from './error404/error404.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { AddressComponent } from './client/address/address.component';
import { InfosComponent } from './client/infos/infos.component';
import { FormComponent } from './client/form/form.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'products', component: ProductListComponent },
  {
    path: 'client',
    component: ClientComponent,
    children: [
      { path: 'address', component: AddressComponent },
      { path: 'infos', component: InfosComponent },
      { path: 'form', component: FormComponent }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'index' },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
