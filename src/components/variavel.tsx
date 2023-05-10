import React from 'react';
import IVariaveis from '../interfaces/IVariaveis';

export default function Variavel(props: IVariaveis) {
	return (
		<div className="variavel">
			<label htmlFor={props.id.toString()}>{props.tipo}:</label>
			<input type="text" id={props.id.toString()} placeholder="Teste" />
		</div>
	);
}
