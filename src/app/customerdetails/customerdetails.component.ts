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
  customerDetails: CustomerDetails = null;
  phonesList: PersonPhone[];

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

  goToCustomerPage() : void {
    this.router.navigateByUrl("/pessoas");
  }

}
