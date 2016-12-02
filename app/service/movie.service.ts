import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Movie } from '../movie';
//import { MOVIES } from './mock-movies';

@Injectable()
export class MovieService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private moviesUrl = './service/movies';  // URL to web api

	constructor(private http: Http) { }

	getMovies(): Promise<Movie[]> {
		return this.http.get(this.moviesUrl)
		.toPromise()
		.then(response => response.json().data as Movie[])
	}
	
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}