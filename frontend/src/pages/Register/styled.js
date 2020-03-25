import styled from 'styled-components';

export const RegisterContainer = styled.div`
	width: 100%;
	max-width: 1120px;
	height: 100vh;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Content = styled.div`
	width: 100%;
	padding: 96px;
	background: #f0f0f5;
	box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	form {
		width: 100%;
		max-width: 450px;
	}

	input {
		margin-top: 8px;
	}

	.input-group {
		display: flex;
    }
    
	.input-group input + input {
		margin-left: 8px;
	}
`;

export const SectionWrapper = styled.section`
	width: 100%;
	max-width: 380px;

	h1 {
		margin: 64px 0 32px;
		font-size: 32px;
	}

	p {
		font-size: 18px;
		color: #737380;
		line-height: 32px;
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
