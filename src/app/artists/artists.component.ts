import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';


import { Artist } from '../artist';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  artists: Artist[];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.artists = this.spotifyService.getUserTopArtists();
  }

}
