import { Component, Input, Output, EventEmitter} from '@angular/core';

import { Movie }        from '../movie';

@Component({
	selector: 'card-movie',
	templateUrl: 'app/card-movie/card-movie.component.html',
	styleUrls: ['./app/styles/card-movie/styles.css']
})
export class CardMovieComponent {
	@Output() update = new EventEmitter();

	@Input() movie: Movie;

	constructor() {}

	clicked(movieSelectedCard: Movie[]){
		this.update.emit(movieSelectedCard);
	}

}