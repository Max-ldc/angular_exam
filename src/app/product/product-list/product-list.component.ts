import { ProductCrudService } from 'src/app/product-crud.service';
import { Component, OnInit } from '@angular/core';
import Product from '../product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$!: Observable<Product[]>;

  constructor(private productCrud: ProductCrudService) { }

  ngOnInit(): void {
    this.products$ = this.productCrud.getProducts();
  }
}
