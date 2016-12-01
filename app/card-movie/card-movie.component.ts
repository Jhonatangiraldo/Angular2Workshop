import { Component, Input } from '@angular/core';

@Component({
	selector: 'card-movie',
	templateUrl: 'app/card-movie/card-movie.component.html',
	styleUrls: ['./app/styles/card-movie/styles.css']
})
export class CardMovieComponent {
	@Input() title: string;
	@Input() id: number;
	@Input() poster: string;
	@Input() rate: number;
	constructor() {}
}