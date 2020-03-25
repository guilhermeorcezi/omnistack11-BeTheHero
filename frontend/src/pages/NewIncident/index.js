import React, { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { InputStyled } from '../../components/InputStyle';
import { ButtonStyled } from '../../components/ButtonStyle';
import { toast } from 'react-toastify';
import * as S from './styled';
import api from '../../services/api';

export default function NewIncident() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [value, setValue] = useState('');

	const ongId = localStorage.getItem('ongId');
	const history = useHistory();

	async function handleNewIncident(e) {
		e.preventDefault();

		const data = { title, description, value };

		try {
			await api.post('incidents', data, {
				headers: {
					Authorization: ongId
				}
			});

			toast.success('Caso cadastrado.', {
				position: 'bottom-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true
			});

			history.push('/profile');
		} catch (err) {
			toast.error('Não foi possível cadastrar o caso', {
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
		<S.RegisterContainer>
			<S.Content>
				<S.SectionWrapper>
					<img src={logoImg} alt="Be the Hero" />
					<h1>Cadastrar novo caso</h1>
					<p>
						Descreva o caso detalhadamente para encontrar um herói para resolver
						isso.
					</p>

					<Link to="/profile">
						<FiArrowLeft size={16} color="E02041" />
						Voltar para home
					</Link>
				</S.SectionWrapper>
				<form onSubmit={handleNewIncident}>
					<InputStyled
						placeholder="Título do caso"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<textarea
						placeholder="Descrição"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<InputStyled
						placeholder="Valor em reais"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>

					<ButtonStyled type="submit">Cadastrar</ButtonStyled>
				</form>
			</S.Content>
		</S.RegisterContainer>
	);
}
