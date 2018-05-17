import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Musica } from '../shared/models/musica.model';
import { Playlist } from '../shared/models/playlist.model';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

@Injectable()
export class MusicService {
	
	private serviceUrl: string = 'https://intense-ocean-93206.herokuapp.com/api/';

	constructor(private http: Http) {}

	getMusicas(params: string): Observable<Musica[]> {

		return this.http.get(this.serviceUrl +'musicas/'+this.resolveUrl('filtro', params))
					.map((res: Response) => res.json().map((musica: Musica) => new Musica().deserialize(musica)));
	}

	getPlaylist(params: string) {

		return this.http.get(this.serviceUrl +'playlists/'+this.resolveUrl('user', params))
					.map((playlist: Response) => new Playlist().deserialize(playlist.json()));
	}

	putPlaylist() {
		console.log("Putting playlist");
	}

	private resolveUrl(key:string, params: string) {

		if (params.length > 0)
			return "?"+key+"="+params;
		return "";
	}
}