import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientCrudService } from 'src/app/client-crud.service';
import Client from '../client';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {

  client$!: Observable<Client>;

  constructor(private clientCrud: ClientCrudService) { }

  ngOnInit(): void {
    this.client$ = this.clientCrud.getClient();
  }

}
