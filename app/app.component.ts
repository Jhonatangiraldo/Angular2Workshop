import { Component, OnInit }	from '@angular/core';

import { Movie } 				from './movie';
import { MovieService } 		from './service/movie.service';
import { SearchPipe }			from './search/search.pipe'


@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html',
	styleUrls: ['app/styles/styles.css'],
	providers: [MovieService],
})

export class AppComponent implements OnInit{ 
	movies: Movie[];
	constructor( private movieService: MovieService ) {
	}
	getMovies(): void {
		this.movieService.getMovies().then(movies => this.movies = movies);
	}
	ngOnInit(): void {
		this.getMovies();
	}
}