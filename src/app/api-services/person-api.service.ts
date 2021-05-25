import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonResponse } from '../models/personResponse.model';

@Injectable({
  providedIn: 'root'
})
export class PersonApiService {

  constructor(private http: HttpClient,) { }

  public getPersons(): Promise<PersonResponse>{
    return new Promise((resolve, reject) => {
			this.http.get(
				`http://localhost:5000/api/Person`
			).subscribe((resposta: PersonResponse) => {
				resolve(resposta);
			}, (erro) => {
				reject(erro);
			});
		});
  }
}
