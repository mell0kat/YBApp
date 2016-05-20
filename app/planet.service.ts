import { Injectable } from 'angular2/core';
import { Http, HTTP_BINDINGS } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

// This is called a decorator
@Injectable()
export class PlanetService {
	
	constructor(private http: Http){

	}
	getPlanets(): Observable<Planet[]> {
		return this.http.get('http://swapi.co/api/planets/')
			.map(this.extractData)
			.catch(this.handleError)
	}
	private extractData(res: Response) {
		  if (res.status < 200 || res.status >= 300) {
	      throw new Error('Response status: ' + res.status);
	    }
		let body = JSON.parse(res._body);

		return body.results;
	}
	  private handleError (error: any) {
	    // In a real world app, we might use a remote logging infrastructure
	    let errMsg = error.message || 'Server error';
	    console.error(errMsg); // log to console instead
	    // return Observable.throw(errMsg);
	  }
}