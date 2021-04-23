import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores-list',
   templateUrl: './chores-list.component.html',
   styleUrls: ['./chores-list.component.css']
})
export class ChoresListComponent implements OnInit {
   chores = ['Do all the laundry', 'Complete LaunchCode work to begin assignment 6', 'Meal plan and make grocery list'];

   constructor() { }

   ngOnInit() {
   }

}