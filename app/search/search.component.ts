import { Component, OnInit, Output, EventEmitter } 		from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'search',
	templateUrl: './search.component.html',
	styleUrls: ['../styles/search/styles.css'],
})

export class SearchComponent{ 
	@Output() update = new EventEmitter();

	constructor() {
	}

	ngOnInit(){
		this.update.emit('');
	}

}