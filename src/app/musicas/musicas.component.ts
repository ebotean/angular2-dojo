import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.css']
})

export class MusicasComponent implements OnInit {
  
  musicasSelecionadas: Array<any> = new Array<any>()
  @Input() listaMusicas: Array<any> = new Array<any>();
  @Output() adicionado: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {
    
  }

  public selecionarMusica(musica: any) {

    this.adicionado.emit(musica);
  }
}
