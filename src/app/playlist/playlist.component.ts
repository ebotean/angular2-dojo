import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Musica } from '../shared/models/musica.model';
import { Playlist } from '../shared/models/playlist.model';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {
  @Input() musicasPlaylist: Array<any> = new Array<any>();
  @Output() searchUpdated: EventEmitter<Playlist> = new EventEmitter<Playlist>();
  @Output() enqueued: EventEmitter<any> = new EventEmitter<any>();

  public rebounceEvent(playlist: Playlist) {

  	this.searchUpdated.emit(playlist);
  }

  public enqueueDeletion(musica:any) {

    this.enqueued.emit(musica);
  }

}
