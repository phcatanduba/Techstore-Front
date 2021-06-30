import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Title() {
	return (
		<Link to="/">
			<TitleStyle>
				Tech<span>Store</span>
			</TitleStyle>
		</Link>
	);
}

const TitleStyle = styled.h1`
	font-family: "Concert One", cursive;
	color: #ffffff;
	font-weight: 700;
	font-size: 2em;
	span {
		color: #0fcb0e;
	}
`;
