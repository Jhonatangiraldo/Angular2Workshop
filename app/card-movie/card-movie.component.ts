import { Component, Input } from '@angular/core';

import { Movie }        from '../movie';

@Component({
	selector: 'card-movie',
	templateUrl: 'app/card-movie/card-movie.component.html',
	styleUrls: ['./app/styles/card-movie/styles.css']
})
export class CardMovieComponent {
	@Input() movie: Movie;
	constructor() {}
}