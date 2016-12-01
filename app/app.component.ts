import { Component, OnInit } from '@angular/core';

import { Movie } from './movie';
import { MovieService } from './service/movie.service';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html',
	styleUrls: ['app/styles/styles.css'],
	providers: [MovieService]
})

export class AppComponent implements OnInit{ 
	name: string;
	movies: Movie[];
	constructor( private movieService: MovieService ) {
		this.name = 'Other World';
	}

	getMovies(): void {
		this.movieService.getMovies().then(movies => this.movies = movies);
	}
	ngOnInit(): void {
		this.getMovies();
	}

	sayName() {
		console.log('My workshop is', this.name)
	}
}