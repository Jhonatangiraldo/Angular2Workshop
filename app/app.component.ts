import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
	<div>Welcome to {{name}} workshop. <button (click)="sayName()">Say name</button></div>
	<user-profile [name]="name"></user-profile>
	`
})

export class AppComponent { 
	constructor() {
		this.name = 'Angular 2 / Globant'
	}
	sayName() {
		console.log('My workshop is', this.name)
	}
}



