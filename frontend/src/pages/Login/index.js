import React, { useState } from 'react';
import * as S from './styled';
import { ButtonStyled } from '../../components/ButtonStyle';
import { InputStyled } from '../../components/InputStyle';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import heroesImg from '../../assets/heroes.png';
import { FiLogIn } from 'react-icons/fi';
import { toast } from 'react-toastify';
import api from '../../services/api';

export default function Login() {
	const [id, setId] = useState('');
	const history = useHistory();

	async function handleLogin(e) {
		e.preventDefault();

		try {
			const response = await api.post('sessions', { id });

			console.log(response.data.name)
			localStorage.setItem('ongId', id);
			localStorage.setItem('ongName', response.data.name);

			history.push('/profile');
		} catch (err) {
			toast.error('Login inválido. Tente novamente', {
				position: 'bottom-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true
			});
		}
	}

	return (
		<S.LoginContainer>
			<S.SectionForm>
				<img src={logoImg} alt="Be The Hero" />

				<form onSubmit={handleLogin}>
					<h1>Faça seu login</h1>
					<InputStyled
						placeholder="Sua ID"
						value={id}
						onChange={(e) => setId(e.target.value)}
					/>
					<ButtonStyled type="submit">Entrar</ButtonStyled>

					<Link to="/register">
						<FiLogIn size={16} color="E02041" />
						Não tenho cadastro
					</Link>
				</form>
			</S.SectionForm>

			<img src={heroesImg} alt="Heroes" />
		</S.LoginContainer>
	);
}
