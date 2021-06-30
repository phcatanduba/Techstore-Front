import styled from "styled-components";
import Title from "../navbar/Title";

export default function Footer() {
	return (
		<FooterContainer>
			<div>
				<Title />
				<AttendanceContainer>
					<span> Atendimento </span>
					<br></br>
					<strong>(42) 99999-9999</strong>
					<p>Para dúvidas sobre preços e produtos entre em contato</p>
					<p>atendimento@gmail.com</p>
					<span>Atendimento de segunda a sexta das 08:00 às 20:00</span>
				</AttendanceContainer>
			</div>
			<Sponsors>
				<h3>Patrocinadores</h3>
				<div>
					<img src="https://cdn.svgporn.com/logos/react.svg" alt="react logo" />
					<img src="https://cdn.svgporn.com/logos/nodejs.svg" alt="node logo" />
					<img src="https://cdn.svgporn.com/logos/html-5.svg" alt="html5 logo" />
					<img src="https://cdn.svgporn.com/logos/javascript.svg" alt="javascript logo" />
					<img src="https://styled-components.com/logo.png" alt="styled-components logo" />
				</div>
			</Sponsors>
		</FooterContainer>
	);
}

const FooterContainer = styled.div`
	background-color: #000000;
	color: #ffffff;
	line-height: 20px;
	cursor: default;
	padding: 40px;
	margin: 300px auto 0 auto;
	width: 100%;
	height: 300px;
	display: flex;
`;

const AttendanceContainer = styled.div`
	margin: 80px 0 0 0;

	* {
		margin: 5px auto;
	}
	span {
		font-size: 0.8em;
	}
	strong {
		color: #0fcb0e;
		font-size: 1.2em;
	}
	p {
		font-size: 1em;
	}
`;

const Sponsors = styled.div`
	width: 80%;
	height: 100%;
	margin: 0 auto;
	color: black;
	display: flex;
	align-items: center;
	flex-direction: column;
	h3 {
		font-family: "Concert One", cursive;
		color: #ffffff;
		font-weight: 700;
		font-size: 2em;
		margin: 0 auto 15px auto;
	}
	div {
		width: 80%;
		height: 100%;
		border-top: 1px solid #fafafa;
		padding: 10px;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		img {
			width: 80px;
			object-fit: contain;
		}
	}
`;
