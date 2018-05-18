import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pesquisa-playlist',
  templateUrl: './pesquisa-playlist.component.html',
  styleUrls: ['./pesquisa-playlist.component.css']
})
export class PesquisaPlaylistComponent {

  @Output() onUpdateSearch: EventEmitter<string> = new EventEmitter<string>();

  public pesquisar (nomeUsuario: string) {

    this.onUpdateSearch.emit(nomeUsuario);
  }

}
