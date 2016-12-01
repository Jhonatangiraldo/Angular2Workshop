import { Component, Input } from '@angular/core';

@Component({
	selector: 'rating',
	templateUrl: 'app/rating/rating.component.html',
	styleUrls: ['./app/styles/rating/styles.css']
})
export class Rating {
	@Input() rate: number;
	constructor() {}
}