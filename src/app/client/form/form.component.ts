import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Address from '../address/address';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  streetLine1 = "";
  streetLine2 = "";
  zipCode = 0;
  city = "";
  phone = "";

  formSent = false;

  newAddress!: Address;

  onSubmit() {
    this.formSent = true;
    this.newAddress = {
      streetLine1: this.streetLine1,
      streetLine2: this.streetLine2,
      zipCode: this.zipCode,
      city: this.city,
      phone: this.phone,
      countryID: 250,
      clientID: "a0a4bf9e-b3ee-4423-907c-641b18d7af73",
    }
    console.log(this.newAddress);
  }
}
