import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';

// This is called a decorator
@Injectable()

export class MissionService {
	
	constructor(private http: Http){

	}
	getMissions(){
		let missions = this.http.get('http://swapi.co/api/planets/');
		return Promise.resolve(missions);
	}
	
}