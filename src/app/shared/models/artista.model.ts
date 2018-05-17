import { Deserializable } from './deserializable.model';

export class Artista {

	id: string; 
	nome: string;

	deserialize(input: any): this {
		Object.assign(this, input);
		return this;
	}
}