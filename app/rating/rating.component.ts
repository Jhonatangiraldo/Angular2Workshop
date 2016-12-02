import { Component, Input } 	from '@angular/core';

import { Movie }        from '../movie';
import { MovieService } from '../service/movie.service';

@Component({
	selector: 'rating',
	templateUrl: 'app/rating/rating.component.html',
	styleUrls: ['./app/styles/rating/styles.css'],
})

export class Rating{

	@Input() movie: Movie;	

	private range:Array<number> = [1,2,3,4,5];

	constructor(
		private movieService: MovieService,
		) {}

	update(value: number) {
		this.movie.rate = value;
		this.movieService.update(this.movie);
		console.log( this.movieService.getMovies() );
	}
}