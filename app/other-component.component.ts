import { Component, Input } from '@angular/core';

@Component({
	selector: 'other-component',
	template: '<div>{{name}}</div>'
})
export class OtherComponentComponent {
	@Input() name: string;
	constructor() {}
}