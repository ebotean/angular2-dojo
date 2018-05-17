import { Musica } from './musica.model';

export class Playlist {
	playlistId: string;
	playlistMusicas: Musica[];
	musicaId: string;
	musica: Musica;

	deserialize(input: any) {
		Object.assign(this, input);
		this.playlistMusicas.forEach(element => {
			element = new Musica().deserialize(element);
		});
		return this;
	}
}