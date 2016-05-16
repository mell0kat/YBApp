import { Injectable } from 'angular2/core';
import { Http, HTTP_BINDINGS, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { Species } from './components/species.components';
// This is called a decorator


@Injectable()
export class MissionService {
	
	constructor(private http: Http){}
	getMissions (): Observable <Species[]> {
		return this.http.get('http://swapi.co/api/planets/')
			.map(this.extractData)
			.catch(this.handleError)
			// .then(res => {
			// 	console.log('res', res)
			// 	console.log('trying to get missions in missionservice')
			// })
		
		// let missions = this.http.get(
		
		// return Promise.resolve(missions);
		
		// .then(people => {console.log('people:', people)})
	}
	private extractData(res: Response) {
		  if (res.status < 200 || res.status >= 300) {
	      throw new Error('Response status: ' + res.status);
	    }
	    console.log('THIS IS THE RES', res, 'type of res:', typeof res, 'typeof res.body', typeof res._body)
	    let body = JSON.parse(res._body);

	    return body;
	}
	private handleError (error: any) {
	    // In a real world app, we might use a remote logging infrastructure
	    let errMsg = error.message || 'Server error';
	    console.error(errMsg); // log to console instead
	    return Observable.throw(errMsg);
	  }
}