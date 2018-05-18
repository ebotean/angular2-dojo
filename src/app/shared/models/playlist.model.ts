import { Musica } from './musica.model';
import { Guid } from 'guid-typescript';

export class Playlist {
	id: string;
	playlistMusicas: Musica[];

	constructor(id: string = Guid.create().toString(), playlistMusicas: Musica[] = []) {
		this.id = id;
		this.playlistMusicas = playlistMusicas;
	}

	deserialize(input: any) {
		Object.assign(this, input);
		this.playlistMusicas.forEach(element => {
			element = new Musica().deserialize(element);
		});
		return this;
	}
}