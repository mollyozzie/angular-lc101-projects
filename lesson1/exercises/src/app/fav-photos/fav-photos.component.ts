import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Excellent Photos';
  image1 = 'https://image.shutterstock.com/image-photo/costa-mesa-california-september-23-600w-720648007.jpg';
  image2 = 'https://image.shutterstock.com/image-vector/alien-head-watching-3d-movie-600w-1669619188.jpg';
  image3 = 'https://image.shutterstock.com/image-photo/movie-clapperboard-halloween-decoration-horror-600w-1814840768.jpg';

  constructor() { }

  ngOnInit() {
  }

}