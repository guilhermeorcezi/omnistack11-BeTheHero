import styled from 'styled-components';

export const BackLinkStyled = styled.a`
	display: flex;
	align-items: center;
	margin-top: 40px;
	color: #41414d;
	font-size: 18px;
	text-decoration: none;
	font-weight: bold;
	transition: opacity 0.2s;

	&:hover {
		opacity: 0.8;
	}

	svg {
		margin-right: 8px;
	}
`;
