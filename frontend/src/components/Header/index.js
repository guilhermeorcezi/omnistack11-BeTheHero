import React from 'react';
import * as S from './styled';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

export default function Header() {
	const ongName = localStorage.getItem('ongName');
	const history = useHistory();

	async function handleLogout() {
		localStorage.clear();

		history.push('/');
	}

	return (
		<S.HeaderWrapper>
			<img src={logoImg} alt="Be the Hero" />
			<span>Bem Vinda, {ongName}</span>

			<Link to="/incidents/new">Cadastrar novo caso</Link>
			<button onClick={handleLogout}>
				<FiPower size={18} />
			</button>
		</S.HeaderWrapper>
	);
}
