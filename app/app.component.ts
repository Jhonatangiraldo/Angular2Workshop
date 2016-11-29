import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: '<div>Welcome {{name}}. <button (click)="sayMyName()">Say my name</button></div>'
})
export class AppComponent { 
	constructor() {
		this.name = 'Jose Julian'
	}
	sayMyName() {
		console.log('My name is', this.name)
	}
}