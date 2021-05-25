import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../customerdetails'
import { DataService } from '../data.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'
import { PersonPhone } from '../models/personPhone.model';
import { PersonPhoneResponse } from '../models/personPhoneResponse.model';
import { PersonPhoneApiService } from '../api-services/personPhone-api.service';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {

  public phonesList: PersonPhone[];
  public inserir: boolean = false;
  public editar: boolean = false;

  constructor(private personPhoneApiService: PersonPhoneApiService, private activeRoute: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.getCustomerDetails();
  }

  getCustomerDetails(): void {
    this.activeRoute.params.subscribe(routeParams => {

      this.personPhoneApiService.getPersonPhones(routeParams.id).then(
        (resposta: PersonPhoneResponse) => {
          if(resposta != null){
            this.phonesList = resposta.personPhoneObjects;
            console.log(this.phonesList)
          }
        }
      );

    });

  }

  deletePersonPhone(id: number){
    console.log(id);
    this.personPhoneApiService.deletePersonPhone(id).then(
      (resposta: any) => {
        this.getCustomerDetails();
      }
    );
  }

  insertPersonPhone(){
    this.inserir = true;
  }

  editPersonPhone(phone: PersonPhone){

    let body = new PersonPhone();
    body.businessEntityID = phone.businessEntityID;
    body.phoneNumberTypeID = phone.phoneNumberTypeID;
    body.personID = phone.personID;
    body.phoneNumber = phone.phoneNumber;

    this.personPhoneApiService.editPersonPhone(body).then(
      (resposta: any) => {
        this.getCustomerDetails();
      }
    );
  }

  goToCustomerPage() : void {
    this.router.navigateByUrl("/pessoas");
  }

}
