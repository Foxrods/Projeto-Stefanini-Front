import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Customer } from '../customer';
import { Router } from '@angular/router'
import { PersonApiService } from '../api-services/person-api.service';
import { PersonResponse } from '../models/personResponse.model';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  selectedCustomer : string = "temp";
  public personsList: Person[];

  constructor(private personApiService: PersonApiService, private router:Router) { }

  ngOnInit() {
    this.getPersonsList();
  }

  getPersonsList(): void {
    this.personApiService.getPersons().then(
      (resposta: PersonResponse) => {
        if(resposta != null){
          this.personsList = resposta.personObjects;
          console.log(this.personsList)
        }
      }
    );
  }

  setSelectedCustomer( cust : string ): void {
    this.selectedCustomer = cust ;
  }

  goToDetailsPage(id : number) : void {
    this.router.navigateByUrl("/listatelefones/"+id);
  }

}
