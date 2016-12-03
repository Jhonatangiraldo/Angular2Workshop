import { Pipe, PipeTransform } from '@angular/core';

import { Movie } from '../movie';

@Pipe({
	name: "search",
})

export class SearchPipe implements PipeTransform {
	transform (movies: Movie[]) {
		if (movies==null) {
     	 	return null;
    	}
	    return movies.filter((item) => item.title.startsWith('M'))
	  }
}