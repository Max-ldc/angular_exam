import { Component, Input } from '@angular/core';
import Product from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product!: Product;

  // Pour "ouvrir" la carte d'un produit, j'utilise un booléen pour activer ou désactiver la propriété html "hidden" de certains éléments
  isCardOpen = false;

  handleClick() {
    this.isCardOpen = !this.isCardOpen;
  }
}
