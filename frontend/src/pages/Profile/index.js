import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import * as S from './styled';
import { FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';
import { toast } from 'react-toastify';

export default function Profile() {
	const [incidents, setIncidents] = useState([]);
	const ongId = localStorage.getItem('ongId');

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

	return (
		<S.ProfileContainer>
			<Header />
			<h1>Casos cadastrados</h1>
			{incidents.length !== 0 ? (
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
						</li>
					))}
				</ul>
			) : (
				<div className="empty">
					<p>Nenhum caso cadastrado no momento.</p>
				</div>
			)}
		</S.ProfileContainer>
	);
}
