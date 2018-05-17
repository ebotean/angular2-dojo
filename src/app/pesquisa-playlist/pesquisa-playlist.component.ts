import { Component, EventEmitter, Output } from '@angular/core';
import { MusicService } from '../shared/music.service';
import { Musica } from '../shared/models/musica.model';
import { Playlist } from '../shared/models/playlist.model';

@Component({
  selector: 'app-pesquisa-playlist',
  templateUrl: './pesquisa-playlist.component.html',
  styleUrls: ['./pesquisa-playlist.component.css']
})
export class PesquisaPlaylistComponent {

  @Output() onUpdateSearch: EventEmitter<Playlist> = new EventEmitter<Playlist>();

  constructor(private musicService: MusicService) { }

  public pesquisar (nomeUsuario: string) {

    this.musicService.getPlaylist(nomeUsuario)
      .subscribe( (data: Playlist) => this.onUpdateSearch.emit(data));
  }

}
