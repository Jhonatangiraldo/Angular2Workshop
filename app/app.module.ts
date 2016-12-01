import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FirstComponentComponent }  from './first-component/first-component.component';
import { OtherComponentComponent }  from './other-component/other-component.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
	imports:      [ 
	BrowserModule,
	AppRoutingModule 
	],
	declarations: [ 
	AppComponent, 
	FirstComponentComponent,
	OtherComponentComponent 
	],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }