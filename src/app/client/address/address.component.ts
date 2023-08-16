import { Component } from '@angular/core';
import { ClientCrudService } from 'src/app/client-crud.service';
import Address from './address';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  addresses$!: Observable<Address[]>;
  addresses: Address[] = [];

  constructor(private clientCrud: ClientCrudService) { }

  ngOnInit(): void {
    this.addresses$ = this.clientCrud.getClient().pipe(
      map(response => response.addresses)
    );
  }
}
