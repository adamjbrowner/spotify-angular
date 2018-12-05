import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  userAuthorised: boolean = false;
  accessToken: string;

  apiEndPoint: string = "https://api.spotify.com/v1";
  clientId: string = "c886966d52d547729991a0b4acd59c16";
  authoriseUrl: string = "https://accounts.spotify.com/authorize";
  redirectUri: string = encodeURIComponent("http://localhost:4200");

  authoriseUser() {
    window.location.href = `${this.authoriseUrl}?client_id=${this.clientId}&response_type=token&redirect_uri=${this.redirectUri}`
  }

  getUserTopArtists() {
      let headers = new HttpHeaders().set('Authorization', this.accessToken);
      let artists = this.http.get(`${this.apiEndPoint}/v1/me/top/1`, {headers})
      console.log(artists)
      return artists
  }

  constructor(private http: HttpClient) { }
}
