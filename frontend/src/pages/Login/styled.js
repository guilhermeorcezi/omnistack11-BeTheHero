import styled from 'styled-components';

export const LoginContainer = styled.div`
	width: 100%;
	max-width: 1120px;
	height: 100vh;
	margin: 0 auto;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const SectionForm = styled.section`
	width: 100%;
	max-width: 350px;
	margin-right:30px form {
		margin-top: 100px;
	}

	h1 {
		font-size: 32px;
		margin-bottom: 32px;
	}

	a {
		display: flex;
		align-items: center;
		margin-top: 40px;
		color: #41414d;
		font-size: 18px;
		text-decoration: none;
		font-weight: bold;
		transition: opacity 0.2s;
	}

	a:hover {
		opacity: 0.8;
	}

	a svg {
		margin-right: 8px;
	}
`;
