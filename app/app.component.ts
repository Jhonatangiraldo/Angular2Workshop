import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html',
	styleUrls: ['app/styles/styles.css']
})

export class AppComponent { 
	name: string;
	constructor() {
		this.name = 'Other World';
	}
	sayName() {
		console.log('My workshop is', this.name)
	}
}