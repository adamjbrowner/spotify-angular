import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';

import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule }    from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'auth-complete',
    component: AppComponent,
    data: { authorized: true }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
