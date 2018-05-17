import { Component, Output, EventEmitter } from '@angular/core';
import { Musica }  from '../shared/models/musica.model';
import { MusicService }  from '../shared/music.service';


@Component({
  selector: 'app-pesquisa-musica',
  templateUrl: './pesquisa-musica.component.html',
  styleUrls: ['./pesquisa-musica.component.css']
})
export class PesquisaMusicaComponent {

  @Output() onUpdateSearch: EventEmitter<Musica[]> = new EventEmitter<Musica[]>();

  constructor(private musicService: MusicService) { }

  buscaMusica(filtro: string) {
    if (filtro.length <= 3)
      return;

    this.musicService.getMusicas(filtro)
        .subscribe(
          (data: Musica[]) => this.onUpdateSearch.emit(data),
          err => console.error(err)
        );
  }

}
