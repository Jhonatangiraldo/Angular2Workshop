import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { OtherComponentComponent }  from './other-component.component';

@NgModule({
	imports:      [ BrowserModule ],
	declarations: [ 
	AppComponent, 
	OtherComponentComponent 
	],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }