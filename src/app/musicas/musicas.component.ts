import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Musica } from '../shared/models/musica.model';


@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.css']
})

export class MusicasComponent {
  
  musicasSelecionadas: Array<any> = new Array<any>()
  @Input() listaMusicas: Array<any> = new Array<any>();
  @Input() addedSongs: Array<Musica> = new Array<Musica>();
  @Output() adicionado: EventEmitter<any> = new EventEmitter<any>()

  public selecionarMusica(musica: any) {

    this.adicionado.emit(musica);
  }

  updateSongs(listaMusicas: Musica[]): void {
  	console.log("updating songs");
  	if (event)
  		this.listaMusicas = listaMusicas;
  }
}
