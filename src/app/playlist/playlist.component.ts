import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  @Input() musicasPlaylist: Array<any> = new Array<any>();
  @Output() removido: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {
  
  }

  public selecionarMusica(musica:any) {
    console.log(musica);
    this.removido.emit(musica);
  }

}
