import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Movie } from '../movie';
//import { MOVIES } from './mock-movies';

@Injectable()
export class MovieService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private moviesUrl = './service/movies';  // URL to web api

	constructor(
		private http: Http,
		) { }

	getMovies(): Promise<Movie[]> {
		return this.http.get(this.moviesUrl)
		.toPromise()
		.then(response => response.json().data as Movie[])
	}

	update(movie: Movie): Promise<Movie> {
		console.log('Updating!');
		const url = `${this.moviesUrl}/${movie.id}`;
		return this.http
		.put(url, JSON.stringify(movie), {headers: this.headers})
		.toPromise()
		.then(() => movie)
		.catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}