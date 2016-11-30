import { Component, Input } from '@angular/core';

@Component({
	selector: 'other-component',
	template: '<div>Other component {{name}}</div>'
})
export class OtherComponentComponent {
	@Input() name: string;
	constructor() {}
}