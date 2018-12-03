import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spotify-app';

  constructor(private spotifyService: SpotifyService) {

  }

  ngOnInit() {
    if (this.spotifyService.userAuthorised) {

    } else {
        this.spotifyService.authoriseUser();
    }

  }

}
