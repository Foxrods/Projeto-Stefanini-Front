import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonPhone } from '../models/personPhone.model';
import { PersonPhoneResponse } from '../models/personPhoneResponse.model';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PersonPhoneApiService {

  constructor(private http: HttpClient,) { }

  public getPersonPhones(id: number): Promise<PersonPhoneResponse>{
    return new Promise((resolve, reject) => {
			this.http.get(
				`${environment.api_url}/Person/Phones/`+id
			).subscribe((resposta: PersonPhoneResponse) => {
				resolve(resposta);
			}, (erro) => {
				reject(erro);
			});
		});
  }

  public deletePersonPhone(id: number): Promise<any>{
    return new Promise((resolve, reject) => {
			this.http.delete(
				`${environment.api_url}/PersonPhone/`+id
			).subscribe((resposta: any) => {
				resolve(resposta);
			}, (erro) => {
				reject(erro);
			});
		});
  }

  public editPersonPhone(personPhone: PersonPhone): Promise<any>{
    return new Promise((resolve, reject) => {
			this.http.put(
				`${environment.api_url}/PersonPhone/`,
        personPhone
			).subscribe((resposta: any) => {
				resolve(resposta);
			}, (erro) => {
				reject(erro);
			});
		});
  }

  public insertPersonPhone(personPhone: PersonPhone): Promise<any>{
    return new Promise((resolve, reject) => {
			this.http.post(
				`${environment.api_url}/PersonPhone/`,
        personPhone
			).subscribe((resposta: any) => {
				resolve(resposta);
			}, (erro) => {
				reject(erro);
			});
		});
  }
}
