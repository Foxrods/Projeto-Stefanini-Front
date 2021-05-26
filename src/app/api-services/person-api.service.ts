import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonResponse } from '../models/personResponse.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonApiService {

  constructor(private http: HttpClient,) { }

  public getPersons(): Promise<PersonResponse>{
    return new Promise((resolve, reject) => {
			this.http.get(
				`${environment.api_url}/Person`
			).subscribe((resposta: PersonResponse) => {
				resolve(resposta);
			}, (erro) => {
				reject(erro);
			});
		});
  }
}
