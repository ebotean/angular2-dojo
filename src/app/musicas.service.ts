import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { HttpHeaders, HttpResponse } from '@angular/common/http'
import { Guid } from 'guid-typescript'

declare let guid


import { Observable } from 'rxjs/Observable'

@Injectable()
export class MusicaService {

    constructor(private http: Http) {


    }

    public urlService: string = 'https://intense-ocean-93206.herokuapp.com/api/'

    public getMusicas(filter: string): Promise<any> {
        let apiUrl = this.urlService + "musicas/?filtro=" + filter;

        return this.http.get(apiUrl).toPromise();
    }

    public getPlaylists(usuario: string): Promise<any> {
        let apiUrl = this.urlService + "playlists/?user=" + usuario;

        return this.http.get(apiUrl).toPromise();
    }

    public putPlayList(musicas: Array<any>) {
        let idUsuario = Guid.create();
        let apiUrl = this.urlService + "playlists/" + idUsuario + "/musicas";

        return this.http.put(apiUrl, []);
    }


}