import { Component, OnInit } from '@angular/core';
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

  goToDetailsPage(id : number) : void {
    this.router.navigateByUrl("/listatelefones/"+id);
  }

}
