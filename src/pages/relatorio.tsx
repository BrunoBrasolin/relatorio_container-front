import React, { useState } from 'react';
import Header from '../components/header';
import Variavel from '../components/variavel';

import Plus from '../assets/images/plus.png';
import IVariaveis from '../interfaces/IVariaveis';

export default function Relatorio() {
	const [variaveis, setVariaveis] = useState<IVariaveis[]>([
		{ id: 99999, tipo: 'Teste99999' },
		{ id: 999999, tipo: 'Teste999999' },
	]);
	const [contador, setContador] = useState<number>(1);

	return (
		<div>
			<Header />

			<div className="intro container">
				<h2>Relatório de contêineres</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus accusamus sit quae iusto minima esse dolore voluptatum reprehenderit aliquam quod porro vitae asperiores,
					repudiandae eligendi eos aut placeat expedita.
				</p>
			</div>

			<div className="variaveis container">
				{variaveis!.map(variavel => {
					return <Variavel tipo={variavel.tipo} id={variavel.id} key={variavel.id} />;
				})}

				<button
					className="adicionar"
					onClick={() => {
						setVariaveis([...variaveis, { id: contador, tipo: `Teste${contador}` }]);
						setContador(contador + 1);
					}}
				>
					<img src={Plus} alt="adcionar" />
					Adicionar Variável
				</button>
			</div>
		</div>
	);
}
