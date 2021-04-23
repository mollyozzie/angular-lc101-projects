import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favlinks = ['https://pinchofyum.com', 'https://www.halfbakedharvest.com', 'https://www.myfavoritemurder.com']
  constructor() { }

  ngOnInit() {
  }

}
