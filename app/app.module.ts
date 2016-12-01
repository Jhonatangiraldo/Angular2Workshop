import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FirstComponentComponent }  from './first-component/first-component.component';
import { CardMovieComponent }  from './card-movie/card-movie.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
	imports:      [ 
	BrowserModule,
	AppRoutingModule 
	],
	declarations: [ 
	AppComponent, 
	FirstComponentComponent,
	CardMovieComponent 
	],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }