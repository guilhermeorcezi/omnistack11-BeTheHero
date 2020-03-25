import styled from 'styled-components';

export const HeaderWrapper = styled.header`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

	display: flex;
	align-items: center;

	span {
		font-size: 20px;
        margin-left: 24px;
        font-weight:500;
	}

	img {
		height: 64px;
	}

	a {
		width: 260px;
		margin-left: auto;
        margin-top: 0;
        text-align:center;
        background:#e02041;
        border:0;
        border-radius:8px;
        color:#fff;
        display:inline-block
        text-align:center;
        text-decoration:none;
        font-size:18px;
        line-height:60px;
    }
      
        a:hover{
          filter:brightness(90%);
        }

	button {
		height: 60px;
		width: 60px;
		border-radius: 4px;
		border: 1px solid #dcdce6;
		background: transparent;
		margin-left: 16px;
		transition: border-color 0.2s;
	}

	button svg{
		margin-top: 5px;
	}

	button:hover {
		border-color: #999;
    }
    
`;