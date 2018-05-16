import { Component, OnInit } from '@angular/core';
import { MusicaService } from '../musicas.service';


import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  musicas: any;
  musicasPlaylist: Array<any> = new Array<any>();
  musicasSelecionadas: Array<any> = new Array<any>();
  musicasSelecionadasRemocao: Array<any> = new Array<any>();

  constructor(private musicaService: MusicaService) { }


  ngOnInit() {
    this.musicaService.getMusicas('bruno')
      .then((result: any) => {
        this.musicas = result.json();
      });
  }

  public atualizarPlaylist(musica: any) {
    if (musica == null) {
      if (this.musicasSelecionadas.length > 0) {
        this.musicasSelecionadas = [];
      } else {
        this.musicas.forEach(element => {
          this.musicasSelecionadas.push(element);
        });
      }

    } else {
      let index = this.musicasSelecionadas.indexOf(musica)
      if (index < 0) {
        this.musicasSelecionadas.push(musica);
      } else {
        this.musicasSelecionadas.splice(index, 1)
      }
    }
    console.log(this.musicasSelecionadas);
  }

  criaPlaylist() {


    this.musicasPlaylist = this.musicasSelecionadas;
    this.musicaService.putPlayList([])
      .toPromise().then((resposta: any) => {
        if (resposta.status == "200") {
            
        }
      })
  }

  removerMusicas() {
    this.musicasSelecionadasRemocao.forEach((musica) => {
      let index = this.musicasPlaylist.indexOf(musica);
      if (index >= 0) {
        this.musicasPlaylist.splice(index, 1);
      }
    })

  }

  public marcaMusicaRemocao(musica: any) {
    let index = this.musicasSelecionadasRemocao.indexOf(musica);
    if (index >= 0) {
      this.musicasSelecionadasRemocao.splice(index, 1);
    } else {
      this.musicasSelecionadasRemocao.push(musica);
    }
  }
}
