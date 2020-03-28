import React, { useState } from 'react';
import { InputStyled } from '../../components/InputStyle';
import { ButtonStyled } from '../../components/ButtonStyle';
import * as S from './styled';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const [city, setCity] = useState('');
	const [uf, setUf] = useState('');

	const history = useHistory();

	async function handleRegister(e) {
		e.preventDefault();

		const data = { name, email, whatsapp, city, uf };
		try {
			const response = await api.post('ongs', data);
			toast.success(`Cadastrado com sucesso! ID:${response.data.id}`, {
				position: 'bottom-right',
				autoClose: 12000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true
			});

			history.push('/')

		} catch (err) {
			toast.error('Erro no cadastro. Tente novamente.', {
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
		<>
		
			<S.RegisterContainer>
				<S.Content>
					<S.SectionWrapper>
						<img src={logoImg} alt="Be the Hero" />
						<h1>Cadastro</h1>
						<p>
							Faça seu cadastro, entre na plataforma e ajude pessoas a
							encontrarem os casos de sua ONG.
						</p>

						<Link to="/">
							<FiArrowLeft size={16} color="E02041" />
							Já possuo uma conta
						</Link>
					</S.SectionWrapper>
					<form onSubmit={handleRegister}>
						<InputStyled
							placeholder="Nome da ONG"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
						<InputStyled
							type="email"
							placeholder="E-mail"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<InputStyled
							placeholder="Whatsapp"
							value={whatsapp}
							onChange={(e) => setWhatsapp(e.target.value)}
							required
						/>

						<div className="input-group">
							<InputStyled
								placeholder="Cidade"
								value={city}
								onChange={(e) => setCity(e.target.value)}
								required
							/>
							<InputStyled
								placeholder="UF"
								style={{ width: 80 }}
								value={uf}
								onChange={(e) => setUf(e.target.value)}
								required
							/>
						</div>

						<ButtonStyled type="submit">Cadastrar</ButtonStyled>
					</form>
				</S.Content>
			</S.RegisterContainer>
		</>
	);
}
