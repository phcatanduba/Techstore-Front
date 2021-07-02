import { Link } from "react-router-dom";
import styled from "styled-components";

export default function CategoryButtonMenu({ title, to, children }) {
	return (
		<Link to={to}>
			<ButtonMenuContainer>
				{children}
				<strong>{title}</strong>
			</ButtonMenuContainer>
		</Link>
	);
}

const ButtonMenuContainer = styled.button`
	height: 55px;
	width: 95%;
	border: none;
	border-bottom: 1px solid gray;
	outline: none;
	background-color: transparent;
	margin: 0 auto;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 30px;
	color: #5eae0f;
	cursor: pointer;

	strong {
		margin-left: 20px;
		font-size: 20px;
		color: black;
		word-wrap: break-all;
	}

	:hover {
		background-color: #e5ffe5;
	}
`;
