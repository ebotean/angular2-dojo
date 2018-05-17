import { Artista } from './artista.model';
import { Deserializable } from './deserializable.model';

export class Musica implements Deserializable {
	id: string;
	nome: string;
	artistaId: string; 
	artista: Artista;
	
	deserialize(input: any) {
		Object.assign(this, input);
		this.artista = new Artista().deserialize(input.artista);
		return this;
	}
}