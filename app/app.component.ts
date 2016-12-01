import { Component } from '@angular/core';

import { Movie } from './movie';

const MOVIES: Movie[] = [
{ id: 1, title: "Pete's Dragon"},
{ id: 2, title: "Moana"},
{ id: 3, title: 'Solace' },
{ id: 4, title: 'Passengers' },
{ id: 5, title: 'Assassins Creed' },
{ id: 6, title: 'Rogue One' },
{ id: 7, title: 'Nocturnal Animals' },
{ id: 8, title: 'Miss Peregrines' },
{ id: 9, title: 'The Shining' },
{ id: 10, title: 'Suicide Squad' }
];

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html',
	styleUrls: ['app/styles/styles.css']
})

export class AppComponent { 
	name: string;
	movies = MOVIES;
	constructor() {
		this.name = 'Other World';
	}
	sayName() {
		console.log('My workshop is', this.name)
	}
}