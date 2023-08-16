import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Product from './product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductCrudService {

  productsUrl = "https://macmickey.azurewebsites.net/Product";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
}
