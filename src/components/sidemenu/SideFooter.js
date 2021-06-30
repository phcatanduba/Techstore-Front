import styled from "styled-components";

export default function SideFooter() {
	return (
		<FooterContainer>
			<span> Atendimento </span>
			<br></br>
			<strong>(42) 99999-9999</strong>
			<p>Para dúvidas sobre preços e produtos entre em contato</p>
			<p>atendimento@gmail.com</p>
			<span>Atendimento de segunda a sexta das 08:00 às 20:00</span>
		</FooterContainer>
	);
}

const FooterContainer = styled.div`
	color: #303030;
	line-height: 20px;
	cursor: default;
	padding: 10px;
	margin: 100% auto 0 auto;

	* {
		margin: 3px auto;
	}
	span {
		font-size: 0.4em;
	}
	strong {
		color: #0fcb0e;
		font-size: 0.6em;
	}
	p {
		font-size: 0.5em;
	}
`;
