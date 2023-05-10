import React from 'react';
import T2S from '../assets/svg/T2S.svg';

export default function Header() {
	return (
		<header>
			<div className="container">
				<div className="left">
					<a href="https://t2s.com.br">
						<img src={T2S} className="App-logo" alt="logo" />
					</a>
				</div>

				<div className="right">Usuário</div>
			</div>
		</header>
	);
}
