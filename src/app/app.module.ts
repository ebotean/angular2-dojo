import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MusicasComponent } from './musicas/musicas.component';

import { MusicaService } from './musicas.service';
import { PesquisaMusicaComponent } from './pesquisa-musica/pesquisa-musica.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PesquisaPlaylistComponent } from './pesquisa-playlist/pesquisa-playlist.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MusicasComponent,
    PesquisaMusicaComponent,
    PlaylistComponent,
    PesquisaPlaylistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MusicaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
