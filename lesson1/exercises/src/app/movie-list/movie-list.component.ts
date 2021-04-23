import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['The Lost Boys', 'Aliens', 'The Blues Brothers', 'The Princess Bride'];

   constructor() { }

   ngOnInit() {
   }

}
