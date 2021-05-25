import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../customerdetails'
import { DataService } from '../data.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'
import { PersonPhone } from '../models/personPhone.model';
import { PersonPhoneResponse } from '../models/personPhoneResponse.model';
import { PersonPhoneApiService } from '../api-services/personPhone-api.service';
import { PhoneNumberType } from '../models/phoneNumberType.model';

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

  criarPersonPhone(){
    let phone = new PersonPhone();
    phone.businessEntityID = 0;
    phone.phoneNumber = "";
    phone.phoneNumberTypeID = 0
    phone.phoneNumberType = new PhoneNumberType()
    phone.phoneNumberType.name = "";
    this.phonesList.push(phone)
  }

  insertPersonPhone(phone: PersonPhone){
    if(phone.phoneNumber == "" || phone.phoneNumberTypeID == 0){
      return;
    }
    this.activeRoute.params.subscribe(routeParams => {
      let body = new PersonPhone();
      body.phoneNumberTypeID = phone.phoneNumberTypeID;
      body.personID = routeParams.id;
      body.phoneNumber = phone.phoneNumber;

      this.personPhoneApiService.insertPersonPhone(body).then(
        (resposta: any) => {
          this.getCustomerDetails();
        }
      );
    });

  }

  editPersonPhone(phone: PersonPhone){
    if(phone.phoneNumber == ""){
      return;
    }
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
