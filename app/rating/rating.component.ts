import { Component, OnInit, Input } 	from '@angular/core';

import { Movie }        from '../movie';
import { MovieService } from '../service/movie.service';

@Component({
	selector: 'rating',
	templateUrl: 'app/rating/rating.component.html',
	styleUrls: ['./app/styles/rating/styles.css'],
	outputs: ['updateRate: rateChange']
})

export class Rating{
	movie: Movie;

	@Input() rate: number;	
	@Input() id: number;	

	private range:Array<number> = [1,2,3,4,5];

	constructor(
		private movieService: MovieService,
		) {}
	update(value: number) {
		console.log('Stars: ' + value);
		this.rate = value;
	}
}