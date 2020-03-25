import styled from 'styled-components';

export const ProfileContainer = styled.div`
	width: 100%;
	max-width: 1180px;
	padding: 0 30px;
	margin: 32px auto;

	h1 {
		margin-top: 80px;
		margin-bottom: 24px;
	}

	ul {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 24px;
	}

	ul li {
		background: #fff;
		padding: 24px;
		border-radius: 8px;
		position: relative;
	}

	ul li button {
		position: absolute;
		right: 24px;
		top: 24px;
        border: 0;
        background-color: transparent
    }
    
    ul li button svg{
        background:transparent
    }

	ul li button:hover {
		opacity: 0.8;
	}

	ul li strong {
		display: block;
		margin-bottom: 16px;
		color: #41414d;
	}

	ul li p + strong {
		margin-top: 32px;
	}

	ul li p {
		color: #737380;
		line-height: 21px;
		font-size: 16px;
	}
`;
