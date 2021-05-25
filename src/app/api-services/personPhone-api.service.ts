import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonPhone } from '../models/personPhone.model';
import { PersonPhoneResponse } from '../models/personPhoneResponse.model';

@Injectable({
  providedIn: 'root'
})
export class PersonPhoneApiService {

  constructor(private http: HttpClient,) { }

  public getPersonPhones(id: number): Promise<PersonPhoneResponse>{
    return new Promise((resolve, reject) => {
			this.http.get(
				`http://localhost:5000/api/Person/Phones/`+id
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
				`http://localhost:5000/api/PersonPhone/`+id
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
				`http://localhost:5000/api/PersonPhone/`,
        personPhone
			).subscribe((resposta: any) => {
				resolve(resposta);
			}, (erro) => {
				reject(erro);
			});
		});
  }
}
