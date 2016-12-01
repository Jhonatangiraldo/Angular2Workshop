import { Component, Input } from '@angular/core';

@Component({
	selector: 'other-component',
	templateUrl: 'app/other-component/other-component.component.html',
	styleUrls: ['./app/styles/other-component/styles.css']
})
export class OtherComponentComponent {
	@Input() name: string;
	constructor() {}
}