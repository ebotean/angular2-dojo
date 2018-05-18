import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Musica } from '../shared/models/musica.model';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {
  @Input() musicasPlaylist: Array<any> = new Array<any>();
  @Output() searchUpdated: EventEmitter<string> = new EventEmitter<string>();
  @Output() enqueued: EventEmitter<any> = new EventEmitter<any>();

  public rebounceEvent(nomeUsuario: string) {

  	this.searchUpdated.emit(nomeUsuario);
  }

  public enqueueDeletion(musica:any) {

    this.enqueued.emit(musica);
  }

}
