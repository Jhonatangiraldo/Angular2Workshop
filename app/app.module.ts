import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './service/in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }  from './app.component';
import { Rating }  from './rating/rating.component';
import { SearchComponent }  from './search/search.component';
import { CardMovieComponent }  from './card-movie/card-movie.component';
import { ModalComponent }  from './modal/modal.component';

import { SearchPipe }			from './search/search.pipe'


@NgModule({
	imports:      [ 
	BrowserModule,
	HttpModule,
	InMemoryWebApiModule.forRoot(InMemoryDataService),
	AppRoutingModule,	
	],
	declarations: [ 
	AppComponent, 
	Rating,
	SearchComponent,
	CardMovieComponent,
	ModalComponent,
	SearchPipe
	],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }