import { Component, Input, EventEmitter } from '@angular/core';

@Component({
	selector: 'rating',
	templateUrl: 'app/rating/rating.component.html',
	styleUrls: ['./app/styles/rating/styles.css'],
	outputs: ['updateRate: rateChange']
})
export class Rating {
	@Input() rate: number;
	private range:Array<number> = [1,2,3,4,5];
	private updateRate = new EventEmitter();
	constructor() {		
	}
	update(value: number) {
		console.log('Stars: ' + value);
		this.rate = value;
		this.updateRate.next(value);
	}
}