import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import * as S from './styled';
import { ButtonStyled } from '../../components/ButtonStyle';
import { InputStyled } from '../../components/InputStyle';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import api from '../../services/api';
import { toast } from 'react-toastify';

export default function Profile() {
	const [incidents, setIncidents] = useState([]);
	const [id, setId] = useState([]);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [value, setValue] = useState('');
	const ongId = localStorage.getItem('ongId');
	const [editMode, setEditMode] = useState(false);

	useEffect(() => {
		api
			.get('profile', {
				headers: {
					Authorization: ongId
				}
			})
			.then((res) => {
				setIncidents(res.data);
			});
	}, [ongId, incidents]);

	async function handleDeleteIncident(id) {
		try {
			await api.delete(`incidents/${id}`, {
				headers: {
					Authorization: ongId
				}
			});

			toast.success('Caso deletado.', {
				position: 'bottom-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true
			});
		} catch (err) {
			toast.error('Não foi possível excluir o caso. Tente novamente', {
				position: 'bottom-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true
			});
		}
	}

	async function toggle(item) {
		setId(item.id);
		setTitle(item.title);
		setDescription(item.description);
		setValue(item.value);

		setEditMode(true);
	}

	async function handleEditIncident(e) {
		e.preventDefault();

		const data = { title, description, value };

		try {
			await api.put(`incidents/edit/${id}`, data, {
				headers: {
					Authorization: ongId
				}
			});

			toast.success('Caso editado.', {
				position: 'bottom-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true
			});

			setEditMode(false);
		} catch (err) {
			toast.error('Não foi possível editar o caso', {
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
		<S.ProfileContainer>
			<Header />

			<h1>{editMode ? 'Editar caso' : 'Casos Cadastrados'}</h1>
			{incidents.length !== 0 ? (
				editMode ? (
					<div class="section-edit">
						<form onSubmit={handleEditIncident}>
							<InputStyled
								placeholder="Título do caso"
								name="title"
								type="text"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								required
							/>
							<InputStyled
								placeholder="Descrição do caso"
								name="description"
								type="text"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								required
							/>
							<InputStyled
								placeholder="Valor do caso"
								name="value"
								value={value}
								onChange={(e) => setValue(e.target.value)}
								required
							/>
							<ButtonStyled type="submit">Salvar alterações</ButtonStyled>
						</form>
					</div>
				) : (
					<ul>
						{incidents.map((item) => (
							<li key={item.id}>
								<strong>CASO:</strong>
								<p>{item.title}</p>

								<strong>DESCRIÇÃO:</strong>
								<p>{item.description}</p>

								<strong>VALOR:</strong>
								<p>
									{Intl.NumberFormat('pt-BR', {
										style: 'currency',
										currency: 'BRL'
									}).format(item.value)}
								</p>

								<button
									type="button"
									onClick={() => handleDeleteIncident(item.id)}
								>
									<FiTrash2 size={20} color="#8a8ab3" />
								</button>

								<button
									className="edit"
									type="button"
									onClick={(e) => toggle(item)}
								>
									<FiEdit size={20} color="#8a8ab3" />
								</button>
							</li>
						))}
					</ul>
				)
			) : (
				<div className="empty">
					<p>Nenhum caso cadastrado no momento.</p>
				</div>
			)}
		</S.ProfileContainer>
	);
}
