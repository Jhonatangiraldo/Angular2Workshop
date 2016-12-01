import { NgModule }             		from '@angular/core';
import { RouterModule, Routes } 		from '@angular/router';

import { AppComponent }   				from './app.component';
//import { OtherComponentComponent }      from './other-component/other-component.component';
import { FirstComponentComponent }      from './first-component/first-component.component';

const routes: Routes = [
{ path: '',  component: FirstComponentComponent },
//{ path: 'other', component: OtherComponentComponent },
];
@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}