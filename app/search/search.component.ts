import { Component } 		from '@angular/core';
import { Movie } 			from '../movie';

@Component({
	moduleId: module.id,
	selector: 'search',
	templateUrl: './search.component.html',
	styleUrls: ['../styles/search/styles.css'],
})

export class SearchComponent{ 
	movies: Movie[];

	constructor() {
	}

}