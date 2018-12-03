import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  getArtists() {
    return [
      {name: 'Adam'}
    ]
  }

  constructor() { }
}
