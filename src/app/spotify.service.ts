import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  userAuthorised: boolean = false;
  clientId: string = "c886966d52d547729991a0b4acd59c16";

  authoriseUrl: string = "https://accounts.spotify.com/authorize";
  redirectUri: string = encodeURIComponent("http://localhost:4200");

  authoriseUser() {
    window.location.href = `${this.authoriseUrl}?client_id=${this.clientId}&response_type=token&redirect_uri=${this.redirectUri}`
  }

  constructor() { }
}
