import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'FFX Characters';
  image1 = 'https://thumbs.modthesims2.com/img/1/8/1/9/5/1/MTS_Hardyboyz-277255-ffx_rikku1600x1200.jpg';
  image2 = 'https://cdn.staticneo.com/w/finalfantasy/thumb/c/c7/FFX_Yuna_becomes_summoner.jpg/300px-FFX_Yuna_becomes_summoner.jpg';
  image3 = 'https://i.pinimg.com/originals/2e/99/db/2e99db3beb0094229602e4a73b81fefe.jpg';

  constructor() { }

  ngOnInit() {
  }

}
