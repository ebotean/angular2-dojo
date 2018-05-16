import { Component, OnInit } from '@angular/core';
import { MusicaService }  from '../musicas.service'
@Component({
  selector: 'app-pesquisa-musica',
  templateUrl: './pesquisa-musica.component.html',
  styleUrls: ['./pesquisa-musica.component.css']
})
export class PesquisaMusicaComponent implements OnInit {

  constructor(private musicaService: MusicaService) { }

  ngOnInit() {
  }

  public "nome-musica": string = null;

  public pesquisar(nomeMusica: string) {
    if (nomeMusica.length > 3) {
      console.log(nomeMusica);
      this.musicaService.getMusicas(nomeMusica)
        .then((result: any) => {
        console.log(result.json());
      });
    }
  }

}
