import { Component, Input } from '@angular/core';

import { Movie }        from '../movie';

@Component({
	selector: 'modal',
	templateUrl: 'app/modal/modal.component.html',
	styleUrls: ['./app/styles/modal/styles.css']
})
export class ModalComponent {
	@Input() movieSelected: Movie;
	constructor() {}
}