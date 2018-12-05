import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './spotify.service';
import { HelperService } from './helper.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent {
    title = 'spotify-app';

    constructor(private spotifyService: SpotifyService, private helperService: HelperService) {}

    ngOnInit() {
        if (location.hash) {
            this.spotifyService.accessToken = this.helperService.getHashVariable('access_token');
        } else {
            this.spotifyService.authoriseUser();
        }
    }
}
