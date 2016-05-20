import { Injectable } from 'angular2/core';
import { Http, HTTP_BINDINGS } from 'angular2/http';

// This is called a decorator
@Injectable()
export class PlanetService {
	
	constructor(private http: Http){

	}
	getPlanets(){
		
		let planets = this.http.get('http://swapi.co/api/planets/')
		
		return Promise.resolve(planets);
	}
	private extractData(res: Response) {
		  if (res.status < 200 || res.status >= 300) {
	      throw new Error('Response status: ' + res.status);
	    }
	    let body = res.json();
	    return body.data || { };
	}
	  private handleError (error: any) {
	    // In a real world app, we might use a remote logging infrastructure
	    let errMsg = error.message || 'Server error';
	    console.error(errMsg); // log to console instead
	    // return Observable.throw(errMsg);
	  }
}