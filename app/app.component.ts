import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
	<div>
	Welcome {{name}} to workshop. <button (click)="sayName()">Say name</button>
	</div>
	<other-component [name]="name"></other-component>
	<router-outlet></router-outlet>
	`,
	//styles: [`
	//div{font:100% Helvetica,sans-serif;color:red}
	//`]
	styleUrls: ['/styles/styles.css']
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



